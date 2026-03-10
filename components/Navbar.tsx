"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goto = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16"
        style={{ backgroundColor: "#151312" }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-white text-sm"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Nassim Akif
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] w-8 h-8 items-center justify-center"
        >
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8"
            style={{ backgroundColor: "#151312" }}
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => goto(href)}
                className="text-4xl font-black text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
