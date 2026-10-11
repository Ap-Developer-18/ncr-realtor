import { ProjectCard } from "@/components/property/ProjectCard";
import { Section } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading title="Projects" text="Illustrative sample records. Not verified live developments." />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p) => (
          <div key={p.slug} id={p.slug} className="scroll-mt-24"><ProjectCard project={p} /></div>
        ))}
      </div>
    </Section>
  );
}
