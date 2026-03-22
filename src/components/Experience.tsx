"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/portfolio";

const missionColors = ["#00bdfd", "#ff8f70", "#ff7072"];
const missionIcons = ["terminal", "brush", "settings_input_component"];
const missionBadges = ["Active Mission", "Completed Arc", "Legend Arc"];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="missions" className="relative overflow-hidden py-24 bg-dot-grid" style={{ background: "#0e0e0e" }}>
      <span className="section-watermark top-12 left-8" style={{ opacity: 0.025 }}>MISSIONS</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20 pl-5"
          style={{ borderLeft: "8px solid #ff8f70" }}
        >
          <p className="hud-label mb-2" style={{ color: "#ff8f70" }}>Chronicle of Growth</p>
          <h2
            className="font-black tracking-tighter uppercase"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.9 }}
          >
            <span style={{ textShadow: "0 0 20px rgba(255,143,112,0.35)" }}>TRAINING &amp;</span>{" "}
            MISSIONS
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Center line */}
          <div
            className="absolute hidden md:block"
            style={{ left: "calc(25% - 0.5px)", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #ff8f70, #00bdfd, transparent)", opacity: 0.2 }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-start"
            >
              {/* Left meta */}
              <div className="md:text-right md:pr-8">
                {i === 0 && (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: "rgba(255,143,112,0.15)", color: "#ff8f70", borderLeft: "2px solid #ff8f70" }}
                  >
                    <span className="material-symbols-outlined text-sm">bolt</span>
                    Active Mission
                  </div>
                )}
                <h3
                  className="font-bold uppercase mb-1"
                  style={{ fontFamily: "Epilogue, sans-serif", fontSize: "1.3rem", color: "#ffffff" }}
                >
                  {exp.company}
                </h3>
                <p className="hud-label" style={{ color: missionColors[i] }}>{exp.duration}</p>
              </div>

              {/* Card */}
              <div
                className="md:col-span-3 cursor-pointer"
                onClick={() => setExpanded(expanded === i ? -1 : i)}
              >
                <div
                  className="p-7 relative overflow-hidden transition-all duration-300"
                  style={{
                    background: expanded === i ? "#201f1f" : "#1a1919",
                    border: `1px solid ${expanded === i ? missionColors[i] + "40" : "rgba(72,72,71,0.15)"}`,
                    boxShadow: expanded === i ? `0 0 24px ${missionColors[i]}15` : "none",
                  }}
                >
                  {/* glow blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none blur-3xl opacity-[0.04]" style={{ background: missionColors[i], marginTop: -64, marginRight: -64 }} />

                  <div className="flex items-center gap-4 mb-5">
                    <span className="material-symbols-outlined text-3xl" style={{ color: missionColors[i] }}>{missionIcons[i]}</span>
                    <div>
                      <h4
                        className="font-bold uppercase tracking-tight"
                        style={{ fontFamily: "Epilogue, sans-serif", fontSize: "1.2rem" }}
                      >
                        {exp.role}
                      </h4>
                      {i === 2 && (
                        <div
                          className="absolute top-3 right-3 px-2 py-1 rotate-12 hud-label"
                          style={{ background: "#ff7072", color: "#000000" }}
                        >
                          50K REQ/S
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Top highlights (always shown) */}
                  <ul className="space-y-3 mb-5">
                    {exp.highlights.slice(0, 2).map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm mt-0.5 flex-shrink-0" style={{ color: missionColors[i] }}>flare</span>
                        <p className="text-sm leading-relaxed" style={{ color: "#adaaaa" }}>{h}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded highlights */}
                  <AnimatePresence>
                    {expanded === i && exp.highlights.length > 2 && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden space-y-3 mb-5"
                      >
                        {exp.highlights.slice(2).map((h, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-sm mt-0.5 flex-shrink-0" style={{ color: missionColors[i] }}>flare</span>
                            <p className="text-sm leading-relaxed" style={{ color: "#adaaaa" }}>{h}</p>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          background: "#131313",
                          color: "#adaaaa",
                          borderLeft: `2px solid ${missionColors[i]}`,
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  {exp.highlights.length > 2 && (
                    <button
                      className="mt-4 flex items-center gap-1 hud-label transition-colors"
                      style={{ color: expanded === i ? missionColors[i] : "#484847" }}
                    >
                      <span className="material-symbols-outlined text-sm">{expanded === i ? "expand_less" : "expand_more"}</span>
                      {expanded === i ? "COLLAPSE" : "MORE_INTEL"}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center py-20 relative overflow-hidden"
          style={{ background: "#000000" }}
        >
          <span className="material-symbols-outlined text-5xl mb-4 block" style={{ color: "#ff8f70" }}>workspace_premium</span>
          <h3
            className="font-black uppercase tracking-tighter mb-8"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Ready for the next mission?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#summon"
              className="px-10 py-4 font-bold uppercase tracking-widest transition-all hud-label"
              style={{ background: "linear-gradient(135deg, #ff8f70, #ff7852)", color: "#5c1300" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(0,189,253,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              REQUEST SCROLL
            </a>
            <a
              href="#arsenal"
              className="px-10 py-4 font-bold uppercase tracking-widest hud-label relative group"
              style={{ border: "1px solid rgba(119,119,117,0.5)", color: "#ffffff" }}
            >
              VIEW ARSENAL
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-300" style={{ background: "#ff8f70" }} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
