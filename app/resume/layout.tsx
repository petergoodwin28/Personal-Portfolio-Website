import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resume",
  description:
    "Review Peter Goodwin's professional experience, technical skills, certifications, and work history across web development and IT operations.",
  path: "/resume",
});

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
