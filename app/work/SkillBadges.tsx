"use client";
import React from "react";
import Image from "next/image";

const groups = {
  Frontend: [
    { name: "React", path: "/skills-images/logo-react.png" },
    { name: "Next.js", path: "/skills-images/nextjs-icon.png" },
    { name: "Tailwind CSS", path: "/skills-images/tailwind-css-icon.png" },
    { name: "HTML", path: "/skills-images/html-logo.png" },
    { name: "CSS", path: "/skills-images/css-icon.jpg" },
    { name: "JavaScript", path: "/skills-images/JavaScript-Emblem.png" },
  ],

  Backend: [
    { name: "Node.js", path: "/skills-images/nodejs-logo.png" },
    { name: "MongoDB", path: "/skills-images/open-mongodb-icon.png" },
    { name: "SQL Server", path: "/skills-images/microsoft-sql-server-logo.png" },
  ],

  Tools: [
    { name: "VS Code", path: "/skills-images/visual-studio-code-icon.png" },
    { name: "Visual Studio", path: "/skills-images/visual studio-icon.jpg" },
    { name: "WordPress", path: "/skills-images/wordpress-icon.png" },
    { name: "Wix", path: "/skills-images/Wix_logo.webp" },
  ],

  Other: [
    { name: "Python", path: "/skills-images/python-icon.png" },
    { name: "Microsoft 365", path: "/skills-images/ms-365-logo.jpg" },
  ]
};

export default function SkillBadges() {
  return (
    <div className="max-w-6xl mx-auto mt-32 p-6">
      {Object.entries(groups).map(([category, items], i) => (
        <section key={i} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>

          <div className="flex flex-wrap gap-4">
            {items.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 rounded-xl border hover:scale-105 transition-all
                           bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]"
              >
                <Image
                  src={skill.path}
                  alt={skill.name}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
