"use client";
import Image from "next/image";

const skills = [
  { name: "CSS", path: "/skills-images/css-icon.jpg" },
  { name: "HTML", path: "/skills-images/html-logo.png" },
  { name: "JavaScript", path: "/skills-images/JavaScript-Emblem.png" },
  { name: "React", path: "/skills-images/logo-react.png" },
  { name: "Next.js", path: "/skills-images/nextjs-icon.png" },
  { name: "Node.js", path: "/skills-images/nodejs-logo.png" },
  { name: "Python", path: "/skills-images/python-icon.png" },
  { name: "MongoDB", path: "/skills-images/open-mongodb-icon.png" },
  { name: "Tailwind CSS", path: "/skills-images/tailwind-css-icon.png" },
];

export default function SkillGalaxy() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden galaxy-container">
      {/* CENTER TITLE */}
      <h2 className="absolute z-20 text-4xl font-extrabold tracking-wide drop-shadow-xl">
        My Tech Stack
      </h2>

      {/* FLOATING ICONS */}
      {skills.map((skill, i) => (
        <div
          key={i}
          className={`absolute galaxy-orbit orbit-${i}`}
        >
          <Image
            src={skill.path}
            alt={skill.name}
            width={80}
            height={80}
            className="galaxy-icon"
          />
          <div className="galaxy-label">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}
