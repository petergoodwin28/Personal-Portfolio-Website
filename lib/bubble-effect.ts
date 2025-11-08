// bubble-effect.ts

export function initBubbleEffect(selector = ".bubble-hover") {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  document.addEventListener("mousemove", (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const withinX = x >= rect.left && x <= rect.right;
      const withinY = y >= rect.top && y <= rect.bottom;

      if (withinX && withinY) {
        const offsetX = x - rect.left;
        const offsetY = y - rect.top;

        el.style.setProperty("--x", `${offsetX}px`);
        el.style.setProperty("--y", `${offsetY}px`);
      }
    });
  });
}
