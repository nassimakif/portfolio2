"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 px-6 lg:px-12 border-t" style={{ backgroundColor: "#151312", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-[1180px] mx-auto flex items-center justify-between">
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "var(--font-space-mono)" }}>
          © {year} Nassim Akif
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "var(--font-space-mono)" }}>
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
