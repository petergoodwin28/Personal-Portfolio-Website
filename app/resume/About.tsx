import { Button } from "@/components/ui/button";
import React from "react";

function About() {
  return (
    <section className="flex flex-col items-center mt-20 ">
      {/* Image */}
      <div className="fade-out-scroll border-2 rounded-full overflow-hidden w-[500px] h-[500px] mb-32">
        <img className="mt-32" src="/14772577.jpg" alt="image" />
      </div>

      {/* Description */}

      <h1 className="mb-10 font-extralight text-3xl appear">About Me</h1>
      <div className="elevate-text-container text-2xl font-extralight text-center mt-20">
        <p className="elevate-text ">
          I am an aspiring web developer! I love taking time to code out
          projects and since graduating with my bachelors in Computer Science, I
          have been given the opportunity to do so.
        </p>

        <p className="elevate-text mt-32">
          Making this website has been a lot of learning and a lot of fun!
        </p>

        <p className="elevate-text ">
          I hope you enjoy the effects that I have put in place!
        </p>
      </div>

        <div className="scroll-watcher-right-horizontal mt-44"></div>
    </section>
  );
}

export default About;
