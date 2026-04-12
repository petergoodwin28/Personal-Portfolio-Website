"use client";

import dynamic from "next/dynamic";
import DeferredRender from "@/components/DeferredRender";

const AboutSiteCards = dynamic(() => import("../components/AboutSiteCards"));

export default function HomeAboutSection() {
  return (
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
  );
}
