'use client';

import { useEffect, useRef, useState } from 'react';

const SHAPE_COUNT = 12;
const RADIUS = 100; // radius of the circle around heading in px
const PIN_POSITIONS = [0, 120, 240]; // degrees where pins are located

export default function RotateLock() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shapeRefs = useRef<HTMLDivElement[]>([]);
  const rotationRef = useRef(0);
  const lastPinHitRef = useRef<number | null>(null);
  const [pinHitCount, setPinHitCount] = useState(0);

  useEffect(() => {
    if (!headingRef.current) return;

    if (pinHitCount >= 2) {
      // Once two pins are hit, no scroll listener needed
      return;
    }

    const onScroll = () => {
      // Calculate scroll progress 0 to 1 between scrollY=0 and scrollY=200
      let scrollY = window.scrollY;
      if (scrollY > 200) scrollY = 200;
      if (scrollY < 0) scrollY = 0;
      const progress = scrollY / 200;

      // Calculate current rotation from 0 to 360 degrees based on scroll
      const rotation = 360 * progress;
      rotationRef.current = rotation;

      // Get heading center position (fixed so shapes won't move up/down)
      const headingRect = headingRef.current!.getBoundingClientRect();
      const center = {
        x: headingRect.left + headingRect.width / 2,
        y: headingRect.top + headingRect.height / 2 + window.scrollY, // compensate scroll to fix vertical pos
      };

      // Position shapes in circle with rotation
      shapeRefs.current.forEach((shape, index) => {
        const baseAngle = (360 / SHAPE_COUNT) * index;
        const totalAngle = (baseAngle + rotation) % 360;

        // Convert degrees to radians
        const rad = (totalAngle * Math.PI) / 180;

        // Calculate x,y position on circle (center fixed)
        const x = center.x + RADIUS * Math.cos(rad);
        const y = center.y + RADIUS * Math.sin(rad);

        // Apply styles
        shape.style.position = 'absolute';
        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;
        shape.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`; // rotate shape itself too

        // Enlarge the shape that is currently closest to top (active)
        const diffToTop = Math.min(
          Math.abs(totalAngle - 270),
          360 - Math.abs(totalAngle - 270)
        );
        const isActive = diffToTop < 15; // 15 degree threshold

        shape.style.width = isActive ? '32px' : '24px';
        shape.style.height = isActive ? '32px' : '24px';

        // Add 'bg-foreground' class styles via inline bg color since no Tailwind here
        shape.style.backgroundColor = 'black';

        // Border radius: alternate circle/square
        shape.style.borderRadius = index % 2 === 0 ? '0%' : '50%';
      });

      // Check pin hits for 3 specific angles
      for (const pin of PIN_POSITIONS) {
        const diff = Math.abs(rotation - pin) % 360;
        if (diff < 2 || diff > 358) {
          if (lastPinHitRef.current !== pin) {
            triggerPinEffect();
            lastPinHitRef.current = pin;
            setPinHitCount((count) => count + 1);
          }
          break;
        }
      }
    };

    const triggerPinEffect = () => {
      shapeRefs.current.forEach((shape) => {
        shape.animate(
          [
            { transform: shape.style.transform, width: '24px', height: '24px' },
            { transform: shape.style.transform, width: '36px', height: '36px' },
            { transform: shape.style.transform, width: '24px', height: '24px' },
          ],
          {
            duration: 300,
            easing: 'ease-out',
          }
        );
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initialize on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, [pinHitCount]);

  return (
    <div>
      <h1
        ref={headingRef}
        style={{
          textAlign: 'center',
          
          fontSize: '3rem',
          position: 'relative',
          
        }}
      >
        Rotate to Unlock
      </h1>

      {/* Shapes container */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
          backgroundColor: pinHitCount >= 2 ? 'black' : 'white',
          transition: 'background-color 0.5s ease',
        }}
      >
        {pinHitCount >= 2
          ? null
          : Array.from({ length: SHAPE_COUNT }).map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) shapeRefs.current[index] = el;
                }}
                style={{
                  position: 'absolute',
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'black',
                  borderRadius: index % 2 === 0 ? '0%' : '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'width 0.2s ease, height 0.2s ease',
                }}
              />
            ))}
      </div>
    </div>
  );
}
