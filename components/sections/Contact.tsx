"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
type Status = "idle" | "loading" | "success" | "error";

const socials = [
  { label: "GitHub", href: "https://github.com/nassimakif" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nassimakif" },
  { label: "Email", href: "mailto:nassim@example.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" ref={ref} className="mb-20">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "#998f8f", fontFamily: "var(--font-space-mono)" }}>
          Get in touch
        </span>
        <span className="h-px flex-1 max-w-[40px]"
          style={{ backgroundColor: "#998f8f", opacity: 0.2 }} />
      </motion.div>

      <div className="rounded-[16px] p-8 md:p-10" style={{ backgroundColor: "#1e1c1b" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <h2
              className="font-black leading-tight tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontFamily: "var(--font-poppins)" }}
            >
              Let's build<br />
              <span style={{ color: "#c5ff41" }}>something.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#998f8f" }}>
              Have a project in mind? Looking to collaborate?
              My inbox is always open.
            </p>

            <div className="flex flex-col gap-3">
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 w-fit transition-colors"
                  style={{ color: "#998f8f" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#998f8f")}
                >
                  <span className="text-xs font-medium" style={{ fontFamily: "var(--font-space-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {label}
                  </span>
                  <span className="text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            {status === "success" ? (
              <div className="flex flex-col gap-4 py-8">
                <p className="font-black text-white text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Talk soon 👋
                </p>
                <p className="text-sm" style={{ color: "#998f8f" }}>I'll get back to you shortly.</p>
                <button onClick={() => setStatus("idle")}
                  className="text-xs w-fit mt-2 transition-colors"
                  style={{ color: "#998f8f", fontFamily: "var(--font-space-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#998f8f")}>
                  Send another →
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-5">
                {[
                  { name: "name",  label: "Name",    type: "text",  placeholder: "Your name" },
                  { name: "email", label: "Email",   type: "email", placeholder: "your@email.com" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-[10px] mb-1.5 tracking-widest uppercase"
                      style={{ color: "#998f8f", fontFamily: "var(--font-space-mono)" }}>
                      {label}
                    </label>
                    <input
                      type={type} name={name} required
                      value={form[name as keyof typeof form]}
                      onChange={onChange}
                      placeholder={placeholder}
                      className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] mb-1.5 tracking-widest uppercase"
                    style={{ color: "#998f8f", fontFamily: "var(--font-space-mono)" }}>
                    Message
                  </label>
                  <textarea
                    name="message" required rows={4}
                    value={form.message} onChange={onChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs" style={{ color: "#f46c38", fontFamily: "var(--font-space-mono)" }}>
                    Something went wrong. Try again.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3.5 rounded-lg font-bold text-sm tracking-wide transition-opacity disabled:opacity-50 mt-1"
                  style={{
                    backgroundColor: "#c5ff41",
                    color: "#111a00",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
