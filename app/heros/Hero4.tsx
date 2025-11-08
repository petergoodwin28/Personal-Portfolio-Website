// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   initialX: number;
//   initialY: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
// };

// export default function Hero() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const setupShapes = () => {
//       const textEl = textRef.current;
//       const containerEl = containerRef.current;
//       if (!textEl || !containerEl) return;

//       const textRect = textEl.getBoundingClientRect();
//       const containerRect = containerEl.getBoundingClientRect();
//       const centerX = textRect.left + textRect.width / 2 - containerRect.left;
//       const centerY = textRect.top - containerRect.top;

//       shapesRef.current.forEach((shape) => {
//         const angle = Math.PI * (0.25 + Math.random() * 0.5); // arc from 45° to 135°
//         const radius = 100 + Math.random() * 40;

//         // Set base high above the heading
//         shape.initialX = centerX + Math.cos(angle) * radius;
//         shape.initialY = centerY - 1100 + Math.sin(angle) * radius;

//         // Velocity is upward (negative Y)
//         shape.vx = (Math.random() - 0.5) * 100;
//         shape.vy = -(60 + Math.random() * 40); // upward
//         shape.rotation = 0;
//         shape.rotationSpeed = (Math.random() - 0.5) * 4;

//         shape.el.style.transform = `translate(${shape.initialX}px, ${shape.initialY}px) rotate(0deg)`;
//         shape.el.style.opacity = '1';
//       });
//     };

//     const updateOnScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = 200;
//       const progress = Math.min(scrollY / maxScroll, 1);

//       shapesRef.current.forEach((shape) => {
//         const x = shape.initialX + shape.vx * progress;
//         const y = shape.initialY + shape.vy * progress;
//         const rot = shape.rotation + shape.rotationSpeed * progress * 50;

//         shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
//       });
//     };

//     const handleResize = () => {
//       setupShapes();
//       updateOnScroll();
//     };

//     // Delay to ensure layout is ready
//     setTimeout(() => {
//       setupShapes();
//       updateOnScroll();
//     }, 100);

//     window.addEventListener('scroll', updateOnScroll);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('scroll', updateOnScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const shapes = Array.from({ length: 24 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const className = `absolute w-4 h-4 ${isCircle ? 'rounded-full' : 'rounded-sm'} bg-foreground opacity-0 pointer-events-none`;

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el) {
//             shapesRef.current.push({
//               el,
//               initialX: 0,
//               initialY: 0,
//               vx: 0,
//               vy: 0,
//               rotation: 0,
//               rotationSpeed: 0,
//             });
//           }
//         }}
//         className={className}
//       />
//     );
//   });

//   return (
//     <div ref={containerRef} className="relative overflow-visible">
//       <h1 ref={textRef} className="text-5xl font-bold text-center pt-[30vh] pb-[100vh]">
//         Peter Goodwin
//       </h1>
//       {shapes}
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   initialX: number;
//   initialY: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
// };

// export default function Hero() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const SHAPE_COUNT = 24;

//   useEffect(() => {
//     const setupShapes = () => {
//       const textEl = textRef.current;
//       const containerEl = containerRef.current;
//       if (!textEl || !containerEl) return;

//       const textRect = textEl.getBoundingClientRect();
//       const containerRect = containerEl.getBoundingClientRect();
//       const centerX = textRect.left + textRect.width / 2 - containerRect.left;
//       const centerY = textRect.top - containerRect.top;

//       shapesRef.current.forEach((shape, i) => {
//         const ratio = i / (SHAPE_COUNT - 1); // 0 to 1
//         const angle = Math.PI * (0.75 + ratio * 0.5); // 135° to 225°

//         const radius = 80 + Math.random() * 40;
//         shape.initialX = centerX + Math.cos(angle) * radius;
//         shape.initialY = centerY - 1000 + Math.sin(angle) * radius;

//         const burstSpeed = 100 + Math.random() * 60;
//         shape.vx = Math.cos(angle) * burstSpeed;
//         shape.vy = Math.sin(angle) * burstSpeed;
//         shape.rotation = 0;
//         shape.rotationSpeed = (Math.random() - 0.5) * 4;

//         shape.el.style.transform = `translate(${shape.initialX}px, ${shape.initialY}px) rotate(0deg)`;
//         shape.el.style.opacity = '1';
//       });
//     };

//     const updateOnScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = 200;
//       const progress = Math.min(scrollY / maxScroll, 1);

//       shapesRef.current.forEach((shape) => {
//         const x = shape.initialX + shape.vx * progress;
//         const y = shape.initialY + shape.vy * progress;
//         const rot = shape.rotation + shape.rotationSpeed * progress * 50;

//         shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
//       });
//     };

//     const handleResize = () => {
//       setupShapes();
//       updateOnScroll();
//     };

//     setTimeout(() => {
//       setupShapes();
//       updateOnScroll();
//     }, 100);

//     window.addEventListener('scroll', updateOnScroll);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('scroll', updateOnScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const shapes = Array.from({ length: SHAPE_COUNT }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const className = `absolute w-4 h-4 ${isCircle ? 'rounded-full' : 'rounded-sm'} bg-foreground opacity-0 pointer-events-none`;

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el) {
//             shapesRef.current[i] = {
//               el,
//               initialX: 0,
//               initialY: 0,
//               vx: 0,
//               vy: 0,
//               rotation: 0,
//               rotationSpeed: 0,
//             };
//           }
//         }}
//         className={className}
//       />
//     );
//   });

//   return (
//     <div ref={containerRef} className="relative overflow-visible">
//       <h1 ref={textRef} className="text-5xl font-bold text-center pt-[30vh] pb-[100vh]">
//         Peter Goodwin
//       </h1>
//       {shapes}
//     </div>
//   );
// }

'use client';
import { useEffect, useRef } from 'react';

type Shape = {
  el: HTMLDivElement;
  initialX: number;
  initialY: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
};

export default function Hero() {
  const shapesRef = useRef<Shape[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const SHAPE_COUNT = 24;

  useEffect(() => {
    const setupShapes = () => {
      const textEl = textRef.current;
      const containerEl = containerRef.current;
      if (!textEl || !containerEl) return;

      const textRect = textEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      const centerX = textRect.left + textRect.width / 2 - containerRect.left;
      const centerY = textRect.top - containerRect.top;

      shapesRef.current.forEach((shape, i) => {
        const ratio = i / (SHAPE_COUNT - 1); // 0 to 1
        const angle = (-135 + ratio * 90) * (Math.PI / 180); // -135° to -45° in radians (fan upward)

        const radius = 150 + Math.random() * 40;
        shape.initialX = centerX + Math.cos(angle) * radius;
        shape.initialY = centerY - 900 + Math.sin(angle) * radius;

        const burstSpeed = 100 + Math.random() * 60;
        shape.vx = Math.cos(angle) * burstSpeed;
        shape.vy = Math.sin(angle) * burstSpeed;
        shape.rotation = 0;
        shape.rotationSpeed = (Math.random() - 0.5) * 4;

        shape.el.style.transform = `translate(${shape.initialX}px, ${shape.initialY}px) rotate(0deg)`;
        shape.el.style.opacity = '1';
      });
    };

    const updateOnScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      const progress = Math.min(scrollY / maxScroll, 1);

      shapesRef.current.forEach((shape) => {
        const x = shape.initialX + shape.vx * progress;
        const y = shape.initialY + shape.vy * progress;
        const rot = shape.rotation + shape.rotationSpeed * progress * 50;

        shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
      });
    };

    const handleResize = () => {
      setupShapes();
      updateOnScroll();
    };

    setTimeout(() => {
      setupShapes();
      updateOnScroll();
    }, 100);

    window.addEventListener('scroll', updateOnScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', updateOnScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shapes = Array.from({ length: SHAPE_COUNT }, (_, i) => {
    const isCircle = Math.random() > 0.5;
    const className = `absolute w-4 h-4 ${isCircle ? 'rounded-full' : 'rounded-sm'} bg-foreground opacity-0 pointer-events-none`;

    return (
      <div
        key={i}
        ref={(el) => {
          if (el) {
            shapesRef.current[i] = {
              el,
              initialX: 0,
              initialY: 0,
              vx: 0,
              vy: 0,
              rotation: 0,
              rotationSpeed: 0,
            };
          }
        }}
        className={className}
      />
    );
  });

  return (
    <div ref={containerRef} className="relative overflow-visible">
      <h1 ref={textRef} className="text-5xl font-bold text-center pt-[30vh] pb-[100vh]">
        Peter Goodwin
      </h1>
      {shapes}
    </div>
  );
}
