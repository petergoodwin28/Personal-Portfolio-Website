"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Hero2() {
  const interactiveRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !interactiveRef.current) {
      return;
    }

    const canUseHoverPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canUseHoverPointer) {
      return;
    }

    const interBubble = interactiveRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let rafId = 0;
    let isAnimating = false;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;

      const isSettled =
        Math.abs(tgX - curX) < 0.5 && Math.abs(tgY - curY) < 0.5;

      if (isSettled) {
        isAnimating = false;
        rafId = 0;
        return;
      }

      rafId = requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;

      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(move);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [prefersReducedMotion]);

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: false }
    : {
        initial: { opacity: 0, y: 30, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  return (
    <section className="hero-shell">
      <div className="grad-bg">
        <div className="hero-vignette" />

        <div className="hero-foreground">
          <div className="hero-grid">
            <motion.div
              {...motionProps}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hero-copy-block"
            >
              <p className="hero-kicker">Digital Portfolio</p>

              <div className="hero-name-wrap">
                <span aria-hidden className="hero-name-ghost">
                  Peter Goodwin
                </span>
                <h1 className="hero-name-main">Peter Goodwin</h1>
              </div>

              <div className="hero-role-pill">
                <span className="hero-role-dot" />
                Web Developer
              </div>

              <p className="hero-supporting-copy">
                I design and build modern web experiences with strong visual
                systems, clean engineering, and polished interaction.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto max-w-sm sm:max-w-none">
                <Button asChild size="lg" className="bubble-hover w-full sm:w-auto">
                  <Link href="/work">Explore Work</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hero-cta-outline w-full sm:w-auto"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </motion.div>

            <motion.aside
              {...motionProps}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
              className="hero-signal-panel"
            >
              <p className="hero-panel-label">Current Focus</p>
              <ul className="hero-panel-list">
                <li>Frontend architecture with Next.js</li>
                <li>Theme-aware UI systems and motion design</li>
                <li>Reusable component engineering</li>
              </ul>
            </motion.aside>
          </div>
        </div>

        <svg
          viewBox="0 0 1200 1200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="noiseBg"
          style={{ zIndex: 5 }}
          aria-hidden="true"
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
            filter="url(#noiseFilterBg)"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svgBlur"
          style={{ zIndex: 5 }}
        >
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

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div ref={interactiveRef} className="interactive"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
