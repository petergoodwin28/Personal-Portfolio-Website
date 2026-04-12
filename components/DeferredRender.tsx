"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredRenderProps = {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
};

export default function DeferredRender({
  children,
  placeholder = null,
  rootMargin = "240px 0px",
}: DeferredRenderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible || !markerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(markerRef.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  if (isVisible) {
    return <>{children}</>;
  }

  return <div ref={markerRef}>{placeholder}</div>;
}
