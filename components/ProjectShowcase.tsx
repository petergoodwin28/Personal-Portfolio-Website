"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function ProjectShowcase() {
  const projects = [
    {
      name: "Stock Dashboard",
      imageURL: "/stockdash-login-page.png",
      link: "https://github.com/petergoodwin28/Stock-Dashboard-Login-Watchlist",
      description:
        "A login-aware stock charting dashboard with dynamic ranges, user sessions via Next Auth, and guest mode with feature flagging.",
    },
    {
      name: "Theme Change Site",
      imageURL: "/theme-site-battle-image.png",
      link: "https://github.com/petergoodwin28/Theme-Change-Site",
      description:
        "A color-reactive theme engine powered by Tailwind tokens generated from hero images using Coolors.io.",
    },
    {
      name: "Custom PC Build",
      imageURL: "/my-pc.jpg",
      link: "#",
      description:
        "Custom workstation focused on airflow, GPU expandability, and Blender rendering workloads.",
    },
    {
      name: "Homestead Planner",
      imageURL: "/homestead-crops.png",
      link: "https://github.com/petergoodwin28/HomesteadPlanner",
      description:
        "A self-sufficiency planner for livestock, crops, budgets, and long-term sustainability.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const activeProject = projects[activeIndex];
  const activeProjectHasLink = activeProject.link !== "#";

  return (
    <section
      id="showcase"
      className="home-section w-full min-h-[90vh] py-24 sm:py-28 md:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="home-section-accent home-section-accent--soft" aria-hidden />
      <div className="home-section-inner">
      {/* Header (Framer Motion) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-section-header mb-20"
      >
        <p className="home-section-kicker">Selected Work</p>
        <h2 className="home-section-title">Featured Projects</h2>

        <p className="home-section-subtitle mt-3">
          A cinematic preview of the things I’ve built.
        </p>
      </motion.div>

      {/* FIXED LAYOUT CONTAINER */}
      <div className="w-full mx-auto space-y-10">
        {/* ROW 1 — PROJECT RAIL */}
        <div className="w-full max-w-[1120px] mx-auto">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.14em] opacity-70 xl:hidden">
            Swipe or tap to preview projects
          </p>

          <div className="flex gap-4 md:gap-8 xl:gap-10 justify-start xl:justify-center overflow-x-auto xl:overflow-visible snap-x snap-mandatory xl:snap-none px-1 pb-2">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  className={clsx(
                    "showcase-card-shell w-[min(82vw,320px)] h-[220px] md:w-[420px] md:h-[260px] shrink-0 snap-center relative overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive && "ring-1 ring-border/80"
                  )}
                  aria-pressed={isActive}
                  aria-label={`Preview ${project.name}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 0.9,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={clsx(
                      "showcase-card-surface absolute inset-0 rounded-2xl overflow-hidden shadow-2xl glass-card cursor-pointer will-change-transform"
                    )}
                  >
                    <Image
                      src={project.imageURL}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 420px, 82vw"
                      className="object-cover"
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 2 — ACTIVE PROJECT PANEL */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="home-panel-surface showcase-info-panel w-full max-w-2xl p-6 sm:p-7 rounded-2xl mx-auto"
        >
          <p className="showcase-panel-label">Active Project</p>
          <h3 className="text-2xl font-semibold mb-2">
            {activeProject.name}
          </h3>

          <p className="opacity-80 text-sm leading-relaxed mb-4">
            {activeProject.description}
          </p>

          {activeProjectHasLink ? (
            <Button asChild variant="outline" className="w-full sm:w-auto bubble-hover">
              <Link
                href={activeProject.link}
                target={activeProject.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  activeProject.link.startsWith("http")
                    ? "noreferrer noopener"
                    : undefined
                }
              >
                View Project
              </Link>
            </Button>
          ) : (
            <Button variant="outline" className="w-full sm:w-auto" disabled>
              Coming Soon
            </Button>
          )}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Button asChild variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg bubble-hover">
          <Link href="/projects">View Full Portfolio</Link>
        </Button>
      </div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import clsx from "clsx";

// export default function ProjectShowcase() {
//   const projects = [
//     {
//       name: "Stock Dashboard",
//       imageURL: "/stockdash-login-page.png",
//       link: "https://github.com/petergoodwin28/Stock-Dashboard-Login-Watchlist",
//       description:
//         "A login-aware stock charting dashboard with dynamic ranges, user sessions via Next Auth, and guest mode with feature flagging.",
//     },
//     {
//       name: "Theme Change Site",
//       imageURL: "/theme-site-battle-image.png",
//       link: "https://github.com/petergoodwin28/Theme-Change-Site",
//       description:
//         "A color-reactive theme engine powered by Tailwind tokens generated from hero images using Coolors.io.",
//     },
//     {
//       name: "Custom PC Build",
//       imageURL: "/my-pc.jpg",
//       link: "#",
//       description:
//         "Custom workstation focused on airflow, GPU expandability, and Blender rendering workloads.",
//     },
//     {
//       name: "Homestead Planner",
//       imageURL: "/homestead-crops.png",
//       link: "https://github.com/petergoodwin28/HomesteadPlanner",
//       description:
//         "A self-sufficiency planner for livestock, crops, budgets, and long-term homestead sustainability.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(1);

//   return (
//     <section
//       id="showcase"
//       className="w-full min-h-[90vh] py-32 px-6 relative overflow-hidden"
//     >
//       {/* SECTION HEADER */}
//       <div className="text-center mb-20 fade-in-text">
//         <h2 className="text-5xl font-light tracking-wide">Featured Projects</h2>
//         <p className="opacity-70 mt-3 text-lg max-w-2xl mx-auto">
//           A cinematic preview of the things I’ve built.
//         </p>
//       </div>

//       {/* TRACK */}
//       <div className="relative w-full flex items-center justify-center">
//         <div className="flex gap-12 overflow-visible relative">
//           {projects.map((project, index) => {
//             const isActive = index === activeIndex;

//             return (
//               <div
//                 key={index}
//                 className={clsx(
//                   "transition-all duration-500 cursor-pointer",
//                   isActive
//                     ? "scale-110 brightness-110 z-20"
//                     : "scale-90 brightness-75 blur-[2px] z-10"
//                 )}
//                 onClick={() => setActiveIndex(index)}
//                 onMouseEnter={() => setActiveIndex(index)}
//               >
//                 <Card className="glass-card overflow-hidden w-[420px] h-[260px] rounded-2xl shadow-2xl group">
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={project.imageURL}
//                       alt={project.name}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                 </Card>
//               </div>
//             );
//           })}
//         </div>

//         {/* FLOATING INFO PANEL */}
//         <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden xl:block">
//           <div className="glass-panel w-[360px] p-6 rounded-2xl space-y-3 animate-fadeUp">
//             <h3 className="text-2xl font-semibold">
//               {projects[activeIndex].name}
//             </h3>

//             <p className="text-sm opacity-80 leading-relaxed">
//               {projects[activeIndex].description}
//             </p>

//             <Button asChild variant="outline" className="w-full mt-3">
//               <Link href={projects[activeIndex].link} target="_blank">
//                 View Project →
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE INFO PANEL */}
//       <div className="xl:hidden mt-12 max-w-lg mx-auto glass-panel p-6 rounded-2xl">
//         <h3 className="text-2xl font-semibold text-center mb-3">
//           {projects[activeIndex].name}
//         </h3>
//         <p className="text-sm opacity-80 mb-4 text-center">
//           {projects[activeIndex].description}
//         </p>

//         <Button asChild variant="outline" className="w-full">
//           <Link href={projects[activeIndex].link} target="_blank">
//             View Project →
//           </Link>
//         </Button>
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-20">
//         <Button asChild variant="outline" className="px-8 py-6 text-lg">
//           <Link href="/portfolio">View Full Portfolio</Link>
//         </Button>
//       </div>
//     </section>
//   );
// }
