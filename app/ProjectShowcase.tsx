"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
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
        "A self-sufficiency planner for livestock, crops, budgets, and long-term homestead sustainability.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="showcase"
      className="w-full min-h-[90vh] py-32 px-6 relative overflow-hidden"
    >
      {/* SECTION HEADER */}
      <div className="text-center mb-20 fade-in-text">
        <h2 className="text-5xl font-light tracking-wide">Featured Projects</h2>
        <p className="opacity-70 mt-3 text-lg max-w-2xl mx-auto">
          A cinematic preview of the things I’ve built.
        </p>
      </div>

      {/* TRACK */}
      <div className="relative w-full flex items-center justify-center">
        <div className="flex gap-12 overflow-visible relative">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={clsx(
                  "transition-all duration-500 cursor-pointer",
                  isActive
                    ? "scale-110 brightness-110 z-20"
                    : "scale-90 brightness-75 blur-[2px] z-10"
                )}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <Card className="glass-card overflow-hidden w-[420px] h-[260px] rounded-2xl shadow-2xl group">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.imageURL}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* FLOATING INFO PANEL */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="glass-panel w-[360px] p-6 rounded-2xl space-y-3 animate-fadeUp">
            <h3 className="text-2xl font-semibold">
              {projects[activeIndex].name}
            </h3>

            <p className="text-sm opacity-80 leading-relaxed">
              {projects[activeIndex].description}
            </p>

            <Button asChild variant="outline" className="w-full mt-3">
              <Link href={projects[activeIndex].link} target="_blank">
                View Project →
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE INFO PANEL */}
      <div className="xl:hidden mt-12 max-w-lg mx-auto glass-panel p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-center mb-3">
          {projects[activeIndex].name}
        </h3>
        <p className="text-sm opacity-80 mb-4 text-center">
          {projects[activeIndex].description}
        </p>

        <Button asChild variant="outline" className="w-full">
          <Link href={projects[activeIndex].link} target="_blank">
            View Project →
          </Link>
        </Button>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Button asChild variant="outline" className="px-8 py-6 text-lg">
          <Link href="/portfolio">View Full Portfolio</Link>
        </Button>
      </div>
    </section>
  );
}
