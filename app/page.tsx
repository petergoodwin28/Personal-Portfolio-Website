"use client";

import AboutSiteCards from "./AboutSiteCards";
import ProjectCarousel from "./ProjectCarousel";
// import Hero2 from "./Hero2";
// import Hero1 from "./Hero1";
 import Hero3 from "./Hero3";
// import Hero4 from "./Hero4";
// import Hero5 from "./Hero5";
// import Hero6 from "./Hero6";

export default function Home() {
  return (
    <main className="flex flex-col" suppressHydrationWarning>

      {/* <Hero2/> */}

      <Hero3/>

      <ProjectCarousel></ProjectCarousel>

      <AboutSiteCards></AboutSiteCards>

    
    </main>
  );
}
