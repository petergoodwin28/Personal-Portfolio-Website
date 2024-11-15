import React from "react";
import Image from 'next/image'

function About() {
  return (
    <section id="about" className="flex flex-col items-center mt-20 ">
      {/* Image */}
      <div className="fade-out-scroll border-2 rounded-full overflow-hidden w-[500px] h-[500px] mb-32">
        <Image src="/meImage1.jpg"  width={500} height={500}  alt="image" className="transform translate-y-[-170px]"/>
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
