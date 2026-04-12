"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import type { ProjectStatus } from "@/lib/project-data";

type ProjectShowcaseItem = {
  slug: string;
  name: string;
  imageURL: string;
  description: string;
  status: ProjectStatus;
};

export default function ProjectShowcase({
  projects,
}: {
  projects: ProjectShowcaseItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (projects.length === 0) {
    return null;
  }

  const resolvedActiveIndex = Math.min(activeIndex, projects.length - 1);
  const activeProject = projects[resolvedActiveIndex];

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
              const isActive = index === resolvedActiveIndex;

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
          key={resolvedActiveIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="home-panel-surface showcase-info-panel w-full max-w-2xl p-6 sm:p-7 rounded-2xl mx-auto"
        >
          <p className="showcase-panel-label">Active Project</p>
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="content-chip">{activeProject.status}</span>
          </div>
          <h3 className="text-2xl font-semibold mb-2">
            {activeProject.name}
          </h3>

          <p className="opacity-80 text-sm leading-relaxed mb-4">
            {activeProject.description}
          </p>

          <Button asChild variant="outline" className="w-full sm:w-auto bubble-hover">
            <Link href={`/projects/${activeProject.slug}`}>View Details</Link>
          </Button>
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
