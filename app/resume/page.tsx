import React from "react";

import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
// import WorkExperience from "./WorkExperience";
// import Interests from "./Interests";
import Work from "./Work";

function page() {
  return (
    <main className="content-page-shell resume-page">
      <div className="scroll-watcher"></div>
      <div className="content-page-inner">
        <header className="content-page-header resume-intro">
          <p className="content-page-kicker">Professional Snapshot</p>
          <h1 className="content-page-title">Resume</h1>
          <p className="content-page-subtitle">
            Experience, tools, and credentials that shape how I build and
            support modern web and IT systems.
          </p>
        </header>
      </div>

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
