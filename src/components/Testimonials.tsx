"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { ChevronLeft, ChevronRight } from "lucide-react";

const avatarColors: Record<string, string> = { PC: "#ff8f70", AD: "#00bdfd", MM: "#ff7072", RJ: "#facc15" };

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="relative overflow-hidden py-24" style={{ background: "#131313" }}>
      <span className="section-watermark top-8 left-8" style={{ opacity: 0.02 }}>ALLIES</span>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 pl-5"
          style={{ borderLeft: "6px solid #00bdfd" }}
        >
          <span className="hud-label block mb-2" style={{ color: "#00bdfd" }}>Testimonials</span>
          <h2
            className="font-black uppercase tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9 }}
          >
            ALLY{" "}
            <span style={{ color: "#00bdfd", textShadow: "0 0 20px rgba(0,189,253,0.4)" }}>SCROLLS</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-12 relative overflow-hidden"
              style={{ background: "#201f1f", border: "1px solid rgba(72,72,71,0.2)", borderLeft: `3px solid ${avatarColors[t.avatar]}` }}
            >
              {/* Big quote */}
              <div
                className="absolute top-4 right-6 font-black select-none pointer-events-none"
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "8rem", lineHeight: 1, color: avatarColors[t.avatar], opacity: 0.06 }}
              >
                "
              </div>

              <p className="text-lg md:text-xl leading-relaxed relative z-10 mb-10" style={{ color: "#d1d5db" }}>
                "{t.text}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center font-black text-xl flex-shrink-0"
                    style={{
                      fontFamily: "Epilogue, sans-serif",
                      background: `${avatarColors[t.avatar]}20`,
                      border: `2px solid ${avatarColors[t.avatar]}`,
                      color: avatarColors[t.avatar],
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-tight" style={{ fontFamily: "Epilogue, sans-serif", color: "#ffffff" }}>{t.name}</p>
                    <p className="text-xs mt-1" style={{ color: "#adaaaa", fontFamily: "Space Grotesk, sans-serif" }}>{t.role}</p>
                    <p className="text-xs" style={{ color: "#484847", fontFamily: "Space Grotesk, sans-serif" }}>{t.company}</p>
                  </div>
                </div>

                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 hud-label text-xs transition-all"
                  style={{ background: "rgba(10,102,194,0.12)", color: "#60a5fa", border: "1px solid rgba(10,102,194,0.25)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(10,102,194,0.22)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(10,102,194,0.12)")}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Recommendation
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-200"
                  style={{
                    width: i === current ? 32 : 8,
                    height: 4,
                    background: i === current ? avatarColors[testimonials[i].avatar] : "#484847",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="p-2.5 transition-all"
                style={{ background: "#1a1919", border: "1px solid rgba(72,72,71,0.3)", color: "#adaaaa" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#262626"; e.currentTarget.style.color = "#ff8f70"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1919"; e.currentTarget.style.color = "#adaaaa"; }}
              >
                <ChevronLeft size={16} />
              </button>
              <span className="hud-label" style={{ color: "#484847" }}>{current + 1} / {testimonials.length}</span>
              <button
                onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
                className="p-2.5 transition-all"
                style={{ background: "#1a1919", border: "1px solid rgba(72,72,71,0.3)", color: "#adaaaa" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#262626"; e.currentTarget.style.color = "#ff8f70"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1919"; e.currentTarget.style.color = "#adaaaa"; }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="flex items-center gap-2 px-3 py-2 transition-all"
                style={{
                  background: current === i ? `${avatarColors[t.avatar]}18` : "#1a1919",
                  border: `1px solid ${current === i ? avatarColors[t.avatar] + "60" : "rgba(72,72,71,0.2)"}`,
                }}
              >
                <div
                  className="w-7 h-7 flex items-center justify-center text-[10px] font-black flex-shrink-0"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    background: `${avatarColors[t.avatar]}20`,
                    color: avatarColors[t.avatar],
                  }}
                >
                  {t.avatar}
                </div>
                <span className="text-xs hidden sm:block" style={{ color: current === i ? "#ffffff" : "#484847", fontFamily: "Space Grotesk, sans-serif" }}>
                  {t.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
