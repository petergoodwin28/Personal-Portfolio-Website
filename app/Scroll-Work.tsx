"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export default function ScrollWork() {
  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline: scroll()");

    if (!supportsScrollTimeline) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("in-view");
            else entry.target.classList.remove("in-view");
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      document.querySelectorAll(".fade-border").forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
  }, []);

  return (
    <div className="w-full h-[1000px]">
      <div className="flex flex-row h-96 justify-around items-center mt-40">
        <div className="w-80 h-96 border rounded-lg overflow-clip scroll-x-right">
          <Image src="/meImage1.jpg" alt="Transition Image" width={500} height={500} />
        </div>

        <ul className="flex flex-col gap-y-5 prose">
          {["Web Developer","Administrator","Cloud Engineer","Video Gamer"].map((t, i) => (
            <li key={i} className="space-y-2">
              <h2 className="text-5xl font-medium">{t}</h2>
              <div className="fade-border" data-delay={`${i * 120}ms`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
