import React from "react";

import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import WorkExperience from "./WorkExperience";

function page() {
  return (
    <div suppressHydrationWarning>
      <div className="scroll-watcher"></div>
      <About></About>

      <Skills></Skills>

      <Certifications></Certifications>

      <WorkExperience></WorkExperience>
    </div>
  );
}

export default page;
