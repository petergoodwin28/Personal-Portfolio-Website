"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React, { useEffect } from "react";

function Certifications() {
  useEffect(() => {
    // section heights
    const about = document.getElementById("about")?.offsetHeight;
    const skills = document.getElementById("skills")?.offsetHeight;
    const certifications = document.getElementById("certifications")?.offsetHeight;
    // elements in certifications
    const h1 = document.querySelector("h1")?.offsetHeight;
    const element1 = document.querySelector(".scroll-in-left");
    const element2 = document.querySelector(".scroll-in-right");
    const element3 = document.querySelector(".scroll-in-left-delay");

    if (about && skills && certifications && h1 && element1 instanceof HTMLElement && element2 instanceof HTMLElement && element3 instanceof HTMLElement) {
      const sectionHeight = certifications;
      const h1Height = h1;
      element1.style.top = `${h1Height + sectionHeight + about + skills}px`;
      element2.style.top = `${h1Height + sectionHeight + about + skills + 150}px`;
      element3.style.top = `${h1Height + sectionHeight + about + skills + 300}px`;
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <section
      id="certifications"
      className=" w-full flex flex-col items-center h-[100vh]"
    >
      <h1 className="font-extralight text-5xl prose text-center lg:mt-32 md:mt-20">
        Certifications
      </h1>

      <div className="scroll-in-left overflow-x-hidden">
        <Card className="w-fit">
          <CardHeader>AWS Cloud Practitioner</CardHeader>
          <CardContent>
            Learned about AWS services, pricing, and responsibility. <br />
            Fundamentals of Compute, Storage, Region, etc.
          </CardContent>
        </Card>
      </div>

      <div className="scroll-in-right overflow-x-hidden">
        <Card className="w-fit">
          <CardHeader>AWS Cloud Practitioner</CardHeader>
          <CardContent>
            Learned about AWS services, pricing, and responsibility. <br />
            Fundamentals of Compute, Storage, Region, etc.
          </CardContent>
        </Card>
      </div>

      <div className="scroll-in-left-delay overflow-x-hidden">
        <Card className="w-fit">
          <CardHeader>Networking / IT </CardHeader>
          <CardContent>
            While I dont have any more certifications, I often watch youtube
            videos on these topics.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Certifications;
