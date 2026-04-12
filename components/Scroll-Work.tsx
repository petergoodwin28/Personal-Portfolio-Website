"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  easeOut
} from "framer-motion";

export default function ScrollWork() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Local scroll context – smooth and isolated
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  /* ----------------------------------------
     IMAGE PARALLAX DRIFT
  ---------------------------------------- */
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -20]); // soft drift

  /* ----------------------------------------
     TEXT REVEAL VARIANTS
     Parallax rise + blur + scale
  ---------------------------------------- */
  const textVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOut
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOut
    },
  },
};

  const roles = [
    {
      label: "Web Developer",
      desc: "Building clean, modern, and responsive web experiences.",
    },
    {
      label: "Administrator",
      desc: "Managing Microsoft 365, Intune, identity, and security.",
    },
    {
      label: "Cloud Engineer",
      desc: "AWS, infrastructure, automation, and tooling.",
    },
    {
      label: "Video Gamer",
      desc: "Competitive at night, productive during the day.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="home-section w-full py-24 sm:py-28 md:py-32 px-4 sm:px-6 overflow-hidden relative"
    >
      <div className="home-section-accent" aria-hidden />
      <div className="home-section-inner">
      {/* ---------------------------------------- */}
      {/* Section Title */}
      {/* ---------------------------------------- */}
      <motion.div
        variants={titleVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.4 }}
        className="home-section-header mb-20"
      >
        <p className="home-section-kicker">Identity</p>
        <h2 className="home-section-title">Who I Am</h2>
        <p className="home-section-subtitle mt-3">
          A few roles that shape my work and the way I approach building on the
          web.
        </p>
      </motion.div>

      {/* ---------------------------------------- */}
      {/* Main Layout */}
      {/* ---------------------------------------- */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-24 xl:gap-32">
        {/* ---------------------------------------- */}
        {/* Image w/ Parallax Drift */}
        {/* ---------------------------------------- */}
        <motion.div
          style={
            prefersReducedMotion
              ? {}
              : {
                  y: imgY,
                }
          }
          className="relative"
        >
          <div className="home-panel-surface w-72 h-72 rounded-3xl overflow-hidden p-1">
            <Image
              src="/meImage1.jpg"
              alt="Profile"
              width={500}
              height={500}
              sizes="(min-width: 1280px) 288px, (min-width: 640px) 320px, 72vw"
              quality={72}
              className="object-cover w-full h-full animate-subtleZoom rounded-[1.2rem]"
            />
          </div>

          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-40 -z-10" />
        </motion.div>

        {/* ---------------------------------------- */}
        {/* Role Text List */}
        {/* ---------------------------------------- */}
        <ul className="flex flex-col gap-6 w-full max-w-xl">
          {roles.map((item, i) => (
            <motion.li
              key={i}
              variants={textVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.12 }}
              className="home-role-item cursor-default"
            >
              <motion.h3
                className="
                  text-3xl xl:text-4xl font-medium tracking-wide
                  transition-all duration-300
                  hover:text-primary hover:scale-[1.03]
                "
              >
                {item.label}
              </motion.h3>

              <motion.p className="opacity-70 text-base xl:text-lg mt-2">
                {item.desc}
              </motion.p>

              <div className="hr-glow mt-3"></div>
            </motion.li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}


// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import clsx from "clsx";

// export default function ScrollWork() {
//   useEffect(() => {
//     const supportsScrollTimeline =
//       typeof CSS !== "undefined" &&
//       CSS.supports &&
//       CSS.supports("animation-timeline: scroll()");

//     if (!supportsScrollTimeline) {
//       const io = new IntersectionObserver(
//         entries => {
//           entries.forEach(entry => {
//             entry.target.classList.toggle("in-view", entry.isIntersecting);
//           });
//         },
//         { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
//       );

//       document.querySelectorAll(".fade-in-text").forEach(el => io.observe(el));
//       return () => io.disconnect();
//     }
//   }, []);

//   const titles = [
//     {
//       label: "Web Developer",
//       desc: "Building clean, modern, and responsive web experiences.",
//     },
//     {
//       label: "Administrator",
//       desc: "Managing Microsoft 365, Intune, identity, and security.",
//     },
//     {
//       label: "Cloud Engineer",
//       desc: "AWS, infrastructure, automation, and tooling.",
//     },
//     {
//       label: "Video Gamer",
//       desc: "Competitive at night, productive during the day.",
//     },
//   ];

//   return (
//     <section className="w-full py-32 px-6 overflow-hidden">

//       {/* Section Title */}
//       <div className="text-center mb-20">
//         <h2 className="text-5xl font-light tracking-wide fade-in-text fade-in-heading">
//           Who Am I?
//         </h2>
//         <p className=" mt-3 text-lg fade-in-text fade-in-subtitle">
//           A few roles that define my work — and who I am outside of it.
//         </p>
//       </div>

//       {/* Main Container */}
//       <div className="flex flex-col xl:flex-row items-center justify-center gap-24 xl:gap-32">

//         {/* Image */}
//         <div className="relative fade-in-text fade-in-image">
//           <div className="glass-panel w-72 h-72 rounded-3xl shadow-xl backdrop-blur-xl border border-white/20 overflow-hidden">
//             <Image
//               src="/meImage1.jpg"
//               alt="Profile"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full animate-subtleZoom"
//             />
//           </div>

//           {/* glow */}
//           <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-40 -z-10" />
//         </div>

//         {/* Titles */}
//         <ul className="flex flex-col gap-12 w-full max-w-xl">
//           {titles.map((item, i) => (
//             <li key={i} className="fade-in-text" style={{ animationDelay: `${200 + i * 120}ms` }}>
//               <h3
//                 className="
//                   text-4xl xl:text-5xl font-medium tracking-wide
//                   transition-all duration-300
//                   hover:text-primary hover:scale-[1.03]
//                   hover:tracking-wide
//                 "
//               >
//                 {item.label}
//               </h3>

//               <p className="opacity-70 text-base xl:text-lg mt-2">
//                 {item.desc}
//               </p>

//               <div className="hr-glow mt-3"></div>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </section>
//   );
// }
