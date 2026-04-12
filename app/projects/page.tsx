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
      category: "Web App",
      imageURL: "/stockdash-login-page.png",
      link: "https://github.com/petergoodwin28/Stock-Dashboard-Login-Watchlist",
      description:
        "A Next.js app featuring login + guest modes, dynamic stock charting, real-time watchlists, and route protection via feature flags. Includes user dashboards, price/volume switching, and multi-range chart controls.",
    },
    {
      name: "Theme Change Site",
      category: "Web App",
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
      category: "Personal Build",
      imageURL: "/my-pc.jpg", // replace with your photo
      link: "#",
      description:
        "A hand-built workstation with high-end cooling, tuned airflow, custom cabling, and future expansion for dual GPUs. Designed for Blender, gaming, and cloud compute experiments.",
    },
    {
      name: "Ford Focus SE Upgrades",
      category: "Personal Build",
      imageURL: "/my-car.jpg", // replace with your car image
      link: "#",
      description:
        "My ongoing project car — headlight upgrades, K&N intake, vinyl-wrapped roof, custom wheels, tinting research, LED/Halogen tuning, and future stance improvements.",
    },
    {
      name: "Homestead Planner (Web App)",
      category: "Web App",
      imageURL: "/homestead-crops.png",
      link: "https://github.com/petergoodwin28/HomesteadPlanner",
      description:
        "A planning tool for managing a compact homestead ecosystem: goats, chickens, beehives, garden layouts, food budgets, and long-term sustainability planning.",
    },
    {
      name: "Personal Portfolio (This Website)",
      category: "Portfolio",
      imageURL: "/meImage1.jpg",
      link: "#",
      description:
        "A deeply customized Next.js + Tailwind + shadcn UI portfolio featuring scroll-based animations, interactive hero sections, theme support, and complex motion-driven components.",
    },
    {
      name: "Car Camping / Outdoor Planner",
      category: "Planning Tool",
      imageURL: "/carCamping.webp",
      link: "#",
      description:
        "A guide + checklist app I built based on my trips through the Adirondacks and GW National Forests—gear lists, campsite finders, readiness scoring, and packing automation.",
    },
  ];

  return (
    <main className="content-page-shell projects-page">
      <div className="content-page-inner">
      {/* PAGE HEADER */}
      <section className="content-page-header">
        <p className="content-page-kicker">Portfolio</p>
        <h1 className="content-page-title">Projects</h1>
        <p className="content-page-subtitle">
          A collection of software builds, personal creations, technical
          experiments, and hands-on projects.
        </p>
      </section>

      {/* MASONRY GRID */}
      <section className="projects-grid">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="projects-card content-surface p-4"
          >
            {project.imageURL && (
              <div className="projects-media">
                <Image
                  src={project.imageURL}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            <CardHeader className="mt-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="content-chip">{project.category}</span>
                {project.link === "#" && <span className="content-chip">In Progress</span>}
              </div>
              <CardTitle className="text-xl">{project.name}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-sm opacity-90">
              <p>{project.description}</p>

              {project.link !== "#" ? (
                <Button variant="outline" asChild className="mt-3 w-full bubble-hover">
                  <Link
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    View Project
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" className="mt-3 w-full" disabled>
                  Coming Soon
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </section>
      </div>
    </main>
  );
}
