"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const bio = [
  "I'm Nassim, a software engineer based in Paris with a passion for building products that actually matter. I care deeply about the craft — clean architecture, thoughtful APIs, and interfaces that feel effortless.",
  "My background spans full-stack web development, distributed systems, and developer tooling. I thrive at the intersection of engineering excellence and product thinking — writing code that solves real problems for real people.",
  "When I'm not building, you'll find me contributing to open source, obsessing over system design, or exploring what's next in the developer ecosystem. I believe the best software is invisible — it just works.",
];

export default function Hero() {
  const goto = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-32 pb-12 overflow-hidden">
      <div className="max-w-3xl w-full">

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between mb-6"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/25">
            Software Engineer
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/15">
            Paris, France
          </span>
        </motion.div>

        {/* Amber separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="origin-left h-px mb-8"
          style={{ backgroundColor: "rgba(200,169,126,0.4)" }}
        />

        {/* Name — intentionally measured, not giant */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="font-bold text-white tracking-tight mb-8"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontFamily: "var(--font-syne)",
            lineHeight: 1.1,
          }}
        >
          Nassim Akif
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="font-bold mb-10 tracking-tight"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
            fontFamily: "var(--font-syne)",
            color: "#C8A97E",
            lineHeight: 1.25,
          }}
        >
          Building software with intention.
        </motion.p>

        {/* Thin separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="origin-left h-px bg-white/6 mb-10"
        />

        {/* Bio */}
        <div className="flex flex-col gap-5">
          {bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              className="text-white/40 leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="max-w-3xl w-full flex items-center justify-between pt-10 mt-10 border-t border-white/5"
      >
        <button
          onClick={() => goto("#projects")}
          className="group flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors"
          style={{ color: "#C8A97E" }}
        >
          <span>View Projects</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </button>

        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C8A97E" }}
          />
          <span className="font-mono text-[10px] text-white/15 tracking-[0.25em] uppercase">
            Available
          </span>
        </div>
      </motion.div>
    </section>
  );
}
