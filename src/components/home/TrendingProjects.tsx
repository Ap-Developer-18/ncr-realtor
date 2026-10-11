"use client";
import { useState } from "react";
import { Section } from "@/components/layout/SectionContainer";
import { ProjectCard } from "@/components/property/ProjectCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_TYPES, projects } from "@/data/projects";
import { ProjectType } from "@/types/project";

export function TrendingProjects() {
  const [type, setType] = useState<ProjectType>("Residential");
  const list = projects.filter((p) => p.type === type);
  return (
    <Section id="projects">
      <SectionHeading
        title="Discover Trending Projects"
        text="Explore noteworthy developments in sought-after locations. Sample records for demonstration."
        action={{ label: "All Projects", href: "/projects" }}
      />
      <CategoryTabs label="Project type" tabs={PROJECT_TYPES} value={type} onChange={(v) => setType(v as ProjectType)} />
      <RevealGroup key={type} className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <RevealItem key={p.slug}><ProjectCard project={p} /></RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
