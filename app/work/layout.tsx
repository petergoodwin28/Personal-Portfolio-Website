import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Explore Peter Goodwin's featured project work, supporting builds, capabilities, and frontend focus areas in a structured portfolio view.",
  path: "/work",
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
