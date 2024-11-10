"use client";

import Hero from "./Hero";
import AboutSiteCards from "./AboutSiteCards";
import ProjectCarousel from "./ProjectCarousel";
import Navigation from "./Navigation";
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
