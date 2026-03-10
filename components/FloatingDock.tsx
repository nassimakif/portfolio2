"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    label: "Home",
    href: "#",
    icon: (
      // House — same as reference
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#work",
    icon: (
      // Folder — same as reference
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#",
    icon: (
      // Briefcase with handle + horizontal separator — matches reference
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="13" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="2" y1="14" x2="22" y2="14" />
      </svg>
    ),
  },
  {
    label: "Tools",
    href: "#",
    icon: (
      // Wrench icon
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Thoughts",
    href: "#",
    icon: (
      // Square with pencil — matches reference
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
];

export default function FloatingDock() {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const anyHovered = hoveredLabel !== null;

  const handleClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "5px 12px",
          borderRadius: 16,
          background: "rgba(38, 36, 34, 0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.04) inset",
        }}
      >
        {items.map(({ label, href, icon }) => {
          const isHovered = hoveredLabel === label;
          return (
            <div key={label} style={{ position: "relative" }}>

              {/* Tooltip — fade in above */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      pointerEvents: "none",
                      zIndex: 10,
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        padding: "3px 10px",
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        background: "rgba(30,28,27,0.95)",
                        backdropFilter: "blur(8px)",
                        color: "rgba(255,255,255,0.8)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Button — fixed size, no layout shift */}
              <button
                onMouseEnter={() => setHoveredLabel(label)}
                onMouseLeave={() => setHoveredLabel(null)}
                onClick={() => handleClick(href)}
                style={{
                  position: "relative",
                  width: 56,
                  height: 40,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  background: "transparent",
                  // Dim non-hovered icons when dock is active
                  opacity: anyHovered && !isHovered ? 0.38 : 1,
                  transition: "opacity 0.2s ease",
                }}
              >
                {/* Shared highlight — slides between icons (Apple layoutId trick) */}
                {isHovered && (
                  <motion.div
                    layoutId="dock-highlight"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.1)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Icon — scales up + lifts on hover */}
                <motion.span
                  animate={
                    isHovered
                      ? { scale: 1.22, y: -2 }
                      : { scale: 1, y: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 22,
                    mass: 0.6,
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    zIndex: 1,
                  }}
                >
                  {icon}
                </motion.span>
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
