"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ORANGE = "#f46c38";

/* ── Social icon SVGs ───────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.007.002c-5.813 2.23-7.897 6.65-8.073 7.043 1.68 1.31 3.78 2.098 6.075 2.098 1.48 0 2.88-.32 4.195-.373zm-9.08-2.456c.228-.413 3.017-5.288 8.287-7.155l.005-.002-.24-.512C9.52 12.67 3.44 12.738 2.882 12.738c-.054.278-.082.564-.082.856 0 2.368.913 4.527 2.405 6.147l-.36.453zm-.54-7.48c.56 0 6.447-.08 11.96 1.62a47.04 47.04 0 0 0-.58-1.3c-5.27-1.97-10.73-1.91-11.26-1.9-.065.21-.098.43-.12.65v.93zm13.457-2.97c-1.688-2.996-4.852-5.043-8.48-5.043-2.12 0-4.094.68-5.703 1.83.116.22.236.445.362.658 5.183 2.07 9.28 5.63 11.18 8.918l2.64-6.363z" />
    </svg>
  );
}

/* ── Flame badge icon ────────────────────────────────────────── */
function FlameIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 8 4 12.5 4 16a8 8 0 0 0 16 0c0-4.5-3-9.5-8-14zm0 18a4 4 0 0 1-4-4c0-2.5 1.5-5 4-8 2.5 3 4 5.5 4 8a4 4 0 0 1-4 4z" />
    </svg>
  );
}

export default function LeftSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease }}
      className="
        lg:sticky lg:top-0 lg:h-screen lg:w-[300px] lg:flex-shrink-0
        lg:flex lg:flex-col lg:justify-start lg:pt-[184px]
        pt-28 pb-10
      "
    >
      {/* Outer wrapper — overflow visible so arc extends outside card */}
      <div style={{ position: "relative" }}>

        {/* ── Dashed arc decoration ────────────────────────────── */}
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          style={{
            position: "absolute",
            top: -30,
            left: -30,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <path
            d="M 0 220 A 220 220 0 0 1 220 0"
            stroke={ORANGE}
            strokeWidth="2"
            strokeDasharray="7 7"
            strokeLinecap="round"
          />
        </svg>

        {/* ── White card ──────────────────────────────────────── */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 12px 48px rgba(0,0,0,0.22)",
          }}
        >
          {/* Photo area — fond orange, style photo d'identité */}
          <div
            style={{
              position: "relative",
              height: 260,
              background: "#f46c38",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "20px 24px 0",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-nassim-processed.jpeg"
              alt="Nassim Akif"
              style={{
                height: "100%",
                width: "auto",
                display: "block",
                borderRadius: "10px 10px 0 0",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>

          {/* Card content */}
          <div
            style={{
              padding: "22px 24px 28px",
              textAlign: "center",
              background: "#ffffff",
            }}
          >
            {/* Name */}
            <h1
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#111111",
                letterSpacing: "0.04em",
                marginBottom: 14,
                fontFamily: "var(--font-poppins)",
              }}
            >
              Nassim Akif
            </h1>

            {/* Orange flame badge */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: ORANGE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#fff",
              }}
            >
              <FlameIcon />
            </div>

            {/* Bio */}
            <p
              style={{
                fontSize: 14,
                color: "#888888",
                lineHeight: 1.65,
                maxWidth: 220,
                margin: "0 auto 22px",
                fontFamily: "var(--font-poppins)",
              }}
            >
              A Software Engineer who builds performant applications for impactful products.
            </p>

            {/* Social icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 18,
              }}
            >
              {[
                { href: "https://github.com/nassimakif", icon: <GithubIcon /> },
                { href: "https://linkedin.com/in/nassimakif", icon: <LinkedinIcon /> },
                { href: "https://twitter.com/nassimakif", icon: <TwitterIcon /> },
                { href: "https://dribbble.com/nassimakif", icon: <DribbbleIcon /> },
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: ORANGE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.15s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.65")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
