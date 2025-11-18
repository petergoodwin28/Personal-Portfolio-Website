"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function ScrollWork() {
  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("animation-timeline: scroll()");

    if (!supportsScrollTimeline) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            entry.target.classList.toggle("in-view", entry.isIntersecting);
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
      );

      document.querySelectorAll(".fade-in-text").forEach(el => io.observe(el));
      return () => io.disconnect();
    }
  }, []);

  const titles = [
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
    <section className="w-full py-32 px-6 overflow-hidden">

      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-light tracking-wide fade-in-text fade-in-heading">
          Who Am I?
        </h2>
        <p className=" mt-3 text-lg fade-in-text fade-in-subtitle">
          A few roles that define my work — and who I am outside of it.
        </p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-24 xl:gap-32">

        {/* Image */}
        <div className="relative fade-in-text fade-in-image">
          <div className="glass-panel w-72 h-72 rounded-3xl shadow-xl backdrop-blur-xl border border-white/20 overflow-hidden">
            <Image
              src="/meImage1.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="object-cover w-full h-full animate-subtleZoom"
            />
          </div>

          {/* glow */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-40 -z-10" />
        </div>

        {/* Titles */}
        <ul className="flex flex-col gap-12 w-full max-w-xl">
          {titles.map((item, i) => (
            <li key={i} className="fade-in-text" style={{ animationDelay: `${200 + i * 120}ms` }}>
              <h3
                className="
                  text-4xl xl:text-5xl font-medium tracking-wide
                  transition-all duration-300
                  hover:text-primary hover:scale-[1.03]
                  hover:tracking-wide
                "
              >
                {item.label}
              </h3>

              <p className="opacity-70 text-base xl:text-lg mt-2">
                {item.desc}
              </p>

              <div className="hr-glow mt-3"></div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
