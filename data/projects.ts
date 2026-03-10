import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "orbital",
    title: "Orbital",
    description:
      "A real-time project management platform built for distributed teams. Features drag-and-drop boards, live collaboration, and smart task prioritization powered by AI.",
    image: "/projects/orbital.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://orbital.demo",
    githubUrl: "https://github.com/nassimakif/orbital",
    featured: true,
  },
  {
    id: "nexus",
    title: "Nexus",
    description:
      "A developer community platform where engineers share snippets, discuss tech stacks, and build in public. Think GitHub meets Twitter, with a focus on code.",
    image: "/projects/nexus.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    liveUrl: "https://nexus.demo",
    githubUrl: "https://github.com/nassimakif/nexus",
    featured: true,
  },
  {
    id: "prism",
    title: "Prism",
    description:
      "An open-source API monitoring tool that tracks endpoints, logs response times, and sends instant alerts when services degrade — self-hostable in one command.",
    image: "/projects/prism.jpg",
    tags: ["Go", "Docker", "PostgreSQL", "React"],
    liveUrl: "https://prism.demo",
    githubUrl: "https://github.com/nassimakif/prism",
    featured: false,
  },
];
