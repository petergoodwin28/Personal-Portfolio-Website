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

  // MOBILE: smaller movements
  const mobileAdjustment = (val: any) =>
    isMobile ? useTransform(val, () => undefined) : val;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col items-center mt-20 px-4"
    >
      {/* IMAGE */}
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                opacity: fadeIn,
                y: mobileAdjustment(imgY),
                scale: mobileAdjustment(imgScale),
              }
        }
        className="border-2 rounded-full overflow-hidden mb-32
                   w-[500px] h-[500px] max-w-[80vw] max-h-[80vw]"
      >
        <Image
          src="/meImage1.jpg"
          width={500}
          height={500}
          alt="image"
          className="transform translate-y-[-170px]"
        />
      </motion.div>

      {/* HEADER */}
      <motion.h1
        style={
          prefersReducedMotion
            ? {}
            : { opacity: titleOpacity, y: mobileAdjustment(titleY) }
        }
        className="mb-10 font-extralight text-3xl prose"
      >
        About Me
      </motion.h1>

      {/* PARAGRAPHS */}
      <div
        className={`text-center font-extralight mt-20 ${
          isMobile ? "text-lg" : "text-2xl"
        }`}
      >
        <motion.p
          style={
            prefersReducedMotion ? {} : { opacity: p1Opacity, y: p1Y }
          }
          className="px-8"
        >
          I am an aspiring web developer! I love taking time to code out
          projects and since graduating with my bachelors in Computer Science, I
          have been given the opportunity to do so.
        </motion.p>

        <motion.p
          style={
            prefersReducedMotion ? {} : { opacity: p2Opacity, y: p2Y }
          }
          className="px-8 mt-32"
        >
          Making this website has been a lot of learning and a lot of fun!
        </motion.p>

        <motion.p
          style={
            prefersReducedMotion ? {} : { opacity: p3Opacity, y: p3Y }
          }
          className="px-8 mt-32"
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
