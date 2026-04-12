"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Local scroll timeline for this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Simple mobile check
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");
    const fn = () => setIsMobile(mq.matches);
    fn();

    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  /* ----------------------------------------
     ANIMATIONS
  ---------------------------------------- */

  // Shared fade for all elements
  const fadeIn = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Image motion — Option B:
  // fade + rise + slight scale-in
  const imgY = useTransform(scrollYProgress, [0, 0.18], [40, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.18], [0.95, 1]);

  // Title motion
  const titleOpacity = useTransform(scrollYProgress, [0.10, 0.25], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.10, 0.25], [30, 0]);

  // Paragraphs (staggered)
  const p1Opacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.15, 0.7], [30, 0]);

  const p2Opacity = useTransform(scrollYProgress, [0.22, 0.6], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.22, 0.7], [30, 0]);

  const p3Opacity = useTransform(scrollYProgress, [0.29, 0.6], [0, 1]);
  const p3Y = useTransform(scrollYProgress, [0.29, 0.8], [30, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="resume-section content-page-inner flex flex-col items-center mt-10 px-4"
    >
      {/* IMAGE */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                opacity: fadeIn,
                y: isMobile ? 0 : imgY,
                scale: isMobile ? 1 : imgScale,
              }
        }
        className="content-surface content-surface-circle border overflow-hidden mb-20
                   w-[420px] h-[420px] max-w-[76vw] max-h-[76vw] p-1"
      >
        <Image
          src="/meImage1.jpg"
          width={500}
          height={500}
          alt="Portrait of Peter Goodwin"
          className="transform translate-y-[-140px] rounded-full"
        />
      </motion.div>

      {/* HEADER */}
      <motion.h2
        style={
          prefersReducedMotion
            ? {}
            : { opacity: titleOpacity, y: titleY }
        }
        className="mb-6 font-light text-3xl sm:text-4xl tracking-wide prose text-center"
      >
        About Me
      </motion.h2>

      {/* PARAGRAPHS */}
      <div
        className={`resume-about-copy content-surface text-center font-extralight mt-8 ${
          isMobile ? "text-lg" : "text-2xl"
        }`}
      >
        <motion.p
          style={
            prefersReducedMotion ? {} : { opacity: p1Opacity, y: p1Y }
          }
          className="px-4 sm:px-8"
        >
          I am an aspiring web developer! I love taking time to code out
          projects and since graduating with my bachelors in Computer Science, I
          have been given the opportunity to do so.
        </motion.p>

        <motion.p
          style={
            prefersReducedMotion ? {} : { opacity: p2Opacity, y: p2Y }
          }
          className="px-4 sm:px-8 mt-14"
        >
          Making this website has been a lot of learning and a lot of fun!
        </motion.p>

        <motion.p
          style={
            prefersReducedMotion ? {} : { opacity: p3Opacity, y: p3Y }
          }
          className="px-4 sm:px-8 mt-14"
        >
          I hope you enjoy the effects that I have put in place!
        </motion.p>
      </div>

      <div className="scroll-watcher-right-horizontal mt-44"></div>
    </section>
  );
}


// import React from "react";
// import Image from 'next/image'

// function About() {
//   return (
//     <section id="about" className="flex flex-col items-center mt-20 ">
//       {/* Image */}
//       <div className="fade-out-scroll border-2 rounded-full overflow-hidden w-[500px] h-[500px] mb-32">
//         <Image src="/meImage1.jpg"  width={500} height={500}  alt="image" className="transform translate-y-[-170px]"/>
//       </div>

//       {/* Description */}

//       <h1 className="mb-10 font-extralight text-3xl appear">About Me</h1>
//       <div className="elevate-text-container text-2xl font-extralight text-center mt-20">
//         <p className="elevate-text ">
//           I am an aspiring web developer! I love taking time to code out
//           projects and since graduating with my bachelors in Computer Science, I
//           have been given the opportunity to do so.
//         </p>

//         <p className="elevate-text mt-32">
//           Making this website has been a lot of learning and a lot of fun!
//         </p>

//         <p className="elevate-text ">
//           I hope you enjoy the effects that I have put in place!
//         </p>
//       </div>

//         <div className="scroll-watcher-right-horizontal mt-44"></div>
//     </section>
//   );
// }

// export default About;
