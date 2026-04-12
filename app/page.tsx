import Hero2 from "../components/Hero2";
import ScrollWork from "../components/Scroll-Work";
import ProjectShowcase from "../components/ProjectShowcase";
import BubbleEffectInitializer from "@/components/BubbleEffectInitializer";
import { getHomepageProjects } from "@/lib/project-data";
import HomeAboutSection from "@/components/HomeAboutSection";

export default function Home() {
  const homepageProjects = getHomepageProjects();

  return (
    <main className="flex flex-col" suppressHydrationWarning>
      <BubbleEffectInitializer />
      <div className="scroll-watcher"></div>

      <Hero2 />
      <ScrollWork />

      <ProjectShowcase projects={homepageProjects} />

      <HomeAboutSection />
    </main>
  );
}
