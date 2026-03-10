"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { Project } from "@/types";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Accent color per project
const cardStyles: Record<string, { bg: string; text: string; tag: string }> = {
  orbital: { bg: "#f46c38", text: "#1a0e08", tag: "rgba(26,14,8,0.35)" },
  nexus:   { bg: "#c5ff41", text: "#111a00", tag: "rgba(17,26,0,0.3)" },
  prism:   { bg: "#1e1c1b", text: "#ffffff", tag: "rgba(255,255,255,0.12)" },
};

function ProjectCard({ project, index, fullWidth = false }: {
  project: Project;
  index: number;
  fullWidth?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const style = cardStyles[project.id] ?? cardStyles.prism;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease }}
      className={`rounded-[16px] overflow-hidden flex flex-col group ${fullWidth ? "md:flex-row" : ""}`}
      style={{ backgroundColor: style.bg }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-black/10 ${fullWidth ? "md:w-1/2 aspect-video md:aspect-auto" : "aspect-[4/3]"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-black select-none leading-none"
            style={{
              fontSize: "clamp(5rem, 14vw, 10rem)",
              color: "rgba(0,0,0,0.08)",
              fontFamily: "var(--font-poppins)",
            }}
          >
            {project.title[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-4 p-7 ${fullWidth ? "md:w-1/2 md:justify-center" : ""}`}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide"
              style={{
                backgroundColor: style.tag,
                color: style.text,
                fontFamily: "var(--font-space-mono)",
                opacity: 0.85,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-black leading-tight tracking-tight"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: style.text,
            fontFamily: "var(--font-poppins)",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: style.text, opacity: 0.6 }}
        >
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-100"
              style={{
                color: style.text,
                opacity: 0.5,
                fontFamily: "var(--font-space-mono)",
              }}
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-100"
              style={{
                color: style.text,
                opacity: 0.5,
                fontFamily: "var(--font-space-mono)",
              }}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [first, second, ...rest] = projects;

  return (
    <section id="work" className="mb-24">
      {/* Section label */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "#998f8f", fontFamily: "var(--font-space-mono)" }}
        >
          Selected Work
        </span>
        <span className="h-px flex-1 max-w-[40px]" style={{ backgroundColor: "#998f8f", opacity: 0.2 }} />
        <span
          className="text-[10px] tracking-[0.2em]"
          style={{ color: "#998f8f", fontFamily: "var(--font-space-mono)", opacity: 0.4 }}
        >
          {projects.length} projects
        </span>
      </motion.div>

      {/* Top row — 2 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {first  && <ProjectCard project={first}  index={0} />}
        {second && <ProjectCard project={second} index={1} />}
      </div>

      {/* Remaining — full width */}
      {rest.map((project, i) => (
        <div key={project.id} className={i > 0 ? "mt-4" : ""}>
          <ProjectCard project={project} index={i + 2} fullWidth />
        </div>
      ))}
    </section>
  );
}
