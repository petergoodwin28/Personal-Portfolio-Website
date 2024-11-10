import React from "react";

import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import WorkExperience from "./WorkExperience";

function page() {
  return (
    <div className="">
        <div className="scroll-watcher"></div>
      <About></About>

      <Skills></Skills>

      <Certifications></Certifications>
        
      <WorkExperience></WorkExperience>

      <div className="bg-purple-500 h-[1000px]"></div>
    </div>
  );
}

export default page;
