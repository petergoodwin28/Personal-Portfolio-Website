// "use client"
// import React, { useEffect, useRef } from "react";

// function Hero3() {
//     const shapeData = useRef<{ angle: number; radius: number }[]>([]);

//   useEffect(() => {
//     const shapes = document.querySelectorAll<HTMLElement>(".erupt-shape");

//     // Initialize angles & radii only once
//     if (shapeData.current.length === 0) {
//       shapes.forEach((_, i) => {
//         const angle = (Math.PI * 2 * i) / shapes.length + (Math.random() - 0.5); // curve spread
//         const radius = 40 + Math.random() * 80; // stay close to center
//         shapeData.current.push({ angle, radius });
//       });
//     }

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const progress = Math.min(scrollY / 300, 1); // cap progress at 1

//       shapes.forEach((shape, i) => {
//         const { angle, radius } = shapeData.current[i];

//         const x = Math.cos(angle) * radius * progress;
//         const y = Math.sin(angle) * radius * progress;

//         shape.style.transform = `translate(${x}px, ${y}px)`;
//         shape.style.opacity = `${1 - progress}`;
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     // <div id="hero3" className="h-[100vh]">
//     //     <h1 className="hero3-header"> Peter Goodwin </h1>
//     // </div>

//     <div id="hero3" className="relative flex justify-center items-center h-[100vh] overflow-hidden">
//     <h1 className="hero3-header text-center text-5xl font-bold z-10 absolute">
//       Peter Goodwin
//     </h1>

//     {/* Animated shapes */}
//     {Array.from({ length: 6 }).map((_, i) => (
//       <div
//         key={i}
//         className="erupt-shape absolute w-4 h-4 rounded-full bg-foreground"
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 0,
//         }}
//       />
//     ))}
//         {Array.from({ length: 6 }).map((_, i) => (
//       <div
//         key={i}
//         className="erupt-shape absolute w-4 h-4 bg-foreground"
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 0,
//         }}
//       />
//     ))}
//   </div>
//   );
// }

// export default Hero3;

// 'use client';
// import { useEffect, useRef } from 'react';

// export default function Hero3() {
//   const shapesRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       shapesRef.current.forEach((el, index) => {
//         const angle = (index / shapesRef.current.length) * Math.PI * 2;
//         const radius = Math.min(scrollY, 300); // limit how far they travel

//         const x = Math.cos(angle) * radius;
//         const y = Math.sin(angle) * radius;

//         el.style.transform = `translate(${x}px, ${y}px)`;
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div id="hero3" className="relative h-screen flex items-center justify-center overflow-hidden">
//       <h1 className="text-5xl font-bold z-10">Peter Goodwin</h1>

//       {/* Render shapes in a circle around the header */}
//       {[...Array(12)].map((_, i) => (
//         <div
//           key={i}
//           ref={el => {
//             if (el) shapesRef.current[i] = el;
//           }}
//           className="absolute w-4 h-4 rounded-full bg-foreground"
//           style={{
//             top: '50%',
//             left: '50%',
//             transform: `translate(${Math.cos(i) * 60}px, ${Math.sin(i) * 60}px)`,
//             transition: 'transform 0.2s ease-out',
//             zIndex: 0,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef } from 'react';

// export default function Hero3() {
//   // Store references to all shape elements so we can animate them
//   const shapesRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       shapesRef.current.forEach((el, index) => {
//         // Angle evenly spaced around a circle
//         const angle = (index / shapesRef.current.length) * Math.PI * 2;

//         // Radius grows with scroll (max 200px)
//         const radius = Math.min(scrollY, 200);

//         // X and Y displacement from center based on angle and radius
//         const x = Math.cos(angle) * radius;
//         const y = Math.sin(angle) * radius;

//         // Apply transform to move the shape outwards in a circular direction
//         el.style.transform = `translate(${x}px, ${y}px)`;

//         // Fade in effect based on scroll position
//         const opacity = Math.min(scrollY / 150, 1); // fades in by scrollY=150
//         el.style.opacity = `${opacity}`;
//       });
//     };

//     // Listen to scroll events
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup on unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       id="hero3"
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Centered Header */}
//       <h1 className="text-5xl font-bold z-10">Peter Goodwin</h1>

//       {/* Shapes start around the text in a ring and animate outward on scroll */}
//       {[...Array(12)].map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) shapesRef.current[i] = el;
//           }}
//           className="absolute w-4 h-4 rounded-full bg-blue-500"
//           style={{
//             // Start in a ring around the center
//             top: '50%',
//             left: '50%',
//             transform: `translate(${Math.cos(i) * 50}px, ${Math.sin(i) * 50}px)`,
//             transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
//             opacity: 0, // Start invisible and fade in
//             zIndex: 0,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef } from 'react';

// // Shape object to track velocity & position
// type Shape = {
//   el: HTMLDivElement;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);

//   useEffect(() => {
//     const gravity = 0.3; // Gravity acceleration
//     const friction = 0.98; // Air resistance / slowdown

//     const animate = () => {
//       shapesRef.current.forEach((shape) => {
//         // Apply velocity
//         shape.x += shape.vx;
//         shape.y += shape.vy;

//         // Apply gravity
//         shape.vy += gravity;

//         // Apply friction
//         shape.vx *= friction;
//         shape.vy *= friction;

//         // Rotate
//         shape.rotation += shape.rotationSpeed;

//         // Update DOM
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';
//       });

//       // Continue animation loop
//       requestAnimationFrame(animate);
//     };

//     const handleScroll = () => {
//       const triggerPoint = 50; // When scroll passes this point, fire

//       if (window.scrollY > triggerPoint && shapesRef.current.length > 0) {
//         // Only trigger once per scroll threshold
//         window.removeEventListener('scroll', handleScroll);
//         animate();
//       }
//     };

//     // Set up scroll trigger
//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Create 16 shapes with random type (circle/square)
//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const shapeStyle =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el) {
//             const vx = (Math.random() - 0.5) * 10; // Random x velocity
//             const vy = (Math.random() - 1.5) * 10; // Random y velocity upward
//             const rotationSpeed = (Math.random() - 0.5) * 10;

//             // Add shape to ref array with initial position centered
//             shapesRef.current.push({
//               el,
//               x: 0,
//               y: 0,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//             });

//             // Position in center initially
//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = 'translate(0, 0)';
//             el.style.transition = 'opacity 0.3s ease-out';
//           }
//         }}
//         className={shapeStyle}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>

//       {/* Add the randomly styled and positioned shapes */}
//       {shapes}
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import { start } from 'repl';

// // Track velocity, position, rotation
// type Shape = {
//   el: HTMLDivElement;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
//   size: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);
//   let startTime = useState(() => Date.now())[0];
//   let currTime = useState(Date.now()-startTime)[0];

//   useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.95;
//     const bounceFactor = 0.1;

//     const animate = () => {
//       const containerHeight = containerRef.current?.offsetHeight || window.innerHeight;
//       var started = false;

//       shapesRef.current.forEach((shape) => {
//         if (started && ((currTime - startTime) > -100)){return;}

//         // Update positions
//         shape.x += shape.vx;
//         shape.y += shape.vy;
//         shape.vy += gravity;

//         // Floor collision
//         const floorY = containerHeight - shape.size;
//         if (shape.y - 100000 >= floorY) {
//           shape.y = floorY;

//           // Bounce
//           shape.vy *= -bounceFactor;

//           // Apply friction to X velocity
//           shape.vx *= friction;

//           // Stop bouncing if very low speed
//           if (Math.abs(shape.vy) < 1) shape.vy = 0;
//         }

//         // Rotate naturally
//         shape.rotation += shape.rotationSpeed;

//         // Update element
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';

//         // update times
        
//         currTime = Date.now();



//         if (!started){
//             startTime = Date.now();
//         }
//         started = true;
        
//       });

//       requestAnimationFrame(animate);
//     };

//     const handleScroll = () => {
//       const trigger = 50;

//       if (window.scrollY > trigger && shapesRef.current.length > 0) {
//         window.removeEventListener('scroll', handleScroll);
//         animate();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Generate 16 shapes, mix of circle/square
//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const size = 16;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el) {
//             const vx = (Math.random() - 0.5) * 10;
//             const vy = (Math.random() - 1.5) * 10;
//             const rotationSpeed = (Math.random() - 0.5) * 10;

//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = 'translate(0, 0)';
//             el.style.transition = 'opacity 0.3s ease-out';

//             shapesRef.current.push({
//               el,
//               x: 0,
//               y: 0,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//               size,
//             });
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef } from 'react';

// // type Shape = {
// //   el: HTMLDivElement;
// //   x: number;
// //   y: number;
// //   vx: number;
// //   vy: number;
// //   rotation: number;
// //   rotationSpeed: number;
// //   size: number;
// // };

// type Shape = {
//     el: HTMLDivElement;
//     x: number;
//     y: number;
//     vx: number;
//     vy: number;
//     rotation: number;
//     rotationSpeed: number;
//     size: number;
//     eruptedAt: number | null; // New: timestamp when it erupted
//   };
  

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const gravity = 0.5;
// //     const friction = 0.95;
// //     const bounceFactor = 0.2; // Less bounce

// //     const animate = () => {
// //       const floorOffset = 100; // Floor 200px below the starting point
// //       const floorY = floorOffset; // This is the Y value where shapes stop falling

// //       shapesRef.current.forEach((shape) => {
// //         // Apply velocity
// //         shape.x += shape.vx;
// //         shape.y += shape.vy;
// //         shape.vy += gravity;

// //         // Floor collision
// //         if (shape.y >= floorY) {
// //           shape.y = floorY;
// //           shape.vy *= -bounceFactor; // Light bounce
// //           shape.vx *= friction;

// //           // If bouncing is very low, stop movement
// //           if (Math.abs(shape.vy) < 0.5) shape.vy = 0;
// //         }

// //         // Rotate shape
// //         shape.rotation += shape.rotationSpeed;

// //         // Apply styles
// //         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
// //         shape.el.style.opacity = '1';
// //       });

// //       requestAnimationFrame(animate);
// //     };

// //     const handleScroll = () => {
// //       const trigger = 50;
// //       if (window.scrollY > trigger && shapesRef.current.length > 0) {
// //         window.removeEventListener('scroll', handleScroll);
// //         animate();
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.95;
//     const bounceFactor = 0.2;
//     const settleThreshold = 0.5;
  
//     const animate = () => {
//       const floorY = 300;
  
//       shapesRef.current.forEach((shape) => {
//         if (shape.y >= floorY && Math.abs(shape.vy) < settleThreshold) {
//           // Once nearly stopped, freeze everything
//           shape.y = floorY;
//           shape.vy = 0;
//           shape.vx = 0;
//           shape.rotationSpeed = 0;
//         } else {
//           shape.x += shape.vx;
//           shape.y += shape.vy;
//           shape.vy += gravity;
  
//           // Floor collision
//           if (shape.y >= floorY) {
//             shape.y = floorY;
//             shape.vy *= -bounceFactor;
//             shape.vx *= friction;
  
//             if (Math.abs(shape.vy) < settleThreshold) {
//               shape.vy = 0;
//             }
//           }
  
//           // Rotate
//           shape.rotation += shape.rotationSpeed;
//         }
  
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';
//       });
  
//       requestAnimationFrame(animate);
//     };
  
//     const handleScroll = () => {
//       const trigger = 50;
//       if (window.scrollY > trigger && shapesRef.current.length > 0) {
//         window.removeEventListener('scroll', handleScroll);
//         animate();
//       }
//     };
  
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

// FREEZE
// useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.95;
//     const bounceFactor = 0.2;
//     const settleThreshold = 0.5;
//     const pauseDuration = 100000; // Pause mid-air for 0.5s
  
//     const animate = () => {
//       const now = Date.now();
//       const floorY = 200;
  
//       shapesRef.current.forEach((shape) => {
//         // Phase 1: Start eruption
//         if (shape.eruptedAt === null) {
//           shape.eruptedAt = now;
//         }
  
//         const timeSinceEruption = now - shape.eruptedAt;
  
//         if (timeSinceEruption < pauseDuration) {
//           // Phase 2: Mid-air pause
//           shape.x += shape.vx;
//           shape.y += shape.vy;
  
//           // Slightly decelerate before pause
//           shape.vx *= 0.98;
//           shape.vy *= 0.98;
  
//           shape.rotation += shape.rotationSpeed;
//         } else {
//           // Phase 3: Gravity takes over
//           shape.x += shape.vx;
//           shape.y += shape.vy;
//           shape.vy += gravity;
  
//           // Floor collision
//           if (shape.y >= floorY) {
//             shape.y = floorY;
//             shape.vy *= -bounceFactor;
//             shape.vx *= friction;
  
//             if (Math.abs(shape.vy) < settleThreshold) {
//               shape.vy = 0;
//               shape.vx = 0;
//               shape.rotationSpeed = 0;
//             }
//           }
  
//           shape.rotation += shape.rotationSpeed;
//         }
  
//         // Update DOM
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';
//       });
  
//       requestAnimationFrame(animate);
//     };
  
//     const handleScroll = () => {
//       const trigger = 50;
//       if (window.scrollY > trigger && shapesRef.current.length > 0) {
//         window.removeEventListener('scroll', handleScroll);
//         animate();
//       }
//     };
  
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  

// move withs scroll
// useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.95;
//     const bounceFactor = 0.2;
//     const pauseDuration = 500;
//     const settleThreshold = 0.5;
//     const floorY = 200;
  
//     let lastScrollY = window.scrollY;
//     let isScrollingDown = true;
  
//     const animate = () => {
//       const now = Date.now();
  
//       shapesRef.current.forEach((shape) => {
//         const timeSinceEruption = shape.eruptedAt ? now - shape.eruptedAt : 0;
  
//         if (isScrollingDown) {
//           // ERUPT MODE
//           if (shape.eruptedAt === null) {
//             shape.eruptedAt = now;
//           }
  
//           if (timeSinceEruption < pauseDuration) {
//             // Phase 1-2: Erupt and pause
//             shape.x += shape.vx;
//             shape.y += shape.vy;
//             shape.vx *= 0.98;
//             shape.vy *= 0.98;
//           } else {
//             // Phase 3: Gravity
//             shape.x += shape.vx;
//             shape.y += shape.vy;
//             shape.vy += gravity;
  
//             // Floor collision
//             if (shape.y >= floorY) {
//               shape.y = floorY;
//               shape.vy *= -bounceFactor;
//               shape.vx *= friction;
  
//               if (Math.abs(shape.vy) < settleThreshold) {
//                 shape.vy = 0;
//                 shape.vx = 0;
//                 shape.rotationSpeed = 0;
//               }
//             }
//           }
  
//           shape.rotation += shape.rotationSpeed;
//         } else {
//           // REVERSE MODE
//           shape.x *= 0.9; // Ease back to center
//           shape.y *= 0.9;
//           shape.rotation *= 0.9;
  
//           if (Math.abs(shape.x) < 0.5) shape.x = 0;
//           if (Math.abs(shape.y) < 0.5) shape.y = 0;
//           if (Math.abs(shape.rotation) < 0.5) shape.rotation = 0;
  
//           shape.el.style.opacity = '0.6'; // Optional: dim them during reverse
//           shape.eruptedAt = null; // reset eruption
//         }
  
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';
//       });
  
//       requestAnimationFrame(animate);
//     };
  
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       isScrollingDown = currentScrollY > lastScrollY;
//       lastScrollY = currentScrollY;
//     };
  
//     animate(); // start the animation loop once
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
  
//   // Create 16 shapes, mix of circle/square
//   const shapes = Array.from({ length: 30 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const size = 30;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el) {
//             const vx = (Math.random() - 0.5) * 10;
//             const vy = (Math.random() - 1.5) * 10;
//             const rotationSpeed = (Math.random() - 0.5) * 10;

//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = 'translate(0, 0)';
//             el.style.transition = 'opacity 0.3s ease-out';

//             shapesRef.current.push({
//               el,
//               x: 0,
//               y: 0,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//               size,
//               eruptedAt: null,
//             });
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-[700px] flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useRef, useState } from 'react';

// // Define the shape type with movement and animation properties
// type Shape = {
//   el: HTMLDivElement;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
//   size: number;
//   eruptedAt: number | null;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.95;
//     const bounceFactor = 0.2;
//     const pauseDuration = 500; // ms to pause mid-air before falling
//     const floorY = 200; // fixed floor height

//     let lastScrollY = window.scrollY;
//     let isScrollingDown = true;
//     let hasScrolled = false;

//     // Animation loop
//     const animate = () => {
//       if (!hasScrolled) return; // Wait for first scroll

//       const now = Date.now();

//       shapesRef.current.forEach((shape) => {
//         const timeSinceEruption = shape.eruptedAt ? now - shape.eruptedAt : 0;

//         if (isScrollingDown) {
//           if (shape.eruptedAt === null) {
//             shape.eruptedAt = now;
//           }

//           if (timeSinceEruption < pauseDuration) {
//             // Eruption upward
//             shape.x += shape.vx;
//             shape.y += shape.vy;
//             shape.vx *= 0.98;
//             shape.vy *= 0.98;
//           } else {
//             // Gravity fall
//             shape.x += shape.vx;
//             shape.y += shape.vy;
//             shape.vy += gravity;

//             // Floor collision
//             if (shape.y >= floorY) {
//               shape.y = floorY;
//               shape.vy *= -bounceFactor;
//               shape.vx *= friction;

//               if (Math.abs(shape.vy) < 0.5) shape.vy = 0;
//               if (Math.abs(shape.vx) < 0.1) shape.vx = 0;
//               shape.rotationSpeed = 0;
//             }
//           }

//           shape.rotation += shape.rotationSpeed;
//         } else {
//           // Scroll up: reverse toward center
//           shape.x *= 0.9;
//           shape.y *= 0.9;
//           shape.rotation *= 0.9;

//           if (Math.abs(shape.x) < 0.5) shape.x = 0;
//           if (Math.abs(shape.y) < 0.5) shape.y = 0;
//           if (Math.abs(shape.rotation) < 0.5) shape.rotation = 0;

//           shape.el.style.opacity = '0.6';
//           shape.eruptedAt = null;
//         }

//         // Apply transform and opacity
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';
//       });

//       requestAnimationFrame(animate);
//     };

//     // Scroll event handler
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       isScrollingDown = currentScrollY > lastScrollY;
//       lastScrollY = currentScrollY;
//       hasScrolled = true;
//     };

//     // Start animation loop and listen for scroll
//     window.addEventListener('scroll', handleScroll);
//     requestAnimationFrame(animate);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Generate 16 shapes with mix of circles and squares
//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const size = 16;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el) {
//             const vx = (Math.random() - 0.5) * 10;
//             const vy = (Math.random() - 1.5) * 10;
//             const rotationSpeed = (Math.random() - 0.5) * 10;

//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = 'translate(0, 0)';
//             el.style.transition = 'opacity 0.3s ease-out';

//             shapesRef.current.push({
//               el,
//               x: 0,
//               y: 0,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//               size,
//               eruptedAt: null,
//             });
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
//   size: number;
//   initialX: number;
//   initialY: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lastScrollY = useRef<number>(0);

//   useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.9;
//     const bounceFactor = 0.2;
//     const maxYBeforeGravity = 100; // how high before gravity kicks in

//     let animationFrame: number;

//     const animate = () => {
//       const containerHeight = containerRef.current?.offsetHeight || window.innerHeight;
//       const floorY = containerHeight * 0.6;

//       shapesRef.current.forEach((shape) => {
//         const scrollDown = window.scrollY > lastScrollY.current;
//         const scrollUp = window.scrollY < lastScrollY.current;

//         if (scrollDown) {
//           // erupt upward
//           if (shape.y > shape.initialY - maxYBeforeGravity) {
//             shape.x += shape.vx * 0.3;
//             shape.y += shape.vy * 0.3;
//           } else {
//             // gravity phase
//             shape.vy += gravity;
//             shape.x += shape.vx;
//             shape.y += shape.vy;
//           }
//         } else if (scrollUp) {
//           // retract back to origin
//           shape.x += (shape.initialX - shape.x) * 0.2;
//           shape.y += (shape.initialY - shape.y) * 0.2;
//         }

//         // floor collision
//         if (shape.y + shape.size > floorY) {
//           shape.y = floorY - shape.size;
//           shape.vy *= -bounceFactor;
//           shape.vx *= friction;

//           if (Math.abs(shape.vy) < 1) shape.vy = 0;
//         }

//         // rotation
//         shape.rotation += shape.rotationSpeed;

//         // update styles
//         shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         shape.el.style.opacity = '1';
//       });

//       lastScrollY.current = window.scrollY;
//       animationFrame = requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const size = 16;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el && containerRef.current) {
//             const containerRect = containerRef.current.getBoundingClientRect();
//             const containerCenterX = containerRect.width / 2;
//             const containerCenterY = containerRect.height / 2;

//             const offsetX = (Math.random() - 0.5) * 50;
//             const offsetY = (Math.random() - 0.5) * 50;

//             const vx = (Math.random() - 0.5) * 10;
//             const vy = (Math.random() - 1.5) * 10;
//             const rotationSpeed = (Math.random() - 0.5) * 5;

//             const initialX = offsetX;
//             const initialY = offsetY;

//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = `translate(${initialX}px, ${initialY}px)`;
//             el.style.transition = 'opacity 0.3s ease-out';

//             shapesRef.current.push({
//               el,
//               x: initialX,
//               y: initialY,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//               size,
//               initialX,
//               initialY,
//             });
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
//   size: number;
//   initialX: number;
//   initialY: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lastScrollY = useRef<number>(0);
//   const triggered = useRef<boolean>(false); // only trigger when hero is in view

//   useEffect(() => {
//     const gravity = 0.5;
//     const friction = 0.9;
//     const bounceFactor = 0.2;
//     const maxYBeforeGravity = 100;

//     let animationFrame: number;

//     const animate = () => {
//       const containerHeight = containerRef.current?.offsetHeight || window.innerHeight;
//       const floorY = containerHeight * 0.6;
//       const rect = containerRef.current?.getBoundingClientRect();

//       // Check if the hero section is in view enough to trigger
//       if (rect && rect.top < window.innerHeight * 0.8) {
//         triggered.current = true;
//       } else if (rect && rect.top > window.innerHeight) {
//         triggered.current = false;
//       }

//       if (triggered.current) {
//         shapesRef.current.forEach((shape) => {
//           const scrollDown = window.scrollY > lastScrollY.current;
//           const scrollUp = window.scrollY < lastScrollY.current;

//           shape.el.style.opacity = '1'; // fade in when animation starts

//           if (scrollDown) {
//             if (shape.y > shape.initialY - maxYBeforeGravity) {
//               shape.x += shape.vx * 0.3;
//               shape.y += shape.vy * 0.3;
//             } else {
//               shape.vy += gravity;
//               shape.x += shape.vx;
//               shape.y += shape.vy;
//             }
//           } else if (scrollUp) {
//             shape.x += (shape.initialX - shape.x) * 0.2;
//             shape.y += (shape.initialY - shape.y) * 0.2;
//           }

//           if (shape.y + shape.size > floorY) {
//             shape.y = floorY - shape.size;
//             shape.vy *= -bounceFactor;
//             shape.vx *= friction;
//             if (Math.abs(shape.vy) < 1) shape.vy = 0;
//           }

//           shape.rotation += shape.rotationSpeed;
//           shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         });
//       }

//       lastScrollY.current = window.scrollY;
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const size = 16;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el && containerRef.current) {
//             const offsetX = (Math.random() - 0.5) * 50;
//             const offsetY = (Math.random() - 0.5) * 50;
//             const vx = (Math.random() - 0.5) * 10;
//             const vy = (Math.random() - 1.5) * 10;
//             const rotationSpeed = (Math.random() - 0.5) * 5;
//             const initialX = offsetX;
//             const initialY = offsetY;

//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = `translate(${initialX}px, ${initialY}px)`;
//             el.style.opacity = '0';
//             el.style.transition = 'opacity 0.6s ease-out';

//             shapesRef.current.push({
//               el,
//               x: initialX,
//               y: initialY,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//               size,
//               initialX,
//               initialY,
//             });
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
//   size: number;
//   initialX: number;
//   initialY: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lastScrollY = useRef<number>(window.scrollY);
//   const triggered = useRef<boolean>(false);

//   useEffect(() => {
//     const animate = () => {
//       const rect = containerRef.current?.getBoundingClientRect();

//       // Trigger when #hero3 enters the viewport
//       if (rect && rect.top < window.innerHeight * 0.9) {
//         triggered.current = true;
//       } else if (rect && rect.bottom < 0) {
//         triggered.current = false;
//       }

//       const scrollDelta = window.scrollY - lastScrollY.current;

//       if (triggered.current && scrollDelta !== 0) {
//         shapesRef.current.forEach((shape) => {
//           // Fade in the shape
//           shape.el.style.opacity = '1';

//           // Move shapes proportionally to scroll delta
//           shape.x += shape.vx * scrollDelta * 0.05;
//           shape.y += shape.vy * scrollDelta * 0.05;

//           // Rotate shapes with scroll
//           shape.rotation += shape.rotationSpeed * scrollDelta * 0.1;

//           // Apply transform
//           shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px) rotate(${shape.rotation}deg)`;
//         });
//       }

//       lastScrollY.current = window.scrollY;
//       requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);
//   }, []);

//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const size = 16;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el && containerRef.current) {
//             const offsetX = (Math.random() - 0.5) * 50;
//             const offsetY = (Math.random() - 0.5) * 50;
//             const vx = (Math.random() - 0.5) * 1.5;
//             const vy = (Math.random() - 1) * 2;
//             const rotationSpeed = (Math.random() - 0.5) * 2;
//             const initialX = offsetX;
//             const initialY = offsetY;

//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = `translate(${initialX}px, ${initialY}px)`;
//             el.style.opacity = '0';
//             el.style.transition = 'opacity 0.5s ease';

//             shapesRef.current.push({
//               el,
//               x: initialX,
//               y: initialY,
//               vx,
//               vy,
//               rotation: 0,
//               rotationSpeed,
//               size,
//               initialX,
//               initialY,
//             });
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   baseX: number;
//   baseY: number;
//   vx: number;
//   vy: number;
//   rotation: number;
//   rotationSpeed: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const triggerStart = 50;    // Scroll Y at which the effect starts
//       const maxScroll = 300;      // How much scroll distance maps to full animation
//       const progress = Math.min(Math.max((scrollY - triggerStart) / maxScroll, 0), 1);

//       shapesRef.current.forEach((shape) => {
//         // Update positions based on scroll progress
//         const x = shape.baseX + shape.vx * progress * 50;
//         const y = shape.baseY + shape.vy * progress * 50;

//         // Update transform and opacity
//         shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${shape.rotation + shape.rotationSpeed * progress * 180}deg)`;
//         shape.el.style.opacity = progress.toString();
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Create 16 random shapes
//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const shapeClass =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0 transition-opacity duration-300';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el && containerRef.current) {
//             const rect = containerRef.current.getBoundingClientRect();
//             const baseX = (Math.random() - 0.5) * 100;
//             const baseY = (Math.random() - 0.5) * 100;
//             const vx = (Math.random() - 0.5) * 3;
//             const vy = (Math.random() - 1) * 3;
//             const rotation = Math.random() * 360;
//             const rotationSpeed = (Math.random() - 0.5) * 2;

//             shapesRef.current.push({
//               el,
//               baseX,
//               baseY,
//               vx,
//               vy,
//               rotation,
//               rotationSpeed,
//             });

//             // Initialize transform
//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = `translate(${baseX}px, ${baseY}px) rotate(${rotation}deg)`;
//           }
//         }}
//         className={shapeClass}
//       />
//     );
//   });

//   return (
//     <div
//       id="hero3"
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useRef } from 'react';

// type Shape = {
//   el: HTMLDivElement;
//   baseX: number;
//   baseY: number;
//   vx: number;
//   vy: number;
//   rotationSpeed: number;
// };

// export default function Hero3() {
//   const shapesRef = useRef<Shape[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const triggerStart = 100;     // When animation starts
//       const maxScroll = 400;        // Total scroll distance over which to animate
//       const progress = Math.min(Math.max((scrollY - triggerStart) / maxScroll, 0), 1);

//       shapesRef.current.forEach((shape) => {
//         const x = shape.baseX + shape.vx * progress * 100;
//         const y = shape.baseY + shape.vy * progress * 100;
//         const rotation = shape.rotationSpeed * progress * 360;

//         shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
//         shape.el.style.opacity = `${progress}`;
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Generate 16 random shapes on first render
//   const shapes = Array.from({ length: 16 }, (_, i) => {
//     const isCircle = Math.random() > 0.5;
//     const className =
//       'absolute w-4 h-4 ' +
//       (isCircle ? 'rounded-full' : 'rounded-sm') +
//       ' bg-foreground opacity-0 transition-opacity duration-300';

//     return (
//       <div
//         key={i}
//         ref={(el) => {
//           if (el && containerRef.current) {
//             const angle = (Math.random() * Math.PI * 2);
//             const speed = 1 + Math.random(); // outward speed
//             const vx = Math.cos(angle) * speed;
//             const vy = Math.sin(angle) * speed;
//             const baseX = 0;
//             const baseY = 0;
//             const rotationSpeed = (Math.random() - 0.5) * 2;

//             shapesRef.current.push({
//               el,
//               baseX,
//               baseY,
//               vx,
//               vy,
//               rotationSpeed,
//             });

//             // Centered over the <h1>
//             el.style.left = '50%';
//             el.style.top = '50%';
//             el.style.transform = 'translate(0px, 0px)';
//           }
//         }}
//         className={className}
//       />
//     );
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-[200vh] flex items-center justify-center overflow-hidden"
//     >
//       <h1 className="text-5xl font-bold z-10 text-center relative">Peter Goodwin</h1>
//       {shapes}
//     </div>
//   );
// }


'use client';

import { useEffect, useRef } from 'react';

type Shape = {
  el: HTMLDivElement;
  vx: number;
  vy: number;
  rotationSpeed: number;
};

export default function Hero3() {
  const shapesRef = useRef<Shape[]>([]);
  const initializedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerStart = 0;
      const triggerEnd = 175;
      const scrollRange = triggerEnd - triggerStart;
      const progress = Math.min(Math.max((scrollY - triggerStart) / scrollRange, 0), 1);

      shapesRef.current.forEach((shape) => {
        const x = shape.vx * progress * 200;
        const y = shape.vy * progress * 200;
        const rotation = shape.rotationSpeed * progress * 360;

        shape.el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        shape.el.style.opacity = `${progress-0.01}`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = Array.from({ length: 51 }, (_, i) => {
    const isCircle = Math.random() > 0.5;
    const className = `
      absolute w-4 h-4 
      ${isCircle ? 'rounded-full' : 'rounded-sm'} 
      bg-foreground 
      opacity-0 
      transition-transform duration-300 ease-out
    `;

    return (
      <div
        key={i}
        ref={(el) => {
          if (el && !initializedRef.current) {
            const angle = Math.random() * 2 * Math.PI;
            const speed = 1 + Math.random(); // random outward speed
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const rotationSpeed = (Math.random() - 0.5) * 2;

            el.style.left = '50%';
            el.style.top = '17%';
            el.style.transform = 'translate(0, 0)';
            el.style.opacity = '0';
            el.style.transition = 'transform 1s ease-out, opacity .2s ease-in';

            shapesRef.current.push({ el, vx, vy, rotationSpeed });
          }
          if (i === 50) initializedRef.current = true;
        }}
        className={className}
      />
    );
  });

  return (
    <div className="relative h-[200vh] flex items-start justify-center pt-[30vh] overflow-hidden">
      <h1 className="text-7xl font-bold z-10 pt-4 text-center relative">Peter Goodwin</h1>
      {shapes}
    </div>
  );
}
