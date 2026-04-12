import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { getAllProjects, getProjectBySlug } from "@/lib/project-data";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project Not Found",
      description: "The requested project page could not be found.",
      path: "/projects",
    });
  }

  return createPageMetadata({
    title: `${project.title} Project`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="content-page-shell projects-page">
      <div className="content-page-inner">
        <header className="content-page-header">
          <p className="content-page-kicker">Project Detail</p>
          <h1 className="content-page-title">{project.title}</h1>
          <p className="content-page-subtitle">{project.summary}</p>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="content-surface px-4 py-4 text-center">
            <p className="content-chip mx-auto mb-2">Status</p>
            <p className="text-xl font-light">{project.status}</p>
          </div>
          <div className="content-surface px-4 py-4 text-center">
            <p className="content-chip mx-auto mb-2">Type</p>
            <p className="text-xl font-light">{project.type}</p>
          </div>
          <div className="content-surface px-4 py-4 text-center md:col-span-2">
            <p className="content-chip mx-auto mb-2">Role</p>
            <p className="text-base leading-relaxed opacity-90">{project.role}</p>
          </div>
        </section>

        <section className="content-surface mb-8 overflow-hidden">
          <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              sizes="(min-width: 1200px) 1100px, (min-width: 768px) 92vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          </div>
        </section>

        <section className="content-surface mb-8 p-5 sm:p-7">
          <div className="mb-5">
            <p className="content-page-kicker mb-3 ml-0">Outcome</p>
            <p className="text-base leading-relaxed opacity-90">{project.impact}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={`${project.slug}-${tech}`} className="content-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <article className="content-surface p-5 sm:p-6">
            <h2 className="mb-4 text-2xl font-medium tracking-wide">Core Features</h2>
            <ul className="space-y-3 text-sm leading-relaxed opacity-90">
              {project.coreFeatures.map((feature) => (
                <li key={feature} className="rounded-lg border border-border/70 bg-background/45 px-3.5 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="content-surface p-5 sm:p-6">
            <h2 className="mb-4 text-2xl font-medium tracking-wide">
              Implementation Notes
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed opacity-90">
              {project.implementationNotes.map((note) => (
                <li key={note} className="rounded-lg border border-border/70 bg-background/45 px-3.5 py-3">
                  {note}
                </li>
              ))}
            </ul>
          </article>
        </section>

        {project.performanceNotes?.length ? (
          <section className="content-surface mb-8 p-5 sm:p-6">
            <h2 className="mb-4 text-2xl font-medium tracking-wide">
              Performance And Optimization Notes
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed opacity-90">
              {project.performanceNotes.map((note) => (
                <li key={note} className="rounded-lg border border-border/70 bg-background/45 px-3.5 py-3">
                  {note}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="content-surface mb-8 p-5 sm:p-6">
          <h2 className="mb-4 text-2xl font-medium tracking-wide">Project Links</h2>
          <div className="flex flex-wrap gap-2.5">
            <Button asChild>
              <Link href="/projects">Back To Projects</Link>
            </Button>

            {project.links.github ? (
              <Button asChild variant="outline" className="bubble-hover">
                <Link href={project.links.github} target="_blank" rel="noreferrer noopener">
                  GitHub
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            ) : null}

            {project.links.demo ? (
              <Button asChild variant="outline" className="bubble-hover">
                <Link href={project.links.demo} target="_blank" rel="noreferrer noopener">
                  Live Demo
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
