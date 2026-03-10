"use client";

import { motion } from "framer-motion";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function RightContent() {
  return (
    <main className="flex-1 lg:pt-14 pt-6 pb-16 min-w-0">
      {/* Big heading */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="mb-16 lg:mb-20 pt-14 lg:pt-32"
      >
        <h2
          className="font-black leading-none tracking-tight text-white"
          style={{
            fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
            fontFamily: "var(--font-poppins)",
          }}
        >
          Building
          <br />
          software
          <br />
          <span style={{ color: "#c5ff41" }}>with intention.</span>
        </h2>
      </motion.section>

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />
    </main>
  );
}
