import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/project-data";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="content-page-shell projects-page">
      <div className="content-page-inner">
        <section className="content-page-header">
          <p className="content-page-kicker">Portfolio</p>
          <h1 className="content-page-title">Projects</h1>
          <p className="content-page-subtitle">
            A collection of software builds, personal creations, technical
            experiments, and hands-on projects.
          </p>
        </section>

        <section className="projects-grid">
          {projects.map((project) => (
            <Card key={project.slug} className="projects-card content-surface p-4">
              <div className="projects-media">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader className="mt-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="content-chip">{project.type}</span>
                  <span className="content-chip">{project.status}</span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm opacity-90">
                <p>{project.summary}</p>

                <Button variant="outline" asChild className="mt-3 w-full bubble-hover">
                  <Link href={`/projects/${project.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
