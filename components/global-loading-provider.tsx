"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type LoadingToken = string;

type LoadingOptions = {
  timeoutMs?: number;
};

type GlobalLoadingContextValue = {
  isLoading: boolean;
  startLoading: (options?: LoadingOptions) => LoadingToken;
  stopLoading: (token: LoadingToken) => void;
  withLoading: <T>(promise: Promise<T>, options?: LoadingOptions) => Promise<T>;
};

const ROUTE_FALLBACK_TIMEOUT_MS = 12000;

const GlobalLoadingContext = createContext<GlobalLoadingContextValue | null>(
  null
);

function createToken(): LoadingToken {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function GlobalLoadingOverlay({ active }: { active: boolean }) {
  return (
    <div
      aria-hidden={!active}
      className={cn("global-loading-overlay", active && "is-active")}
    >
      <div className="global-loading-overlay__backdrop" />

      <div
        role="status"
        aria-live="polite"
        aria-label="Loading page content"
        className="global-loading-overlay__spinner"
      >
        <span className="global-loading-overlay__ring global-loading-overlay__ring--outer" />
        <span className="global-loading-overlay__ring global-loading-overlay__ring--mid" />
        <span className="global-loading-overlay__ring global-loading-overlay__ring--inner" />
        <span className="global-loading-overlay__core" />
        <span className="global-loading-overlay__label">Loading</span>
      </div>
    </div>
  );
}

export function GlobalLoadingProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const navigationTokenRef = useRef<LoadingToken | null>(null);
  const activeTokensRef = useRef(new Set<LoadingToken>());
  const timersRef = useRef(new Map<LoadingToken, ReturnType<typeof setTimeout>>());

  const [isLoading, setIsLoading] = useState(false);

  const syncLoadingState = useCallback(() => {
    setIsLoading(activeTokensRef.current.size > 0);
  }, []);

  const stopLoading = useCallback(
    (token: LoadingToken) => {
      if (!activeTokensRef.current.has(token)) {
        return;
      }

      activeTokensRef.current.delete(token);

      const timer = timersRef.current.get(token);
      if (timer) {
        clearTimeout(timer);
        timersRef.current.delete(token);
      }

      syncLoadingState();
    },
    [syncLoadingState]
  );

  const startLoading = useCallback(
    (options?: LoadingOptions): LoadingToken => {
      const token = createToken();
      activeTokensRef.current.add(token);

      const timeoutMs = options?.timeoutMs ?? 0;
      if (timeoutMs > 0) {
        const timerId = setTimeout(() => {
          stopLoading(token);
        }, timeoutMs);
        timersRef.current.set(token, timerId);
      }

      syncLoadingState();
      return token;
    },
    [stopLoading, syncLoadingState]
  );

  const withLoading = useCallback(
    async <T,>(promise: Promise<T>, options?: LoadingOptions): Promise<T> => {
      const token = startLoading(options);
      try {
        return await promise;
      } finally {
        stopLoading(token);
      }
    },
    [startLoading, stopLoading]
  );

  const stopNavigationLoading = useCallback(() => {
    if (!navigationTokenRef.current) {
      return;
    }

    stopLoading(navigationTokenRef.current);
    navigationTokenRef.current = null;
  }, [stopLoading]);

  const startNavigationLoading = useCallback(() => {
    if (navigationTokenRef.current) {
      return;
    }

    navigationTokenRef.current = startLoading({
      timeoutMs: ROUTE_FALLBACK_TIMEOUT_MS,
    });
  }, [startLoading]);

  const routeKey = useMemo(() => {
    const search = searchParams?.toString();
    return `${pathname ?? ""}${search ? `?${search}` : ""}`;
  }, [pathname, searchParams]);

  useEffect(() => {
    stopNavigationLoading();
  }, [routeKey, stopNavigationLoading]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.button !== 0) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      if (!anchor) {
        return;
      }

      if (anchor.hasAttribute("download")) {
        return;
      }

      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) {
        return;
      }

      let nextUrl: URL;
      try {
        nextUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (!["http:", "https:"].includes(nextUrl.protocol)) {
        return;
      }

      if (nextUrl.origin !== window.location.origin) {
        return;
      }

      const currentUrl = new URL(window.location.href);
      const isSamePathAndQuery =
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.search === currentUrl.search;

      if (isSamePathAndQuery) {
        return;
      }

      startNavigationLoading();
    };

    const handlePopState = () => {
      startNavigationLoading();
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [startNavigationLoading]);

  useEffect(() => {
    if (isLoading) {
      document.body.setAttribute("aria-busy", "true");
      return;
    }

    document.body.removeAttribute("aria-busy");
  }, [isLoading]);

  useEffect(() => {
    const timers = timersRef.current;
    const activeTokens = activeTokensRef.current;

    return () => {
      timers.forEach((timerId) => clearTimeout(timerId));
      timers.clear();
      activeTokens.clear();
      navigationTokenRef.current = null;
      document.body.removeAttribute("aria-busy");
    };
  }, []);

  const value = useMemo<GlobalLoadingContextValue>(
    () => ({
      isLoading,
      startLoading,
      stopLoading,
      withLoading,
    }),
    [isLoading, startLoading, stopLoading, withLoading]
  );

  return (
    <GlobalLoadingContext.Provider value={value}>
      {children}
      <GlobalLoadingOverlay active={isLoading} />
    </GlobalLoadingContext.Provider>
  );
}

export function useGlobalLoading() {
  const context = useContext(GlobalLoadingContext);

  if (!context) {
    throw new Error(
      "useGlobalLoading must be used within a GlobalLoadingProvider"
    );
  }

  return context;
}
