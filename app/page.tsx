"use client";

import AboutSiteCards from "./AboutSiteCards";
import ProjectCarousel from "./ProjectCarousel";
import Hero2 from "./Hero2";

export default function Home() {
  return (
    <div className="flex flex-col">

      <Hero2/>

      <ProjectCarousel></ProjectCarousel>

      <AboutSiteCards></AboutSiteCards>
    </div>
  );
}
