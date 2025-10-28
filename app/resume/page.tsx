import React from "react";

import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
// import WorkExperience from "./WorkExperience";
// import Interests from "./Interests";
import Work from "./Work";

function page() {
  return (
    <main>
      <div className="scroll-watcher"></div>
      <About></About>

      <Skills></Skills>

      <Certifications></Certifications>

      {/* <WorkExperience></WorkExperience> */}


      <Work></Work>

      {/* <Interests></Interests> */}
    </main>
  );
}

export default page;
