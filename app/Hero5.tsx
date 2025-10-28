// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   angle: number; // starting angle around the circle
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
//       const centerY = textRect.top  + textRect.height / 2 - containerRect.top ;

//       const radius = 100;

//       shapesRef.current.forEach((shape, i) => {
//         const angle = (i / SHAPE_COUNT) * 2 * Math.PI;
//         shape.angle = angle;
//         shape.rotation = 0;
//         shape.rotationSpeed = (Math.random() - 0.5) * 4;

//         const x = centerX + Math.cos(angle) * radius;
//         const y = centerY + Math.sin(angle) * radius;

//         shape.el.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
//         shape.el.style.opacity = '1';
//       });
//     };

//     const updateOnScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = 200;
//       const progress = Math.min(scrollY / maxScroll, 1);

//       const textEl = textRef.current;
//       const containerEl = containerRef.current;
//       if (!textEl || !containerEl) return;

//       const textRect = textEl.getBoundingClientRect();
//       const containerRect = containerEl.getBoundingClientRect();
//       const centerX = textRect.left + textRect.width / 2 - containerRect.left;
//       const centerY = textRect.top + textRect.height / 2 - containerRect.top;
//       const radius = 100;

//       shapesRef.current.forEach((shape, i) => {
//         const angle = shape.angle + progress * 2 * Math.PI; // full circle over scroll
//         const x = centerX + Math.cos(angle) * radius;
//         const y = centerY + Math.sin(angle) * radius;

//         const selfRot = shape.rotation + shape.rotationSpeed * progress * 50;

//         shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${selfRot}deg)`;
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
//               angle: 0,
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
  angle: number;
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

      const centerX = textEl.offsetLeft + textEl.offsetWidth / 2;
      const centerY = textEl.offsetTop + textEl.offsetHeight / 2 -100;

      const radius = 100;

      shapesRef.current.forEach((shape, i) => {
        const angle = (i / SHAPE_COUNT) * 2 * Math.PI;
        shape.angle = angle;
        shape.rotation = 0;
        shape.rotationSpeed = (Math.random() - 0.5) * 4;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        shape.el.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
        shape.el.style.opacity = '1';
      });
    };

    const updateOnScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      const progress = Math.min(scrollY / maxScroll, 1);

      const textEl = textRef.current;
      if (!textEl || !containerRef.current) return;

      const centerX = textEl.offsetLeft + textEl.offsetWidth / 2;
      const centerY = textEl.offsetTop + textEl.offsetHeight / 2;
      const radius = 100;

      shapesRef.current.forEach((shape) => {
        const angle = shape.angle + progress * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const selfRot = shape.rotation + shape.rotationSpeed * progress * 50;

        shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${selfRot}deg)`;
      });
    };

    setTimeout(() => {
      setupShapes();
      updateOnScroll();
    }, 50);

    window.addEventListener('scroll', updateOnScroll);
    window.addEventListener('resize', setupShapes);
    return () => {
      window.removeEventListener('scroll', updateOnScroll);
      window.removeEventListener('resize', setupShapes);
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
              angle: 0,
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
    <div ref={containerRef} className="relative h-[200vh] overflow-visible">
      <h1
        ref={textRef}
        className="text-5xl font-bold text-center pt-[30vh]">
        Peter Goodwin
      </h1>
      {shapes}
    </div>
  );
}
