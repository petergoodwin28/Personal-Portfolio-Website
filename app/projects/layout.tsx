import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse selected software, planning, and hands-on build projects by Peter Goodwin, including shipped web apps and in-progress builds.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
