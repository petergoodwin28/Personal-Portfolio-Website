import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  const [viewportWidth, setViewportWidth] = useState<number | undefined>(undefined);
  const [viewportHeight, setViewportHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Ensure that the code runs only on the client-side
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);

      const interBubble = document.querySelector(".interactive") as HTMLElement;
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(move);
      };

      window.addEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("mousemove", (event) => {
          tgX = event.clientX;
          tgY = event.clientY;
        });
      };
    }
  }, [viewportWidth]); // Empty dependency array to run only once after initial render

  // Fallback content in case the viewport dimensions are not available yet
  if (viewportWidth === undefined || viewportHeight === undefined) {
    return null;
  }

  return (
    <section className="h-fit">
      <div className="gradient-bg">
        <div className="card mt-40 mb-40 w-fit h-fit" style={{ zIndex: 10 }}>
          <div className="content">
            <h1>Welcome to my Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              tempore unde ex pariatur distinctio laboriosam, dolorem quibusdam
              aperiam expedita consequuntur dolorum porro vitae earum quos
              voluptates et maxime. Tempora, mollitia.
            </p>
            <Button variant={"secondary"}>Websites</Button>
          </div>
        </div>

        <Button variant={"outline"} style={{ zIndex: 20 }} className="mb-32 mt-auto">
          <FaArrowDown />
        </Button>

        <svg
          viewBox={`0 0 ${viewportWidth} ${viewportHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          className="noiseBg"
          style={{ zIndex: 5 }}
        >
          <filter id="noiseFilterBg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilterBg)"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur" style={{ zIndex: 5 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container" style={{ zIndex: 0 }}>
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </section>
  );
}
