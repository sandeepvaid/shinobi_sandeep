"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

const breathingStyles = [
  {
    style: "Fire Style",
    icon: "local_fire_department",
    color: "var(--c-accent)",
    subtitle: "Backend Arts",
    skills: skills.languages.concat(skills.frameworks.filter((f) => ["Node.js", "Express.js", "Django", "Spring Boot"].includes(f))),
    bgIcon: "fireplace",
  },
  {
    style: "Water Style",
    icon: "tsunami",
    color: "var(--c-blue)",
    subtitle: "Frontend Arts",
    skills: skills.frameworks.filter((f) => ["React", "Next.js", "Angular", "React Native", "Vue"].includes(f)),
    bgIcon: "waves",
  },
  {
    style: "Shadow Style",
    icon: "smart_toy",
    color: "var(--c-purple)",
    subtitle: "Agentic AI Arts",
    skills: skills.ai,
    bgIcon: "neurology",
  },
  {
    style: "Earth Style",
    icon: "landslide",
    color: "var(--c-red)",
    subtitle: "Database Arts",
    skills: skills.databases,
    bgIcon: "terrain",
  },
  {
    style: "Lightning Style",
    icon: "bolt",
    color: "var(--c-yellow)",
    subtitle: "Cloud Arts",
    skills: skills.cloud,
    bgIcon: "thunderstorm",
  },
];

export default function Arsenal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="arsenal" className="relative overflow-hidden py-24 bg-dot-grid" style={{ background: "#0e0e0e" }}>
      <span className="section-watermark top-12 left-8" style={{ opacity: 0.025 }}>ARSENAL</span>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-12" style={{ background: "var(--c-accent)" }} />
            <span className="hud-label" style={{ color: "var(--c-accent)" }}>Active Repository</span>
          </div>
          <h2
            className="font-black tracking-tighter uppercase"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.9 }}
          >
            THE{" "}
            <span style={{ color: "var(--c-accent)", textShadow: "0 0 24px rgba(var(--c-accent-rgb),0.45)" }}>ARSENAL</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "#adaaaa" }}>
            High-performance modules and specialized tools forged in production environments.
          </p>
        </motion.header>

        {/* Projects — asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          {/* Agentic AI Lab — big featured card (RAG) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 group"
          >
            <div
              className="relative p-6 md:p-12 overflow-hidden transition-all duration-500 h-full"
              style={{
                background: "#262626",
                border: "1px solid rgba(var(--c-purple-rgb),0.25)",
                borderTop: "1px solid rgba(var(--c-purple-rgb),0.25)",
                borderLeft: "1px solid rgba(var(--c-purple-rgb),0.25)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 32px rgba(var(--c-purple-rgb),0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="absolute top-0 right-0 p-6 opacity-[0.06] group-hover:opacity-[0.14] transition-opacity"
                style={{ color: "var(--c-purple)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "7rem" }}>smart_toy</span>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: "rgba(var(--c-purple-rgb),0.15)", color: "var(--c-purple2)", borderLeft: "2px solid var(--c-purple)", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    Forbidden Jutsu
                  </span>
                  <span className="hud-label" style={{ color: "rgba(255,255,255,0.2)" }}>Rank: S-Tier</span>
                </div>

                <h3
                  className="font-black uppercase tracking-tighter mb-5"
                  style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
                >
                  AGENTIC AI LAB
                </h3>
                <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg" style={{ color: "#adaaaa" }}>
                  RAG pipelines — chunking, embeddings, and vector retrieval — built as multi-step LangGraph flows with conditional routing and tool nodes. Features PGVector semantic search and SQL / calculator tool-calling agents.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["Node.js", "TypeScript", "LangGraph", "PGVector", "OpenAI", "Claude"].map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-2 px-4 py-2 text-xs uppercase"
                      style={{
                        background: "rgba(var(--c-purple-rgb),0.06)",
                        color: "var(--c-purple2)",
                        border: "1px solid rgba(var(--c-purple-rgb),0.12)",
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/sandeepvaid/learning-agentic-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-bold uppercase tracking-tight transition-all group/btn relative overflow-hidden text-sm md:text-base"
                  style={{ fontFamily: "Epilogue, sans-serif", background: "linear-gradient(135deg, var(--c-purple), var(--c-purple3))", color: "#ffffff" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--c-purple-rgb),0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  INSPECT SCROLL
                  <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column — Chatter + ETL badge */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div
              className="p-6 md:p-10 flex-1 transition-all duration-300 relative"
              style={{ background: "#1a1919", border: "1px solid rgba(var(--c-blue-rgb),0.2)", borderLeft: "2px solid rgba(var(--c-blue-rgb),0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(var(--c-blue-rgb),0.45)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(var(--c-blue-rgb),0.2)")}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "rgba(var(--c-blue-rgb),0.12)", color: "var(--c-blue)", borderLeft: "2px solid var(--c-blue)", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Special Technique
                </span>
              </div>
              <h3 className="font-black uppercase tracking-tighter mb-4" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "2rem" }}>
                CHATTER
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: "#adaaaa" }}>
                A high-concurrency social media server architected for horizontal scale — robust auth protocols, resilient message queues, and dynamic social-graph synchronization.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["MongoDB", "Node.js", "Express.js"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-[10px] uppercase"
                    style={{ background: "rgba(var(--c-blue-rgb),0.06)", color: "var(--c-blue)", border: "1px solid rgba(var(--c-blue-rgb),0.12)", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/sandeepvaid/Chatter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hud-label group transition-colors"
                style={{ color: "#ffffff" }}
              >
                Code
                <span className="block h-px w-8 group-hover:w-12 transition-all" style={{ background: "var(--c-accent)" }} />
                <span className="material-symbols-outlined text-sm" style={{ color: "var(--c-accent)" }}>open_in_new</span>
              </a>
            </div>

            {/* ETL Pipeline badge */}
            <div
              className="p-5 md:p-6 relative overflow-hidden"
              style={{ background: "#131313", border: "1px solid rgba(var(--c-red-rgb),0.2)", borderTop: "3px solid var(--c-red)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold uppercase" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "1.1rem" }}>ETL PIPELINE</h4>
                <span className="hud-label px-2 py-1 text-[9px]" style={{ background: "var(--c-red)", color: "#000" }}>100M+ / DAY</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#adaaaa" }}>13+ states · UDISE+ APIs · PostgreSQL · Snowflake · 99.9% consistency</p>
            </div>
          </motion.div>
        </div>

        {/* Projects — secondary row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-20 md:mb-32">
          {/* Connector */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="lg:col-span-7"
          >
            <div
              className="p-6 md:p-10 h-full transition-all duration-300 relative"
              style={{ background: "#1a1919", border: "1px solid rgba(var(--c-blue-rgb),0.2)", borderLeft: "2px solid rgba(var(--c-blue-rgb),0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(var(--c-blue-rgb),0.45)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(var(--c-blue-rgb),0.2)")}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "rgba(var(--c-blue-rgb),0.12)", color: "var(--c-blue)", borderLeft: "2px solid var(--c-blue)", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Support Ability
                </span>
              </div>
              <h3 className="font-black uppercase tracking-tighter mb-4" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "2rem" }}>
                CONNECTOR
              </h3>
              <p className="leading-relaxed mb-8 max-w-lg" style={{ color: "#adaaaa" }}>
                A precision-engineered React SPA focused on state synchronization. Optimized using Custom Hooks and Context API for zero-lag interaction.
              </p>
              <div className="mb-8 max-w-sm">
                <div className="flex justify-between items-center text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Space Grotesk, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  <span>Efficiency</span><span>98%</span>
                </div>
                <div className="w-full h-1" style={{ background: "#000000" }}>
                  <div className="h-full" style={{ width: "98%", background: "var(--c-blue)", boxShadow: "0 0 10px rgba(var(--c-blue-rgb),0.6)" }} />
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sandeepvaid/chatter-react-app/tree/Working-branch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hud-label group transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  Code
                  <span className="block h-px w-8 group-hover:w-12 transition-all" style={{ background: "var(--c-accent)" }} />
                  <span className="material-symbols-outlined text-sm" style={{ color: "var(--c-accent)" }}>open_in_new</span>
                </a>
                <a
                  href="https://connector-ea69e.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hud-label group transition-colors"
                  style={{ color: "#ffffff" }}
                >
                  Live
                  <span className="block h-px w-8 group-hover:w-12 transition-all" style={{ background: "var(--c-blue)" }} />
                  <span className="material-symbols-outlined text-sm" style={{ color: "var(--c-blue)" }}>open_in_new</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Event Server badge */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div
              className="p-6 md:p-10 h-full flex flex-col justify-center relative overflow-hidden"
              style={{ background: "#131313", border: "1px solid rgba(var(--c-yellow-rgb),0.2)", borderTop: "3px solid var(--c-yellow)" }}
            >
              <div
                className="absolute bottom-0 right-0 p-4 opacity-[0.05] pointer-events-none"
                style={{ color: "var(--c-yellow)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "6rem" }}>bolt</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold uppercase" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "1.4rem" }}>EVENT SERVER</h4>
                  <span className="hud-label px-2 py-1 text-[9px]" style={{ background: "var(--c-yellow)", color: "#000" }}>2M+ / S</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#adaaaa" }}>
                  A single-threaded event-processing microservice on AWS EC2 — validating and transforming 2M+ events per second for real-time analytics and recommendations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Breathing Styles — Skills */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="hud-label block mb-2" style={{ color: "var(--c-red)" }}>Core Expertise</span>
              <h2
                className="font-black tracking-tighter uppercase"
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                BREATHING{" "}
                <span style={{ color: "var(--c-red)" }}>STYLES</span>
              </h2>
            </div>
            <p className="text-sm italic max-w-xs" style={{ color: "#adaaaa" }}>
              "Technique is the physical manifestation of focused energy and disciplined practice."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {breathingStyles.map((bs, i) => (
              <motion.div
                key={bs.style}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="p-6 md:p-8 relative group transition-all duration-300"
                style={{
                  background: i % 2 === 0 ? "#131313" : "#1a1919",
                  borderTop: `3px solid ${bs.color}`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#262626")}
                onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? "#131313" : "#1a1919")}
              >
                <div className="mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl" style={{ color: bs.color }}>{bs.icon}</span>
                  <h4 className="font-black uppercase tracking-tighter" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "1.25rem", color: bs.color }}>
                    {bs.style}
                  </h4>
                </div>
                <span className="hud-label block mb-3" style={{ color: `${bs.color}80` }}>{bs.subtitle}</span>
                <div className="flex flex-wrap gap-2">
                  {bs.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm transition-colors"
                      style={{ background: "#000000", borderLeft: `1px solid ${bs.color}40`, color: "#adaaaa" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div
                  className="absolute bottom-3 right-3 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none"
                  style={{ color: bs.color }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "5rem" }}>{bs.bgIcon}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Alliance CTA */}
        <div className="mt-16 md:mt-24 p-8 md:p-16 relative overflow-hidden" style={{ background: "#000000" }}>
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none" style={{ background: "linear-gradient(to left, rgba(var(--c-accent-rgb),0.05), transparent)" }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-black uppercase tracking-tighter mb-4" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Forge an{" "}
                <span style={{ color: "var(--c-accent)" }}>Alliance</span>
              </h2>
              <p className="text-lg" style={{ color: "#adaaaa" }}>
                Looking for a shinobi to join your squad for the next big mission? Let&apos;s discuss strategy.
              </p>
            </div>
            <a
              href="#summon"
              className="whitespace-nowrap w-full md:w-auto text-center px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-widest transition-colors"
              style={{ fontFamily: "Epilogue, sans-serif", background: "#ffffff", color: "#0e0e0e" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--c-accent)"; e.currentTarget.style.color = "var(--c-onaccent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#0e0e0e"; }}
            >
              SEND SUMMON
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
