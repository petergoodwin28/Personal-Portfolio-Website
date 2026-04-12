import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  capabilityGroups,
  getWorkProjects,
  type ProjectEntry,
} from "@/lib/project-data";

function ProjectLinkButtons({ project }: { project: ProjectEntry }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button asChild className="w-full sm:w-auto">
        <Link href={`/projects/${project.slug}`}>
          View Details
          <ArrowUpRight className="ml-2 size-4" />
        </Link>
      </Button>

      {project.links.github ? (
        <Button asChild variant="outline" className="w-full sm:w-auto bubble-hover">
          <Link href={project.links.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </Link>
        </Button>
      ) : null}

      {project.links.demo ? (
        <Button asChild variant="outline" className="w-full sm:w-auto bubble-hover">
          <Link href={project.links.demo} target="_blank" rel="noreferrer noopener">
            Live Demo
          </Link>
        </Button>
      ) : null}
    </div>
  );
}

export default function WorkPage() {
  const featuredProjects = getWorkProjects("featured");
  const supportingProjects = getWorkProjects("supporting");
  const allProjects = [...featuredProjects, ...supportingProjects];

  const totalProjects = allProjects.length;
  const inProgressCount = allProjects.filter(
    (project) => project.status === "In Progress"
  ).length;

  return (
    <main className="content-page-shell work-page overflow-hidden">
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[radial-gradient(circle_at_50%_-6%,color-mix(in_srgb,var(--primary)_8%,transparent)_0,transparent_45%),linear-gradient(180deg,color-mix(in_srgb,var(--background)_12%,transparent)_0%,transparent_26%)]
        "
      />

      <div className="content-page-inner relative z-10">
        <header className="content-page-header">
          <p className="content-page-kicker">Portfolio</p>
          <h1 className="content-page-title">Work</h1>
          <p className="content-page-subtitle">
            A focused showcase of shipped projects and active builds, organized
            for quick scanning and side-by-side comparison.
          </p>
        </header>

        <section className="mx-auto mb-16 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="content-surface px-4 py-4 text-center">
            <p className="content-chip mx-auto mb-2">Total Projects</p>
            <p className="text-3xl font-light tracking-tight">{totalProjects}</p>
          </div>
          <div className="content-surface px-4 py-4 text-center">
            <p className="content-chip mx-auto mb-2">Featured</p>
            <p className="text-3xl font-light tracking-tight">
              {featuredProjects.length}
            </p>
          </div>
          <div className="content-surface px-4 py-4 text-center">
            <p className="content-chip mx-auto mb-2">In Progress</p>
            <p className="text-3xl font-light tracking-tight">{inProgressCount}</p>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-7">
            <p className="content-page-kicker mb-3 ml-0">Featured Builds</p>
            <h2 className="text-3xl font-light tracking-wide md:text-4xl">
              Deep-Dive Projects
            </h2>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <article key={project.slug} className="content-surface overflow-hidden">
                <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                  <div
                    className={`relative min-h-[260px] lg:min-h-[360px] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10" />
                  </div>

                  <div className="flex flex-col gap-5 p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      <span className="content-chip">{project.type}</span>
                      <span className="content-chip">{project.status}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed opacity-85">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-border/70 bg-background/50 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.14em] opacity-70">
                          Role
                        </p>
                        <p className="mt-1 text-sm leading-relaxed opacity-90">
                          {project.role}
                        </p>
                      </div>
                      <div className="rounded-xl border border-border/70 bg-background/50 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.14em] opacity-70">
                          Why It Matters
                        </p>
                        <p className="mt-1 text-sm leading-relaxed opacity-90">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={`${project.slug}-${tech}`} className="content-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ProjectLinkButtons project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-7">
            <p className="content-page-kicker mb-3 ml-0">Additional Work</p>
            <h2 className="text-3xl font-light tracking-wide md:text-4xl">
              Supporting Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <Card
                key={project.slug}
                className="content-surface flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 92vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="content-chip">{project.type}</span>
                    <span className="content-chip">{project.status}</span>
                  </div>
                  <CardTitle className="text-2xl font-medium tracking-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-relaxed opacity-85">
                    {project.summary}
                  </p>

                  <div className="rounded-xl border border-border/70 bg-background/45 px-3.5 py-3">
                    <p className="text-xs uppercase tracking-[0.14em] opacity-70">
                      Role
                    </p>
                    <p className="mt-1 text-sm opacity-90">{project.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={`${project.slug}-${tech}`} className="content-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-1">
                    <ProjectLinkButtons project={project} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-7">
            <p className="content-page-kicker mb-3 ml-0">Capability Snapshot</p>
            <h2 className="text-3xl font-light tracking-wide md:text-4xl">
              Tools And Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {capabilityGroups.map((group) => (
              <article key={group.label} className="content-surface p-5">
                <h3 className="mb-4 text-xl font-medium tracking-wide">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.values.map((item) => (
                    <span key={`${group.label}-${item}`} className="content-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
