"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white/3 border border-white/8 overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Fallback placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/3">
          <span className="font-mono text-white/10 text-6xl font-bold select-none">
            {project.title[0]}
          </span>
        </div>

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black text-xs font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Live →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-white/30 tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-bold mb-2 tracking-tight group-hover:text-white/80 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Footer links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center gap-1.5 group/link"
            >
              <span>Live</span>
              <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center gap-1.5 group/link"
            >
              <span>GitHub</span>
              <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
