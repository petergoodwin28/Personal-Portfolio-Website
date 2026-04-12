// bubble-effect.ts

export function initBubbleEffect(selector = ".bubble-hover") {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => undefined;
  }

  const canUseHoverPointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  if (!canUseHoverPointer) {
    return () => undefined;
  }

  const trackedElements = new Set<HTMLElement>();

  const updatePointerVars = (
    element: HTMLElement,
    clientX: number,
    clientY: number
  ) => {
    const rect = element.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    element.style.setProperty("--x", `${offsetX}px`);
    element.style.setProperty("--y", `${offsetY}px`);
  };

  const handlePointerMove = (event: PointerEvent) => {
    const element = event.currentTarget as HTMLElement;
    updatePointerVars(element, event.clientX, event.clientY);
  };

  const handlePointerEnter = (event: PointerEvent) => {
    const element = event.currentTarget as HTMLElement;
    updatePointerVars(element, event.clientX, event.clientY);
  };

  const attachBubbleHandlers = (element: HTMLElement) => {
    if (trackedElements.has(element)) {
      return;
    }

    trackedElements.add(element);
    element.addEventListener("pointerenter", handlePointerEnter, {
      passive: true,
    });
    element.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
  };

  const detachBubbleHandlers = (element: HTMLElement) => {
    if (!trackedElements.has(element)) {
      return;
    }

    trackedElements.delete(element);
    element.removeEventListener("pointerenter", handlePointerEnter);
    element.removeEventListener("pointermove", handlePointerMove);
  };

  const scanAndAttach = (root: ParentNode) => {
    if (!(root instanceof Element) && root !== document) {
      return;
    }

    if (root instanceof HTMLElement && root.matches(selector)) {
      attachBubbleHandlers(root);
    }

    root.querySelectorAll<HTMLElement>(selector).forEach(attachBubbleHandlers);
  };

  scanAndAttach(document);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return;
        }

        scanAndAttach(node);
      });

      mutation.removedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return;
        }

        if (node.matches(selector)) {
          detachBubbleHandlers(node as HTMLElement);
        }

        node
          .querySelectorAll<HTMLElement>(selector)
          .forEach(detachBubbleHandlers);
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    trackedElements.forEach(detachBubbleHandlers);
  };
}
