"use client";

import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const images = [
    { name: "CSS", path: "/skills-images/css-icon.jpg" },
    { name: "HTML", path: "/skills-images/html-logo.png" },
    { name: "JavaScript", path: "/skills-images/JavaScript-Emblem.png" },
    { name: "React", path: "/skills-images/logo-react.png" },
    {
      name: "SQL Server",
      path: "/skills-images/microsoft-sql-server-logo.png",
    },
    { name: "Microsoft 365", path: "/skills-images/ms-365-logo.jpg" },
    { name: "Next.js", path: "/skills-images/nextjs-icon.png" },
    { name: "Node.js", path: "/skills-images/nodejs-logo.png" },
    { name: "MongoDB", path: "/skills-images/open-mongodb-icon.png" },
    { name: "Python", path: "/skills-images/python-icon.png" },
    { name: "Tailwind CSS", path: "/skills-images/tailwind-css-icon.png" },
    { name: "Visual Studio", path: "/skills-images/visual studio-iicon.jpg" },
    { name: "VS Code", path: "/skills-images/visual-studio-code-icon.png" },
    { name: "Wix", path: "/skills-images/Wix_logo.webp" },
    { name: "WordPress", path: "/skills-images/wordpress-icon.png" },
  ];

  const [hoveredName, setHoveredName] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter(selected: string) {
    // $(".skill-text")[0].classList.remove("dots");
    setHoveredName(selected)
    // setIsHovered(true);
    setIsHovered(true);
  }

  function handleMouseLeave() {
    // console.log("mouse leave");
    // if (!isHovered) {
    //     console.log("mouse leave if NOT Hovered");
    //     setHoveredName("...");
    //     $(".skill-text")[0].classList.add("dots");
    // }
    // console.log("mouse leave if Hovered : setting hovered to false");
    // setIsHovered(false);
    setHoveredName("");
    setIsHovered(false);
  }

  return (
    <main className="min-h-screen p-8">
      {/* Heading */}
      <div className="fixed top-[25%] left-5%]  z-10 border-y-gray-800 w-6">
        
      <h1 className={`text-2xl font-extrabold mb-6 skill-text ${isHovered ? "" : "dots"} `}>{hoveredName}</h1>
      </div>

      {/* Icon Grid */}
      <div className="m-10 p-20 flex flex-wrap gap-6 justify-center"> 
        {images.map((img, index) => (
          <div
            key={index}
            className="transition-transform duration-200 hover:-translate-y-2 cursor-pointer border-x-red-900 m-10 gap-4"
            onMouseEnter={() => handleMouseEnter(img.name)}
            onMouseLeave={() => handleMouseLeave()}

          >
            <Image
              src={img.path}
              alt={img.name}
              className="w-24 h-24 object-contain rounded-lg shadow transition-transform duration-200 hover:rotate-12 hover:scale-110"
            />
            
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
