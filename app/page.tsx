"use client";

import AboutSiteCards from "./AboutSiteCards";
import ProjectCarousel from "./ProjectCarousel";
import Hero2 from "./Hero2";
import Hero1 from "./Hero1";

export default function Home() {
  return (
    <div className="flex flex-col" suppressHydrationWarning>

      {/* <Hero2/> */}

      <Hero1/>

      <ProjectCarousel></ProjectCarousel>

      <AboutSiteCards></AboutSiteCards>
    </div>
  );
}
