import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function Skills() {
  const allLangsAndTools = [
    "Tailwindcss",
    "TypeScript",
    "JavaScript",
    "Python",
    "C",
    "Java",
    "Kotlin",
    "VsCode",
    "React",
    "Next.js",
    ".NET",
    "Arctic Wolf",
    "Visual Studio",
    "ASP.NET",
    "Microsoft 365 Admin Consoles",
    "Azure",
    "Agile",
    "Networking",
    "Windows OS",
    "Hardware",
    "IT Support",
  ];
  return (
    <section id="skills" className="resume-section content-page-inner mt-24 flex flex-col items-center w-full">
      {/* className="autoscroll-container ml-auto mr-auto" */}
      {/* <h1 className="prose font-extralight text-3xl mb-20 ">
        Skills, Languages, and Tools
      </h1> */}
      <p className="content-page-kicker mb-4">Tooling</p>
      <h2 className="font-light text-3xl sm:text-4xl md:text-5xl mb-6 prose text-center tracking-wide">
        Skills, Languages, and Tools
      </h2>

      <p className="opacity-75 text-base sm:text-lg text-center max-w-2xl mb-12">
       Browse all the various technologies and tools I have worked with.
      </p>

      <div className="autoscroll skills-marquee-wrap content-surface mt-8 px-3 py-2 rounded-xl">
        <ul className="">
          {allLangsAndTools.map((item, index) => (
            <li key={index}>
              <Card className="skills-marquee-card rounded-lg pt-2">
                <CardContent>{item}</CardContent>
              </Card>
            </li>
          ))}
        </ul>

        <ul aria-hidden>
          {allLangsAndTools.map((item, index) => (
            <li key={index}>
              <Card className="skills-marquee-card rounded-lg pt-2">
                <CardContent>{item}</CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="scroll-watcher-left-horizontal mt-32"></div>
    </section>
  );
}

export default Skills;
