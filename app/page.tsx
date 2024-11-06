"use client";

import Hero from "./Hero";
import AboutSiteCards from "./AboutSiteCards";
import ProjectCarousel from "./ProjectCarousel";
import Navigation from "./Navigation";

export default function Home() {
  return (
    <div className="flex flex-col">

      <div className="scroll-watcher"></div>
      <Navigation></Navigation>

      <Hero></Hero>

      <ProjectCarousel></ProjectCarousel>

      <AboutSiteCards></AboutSiteCards>
    </div>
  );
}
