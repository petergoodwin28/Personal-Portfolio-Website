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
  ];
  return (
    <section id="skills" className="mt-44 mb-52 flex flex-col items-center w-full">
      {/* className="autoscroll-container ml-auto mr-auto" */}
      <h1 className="prose font-extralight text-3xl mb-20 ">
        Skills, Languages, and Tools
      </h1>
      <div className="autoscroll w-[50%] mt-32">
        <ul className="">
          {allLangsAndTools.map((item, index) => (
            <li key={index}>
              <Card className="border-none bg-none hover:bg-white hover:text-black pt-5">
                <CardContent>{item}</CardContent>
              </Card>
            </li>
          ))}
        </ul>

        <ul aria-hidden>
          {allLangsAndTools.map((item, index) => (
            <li key={index}>
              <Card className="border-none hover:bg-white hover:text-black pt-5">
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
