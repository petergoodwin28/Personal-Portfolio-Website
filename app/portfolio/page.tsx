"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  // -------------------------------
  // PORTFOLIO PROJECTS
  // -------------------------------
  const projects = [
    {
      name: "Stock Dashboard",
      imageURL: "/stockdash-login-page.png",
      link: "https://github.com/petergoodwin28/Stock-Dashboard-Login-Watchlist",
      description:
        "A Next.js app featuring login + guest modes, dynamic stock charting, real-time watchlists, and route protection via feature flags. Includes user dashboards, price/volume switching, and multi-range chart controls.",
    },
    {
      name: "Theme Change Site",
      imageURL: "/theme-site-battle-image.png",
      link: "https://github.com/petergoodwin28/Theme-Change-Site",
      description:
        "A themed UI playground where Tailwind color tokens change seamlessly based on hero-image palettes extracted using Coolors.io. Includes animated transitions, multiple Warhammer-inspired themes, and persistent state.",
    },

    // -----------------------------
    // PERSONAL PROJECTS (NEW)
    // -----------------------------
    {
      name: "Custom PC Build",
      imageURL: "/my-pc.jpg", // replace with your photo
      link: "#",
      description:
        "A hand-built workstation with high-end cooling, tuned airflow, custom cabling, and future expansion for dual GPUs. Designed for Blender, gaming, and cloud compute experiments.",
    },
    {
      name: "Ford Focus SE Upgrades",
      imageURL: "/my-car.jpg", // replace with your car image
      link: "#",
      description:
        "My ongoing project car — headlight upgrades, K&N intake, vinyl-wrapped roof, custom wheels, tinting research, LED/Halogen tuning, and future stance improvements.",
    },
    {
      name: "Homestead Planner (Web App)",
      imageURL: "/homestead-crops.png",
      link: "https://github.com/petergoodwin28/HomesteadPlanner",
      description:
        "A planning tool for managing a compact homestead ecosystem: goats, chickens, beehives, garden layouts, food budgets, and long-term sustainability planning.",
    },
    {
      name: "Personal Portfolio (This Website)",
      imageURL: "/portfolio-preview.png",
      link: "#",
      description:
        "A deeply customized Next.js + Tailwind + shadcn UI portfolio featuring scroll-based animations, interactive hero sections, theme support, and complex motion-driven components.",
    },
    {
      name: "Car Camping / Outdoor Planner",
      imageURL: "/carCamping.webp",
      link: "#",
      description:
        "A guide + checklist app I built based on my trips through the Adirondacks and GW National Forests—gear lists, campsite finders, readiness scoring, and packing automation.",
    },
  ];

  return (
    <main className="min-h-screen py-24 px-6">
      {/* PAGE HEADER */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-light mb-4">Projects</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          A collection of software builds, personal creations, technical
          experiments, and hands-on projects.
        </p>
      </section>

      {/* MASONRY GRID */}
      <section className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="break-inside-avoid p-4 hover:shadow-xl transition-shadow duration-300"
          >
            {project.imageURL && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={project.imageURL}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <CardHeader className="mt-4">
              <CardTitle className="text-xl">{project.name}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-sm opacity-90">
              <p>{project.description}</p>

              {project.link && (
                <Button variant="outline" asChild className="mt-3 w-full">
                  <Link href={project.link} target="_blank">
                    View Project
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
