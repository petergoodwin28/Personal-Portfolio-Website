"use client";

import Hero2 from "../components/Hero2";
import ScrollWork from "../components/Scroll-Work";
import { initBubbleEffect } from "@/lib/bubble-effect";
import { useEffect } from "react";
import ProjectShowcase from "../components/ProjectShowcase";
import dynamic from "next/dynamic";
import DeferredRender from "@/components/DeferredRender";

const AboutSiteCards = dynamic(() => import("../components/AboutSiteCards"));

export default function Home() {
  useEffect(() => {
    const cleanupBubbleEffect = initBubbleEffect();
    return cleanupBubbleEffect;
  }, []);

  return (
    <main className="flex flex-col" suppressHydrationWarning>
      <div className="scroll-watcher"></div>

      <Hero2 />
      <ScrollWork />

      <ProjectShowcase />

      <DeferredRender
        rootMargin="280px 0px"
        placeholder={
          <section className="home-section w-full py-24 sm:py-28 md:py-32 px-4 sm:px-6">
            <div className="home-section-inner">
              <div className="h-10 w-40 mx-auto rounded-full bg-foreground/10 animate-pulse" />
              <div className="h-10 w-72 mx-auto mt-6 rounded-lg bg-foreground/10 animate-pulse" />
              <div className="h-6 w-full max-w-2xl mx-auto mt-4 rounded-lg bg-foreground/10 animate-pulse" />
            </div>
          </section>
        }
      >
        <AboutSiteCards />
      </DeferredRender>
    </main>
  );
}
