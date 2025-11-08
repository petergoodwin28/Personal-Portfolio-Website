"use client";
import Image from "next/image";
import React from "react";

function Work() {
  return (
    <div id="work" className="h-screen flex flex-col justify-center">
      <div className="flex flex-row justify-around">
        <div className=" flex flex-col justify-center items-center">
          <div className="border-2 pl-10 ml-10 ">
            <div className="flex items-center align-middle md:flex-row lg:flex-row sm:(flex-row-reverse) gap-3 ">
              <h1 className="prose text-7xl font-extralight mb-10">
                Serigor Inc.
              </h1>
              <Image src="vercel.svg" alt="Serigor" width="40" height="40" />
            </div>

            <h1 className="prose text-5xl font-extralight">Web Developer</h1>

            <p className="prose text-2xl font-300">Microsoft 365 | Intune</p>
            <p className="prose text-2xl font-300">
              .Net ASP Razor | WordPress
            </p>
            <p className="prose text-2xl font-300">HTML | CSS | JS</p>
            <p className="prose text-2xl font-300">IT Support | IT Admin</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis, cum! Ad, voluptatum perferendis eveniet, culpa at
              provident aut ex iure unde laudantium quam ipsa, sapiente
              voluptate repellat facere! Pariatur, illo.
            </p>
            <div className="border border-s-2 border-foreground w-32 h-32 rounded-full flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
