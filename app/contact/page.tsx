"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./contact.css";
import { initBubbleEffect } from "@/lib/bubble-effect";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const reveal = revealRef.current;


    if (!container || !reveal) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      reveal.style.setProperty("--x", `${x}px`);
      reveal.style.setProperty("--y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
      initBubbleEffect();
    }, []);
  
  return (
    
    <main className="w-full h-[100vh] flex flex-col items-center justify-center relative prose bg-black text-white">
      <div
        ref={containerRef}
        className="line-container relative w-[70%] h-[80vh] flex flex-col items-center justify-center"
      >
        {/* unified reveal layer */}
        <div ref={revealRef} className="line-reveal-layer"></div>

        <h1 className="font-extralight text-3xl mt-10 z-10">Contact Me</h1>

        <div className="flex flex-col gap-4 mt-12 p-10 rounded-lg w-[70%]  z-10 bg-cover">
          {/* bg-[url('/DarkGreenMarbleTextureBackground.png')] */}
          <div className="flex flex-row gap-x-10">
            <Input type="text" placeholder="Name" autoComplete="off" />
            <Input type="email" placeholder="Email" autoComplete="off" />
            <Input type="text" placeholder="Phone" autoComplete="off" />
          </div>
          <div className="flex flex-col justify-around">
            <Input type="text" placeholder="Subject" className="mb-4" autoComplete="off" />
            <Input type="text" placeholder="Message" className="h-32" autoComplete="off" />
          </div>
          <Button variant="outline">Submit</Button>
        </div>
      </div>
    </main>
  );
}
