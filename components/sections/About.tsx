"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Go",
];

const stats = [
  { value: "5+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "∞", label: "Coffees" },
];

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.8, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="bg-[#f5f4f0] relative overflow-hidden py-28 md:py-40">
      {/* Giant background number */}
      <span
        aria-hidden
        className="absolute left-0 top-0 select-none pointer-events-none font-bold text-black leading-none"
        style={{
          fontSize: "clamp(14rem, 35vw, 32rem)",
          opacity: 0.04,
          fontFamily: "var(--font-syne)",
          lineHeight: 0.85,
          transform: "translate(-8%, -10%)",
        }}
      >
        02
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-14 relative">
        {/* Section label */}
        <FadeIn className="flex items-center gap-3 mb-14">
          <span className="w-8 h-px bg-black/25" />
          <span className="font-mono text-[10px] text-black/35 tracking-[0.3em] uppercase">
            02 — About
          </span>
        </FadeIn>

        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <RevealLine delay={0.05}>
            <h2
              className="font-bold leading-[0.9] tracking-tight text-[#0a0a0a]"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", fontFamily: "var(--font-syne)" }}
            >
              Building software
            </h2>
          </RevealLine>
          <RevealLine delay={0.12}>
            <h2
              className="font-bold leading-[0.9] tracking-tight text-outline-dark"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontFamily: "var(--font-syne)",
                WebkitTextStroke: "1.5px rgba(10,10,10,0.2)",
              }}
            >
              with intention.
            </h2>
          </RevealLine>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
          {/* Bio */}
          <div className="space-y-6">
            {[
              "I'm Nassim, a software engineer based in Paris with a passion for building products that actually matter. I care deeply about the craft — clean architecture, thoughtful APIs, and interfaces that feel effortless.",
              "My background spans full-stack web development, distributed systems, and developer tooling. I thrive at the intersection of engineering excellence and product thinking — writing code that solves real problems for real people.",
              "When I'm not building, you'll find me contributing to open source, obsessing over system design, or exploring what's next in the developer ecosystem. I believe the best software is invisible — it just works.",
            ].map((text, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <p
                  className="text-black/55 leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}
                >
                  {text}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-12">
            {/* Skills as numbered list */}
            <div ref={skillsRef}>
              <FadeIn delay={0.15}>
                <span className="font-mono text-[10px] text-black/30 tracking-[0.3em] uppercase block mb-6">
                  Tech Stack
                </span>
              </FadeIn>
              <div className="flex flex-col">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease }}
                    className="flex items-center justify-between py-3 border-b border-black/8 group"
                  >
                    <span className="text-sm text-black/70 group-hover:text-black transition-colors font-medium">
                      {skill}
                    </span>
                    <span className="font-mono text-[10px] text-black/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <FadeIn delay={0.35}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span
                      className="font-bold text-[#0a0a0a] leading-none"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontFamily: "var(--font-syne)" }}
                    >
                      {s.value}
                    </span>
                    <span className="font-mono text-[10px] text-black/30 tracking-widest uppercase">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
