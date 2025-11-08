import React, { Component } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export class Transition extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="absolute top-[85vh] left-[50%] border border-slate-600 appear-y-scroll bg-black z-50 p-5 text-white prose">
          Welcome to my Portfolio! Enjoy the scroll effects!
        </div>
        <div className="flex flex-col overflow-x-clip mt-32">
          <div id="" className="scroll-x-right flex flex-row">
            <Image
              src="/nature/IMG_6905.jpg"
              alt="Transition Image"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_7008.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_7071.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_6912.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_6930.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
          </div>
          <div id="" className="scroll-x-left flex flex-row">
            <Image
              src="/nature/IMG_6905.jpg"
              alt="Transition Image"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_7008.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_7071.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_6912.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
            <Image
              src="/nature/IMG_6930.jpg"
              alt="Transition Image 2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Transition;
