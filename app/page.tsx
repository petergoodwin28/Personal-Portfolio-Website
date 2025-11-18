"use client";

import AboutSiteCards from "./AboutSiteCards";
import ProjectCarousel from "./ProjectCarousel";
// import Hero2 from "./Hero2";
// import Hero1 from "./Hero1";
//import Hero3 from "./Hero3";
// import Hero4 from "./Hero4";
// import Hero5 from "./Hero5";
// import Hero6 from "./Hero6";

import Transition from "./Transition";
import Hero2 from "./Hero2";
import { Scroll } from "lucide-react";
import ScrollWork from "./Scroll-Work";
import { initBubbleEffect } from "@/lib/bubble-effect";
import { use, useEffect } from "react";
import ProjectShowcase from "./ProjectShowcase";

export default function Home() {
  useEffect(() => {
    initBubbleEffect();
  }, []);

  return (
    <main className="flex flex-col" suppressHydrationWarning>
      <div className="scroll-watcher"></div>
      <Hero2 />
      {/* <Transition></Transition> */}
      <ScrollWork></ScrollWork>

      {/* <ProjectCarousel></ProjectCarousel> */}
      <ProjectShowcase></ProjectShowcase>

      <AboutSiteCards></AboutSiteCards>
    </main>
  );
}
