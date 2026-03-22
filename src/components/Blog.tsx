"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogs } from "@/data/portfolio";

const rankColors = ["#ff8f70", "#00bdfd", "#ff7072"];
const rankIcons = ["auto_stories", "code", "hub"];
const ranks = ["S-Tier Scroll", "A-Tier Scroll", "B-Tier Scroll"];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="scrolls" ref={ref} className="relative overflow-hidden py-24" style={{ background: "#0e0e0e" }}>
      <span className="section-watermark top-8 left-4" style={{ opacity: 0.025 }}>SCROLLS</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-12" style={{ background: "#ff8f70" }} />
            <span className="hud-label" style={{ color: "#ff8f70" }}>Jutsu Scrolls</span>
          </div>
          <h2
            className="font-black uppercase tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 0.9 }}
          >
            THE{" "}
            <span style={{ color: "#ff8f70", textShadow: "0 0 20px rgba(255,143,112,0.4)" }}>ARCHIVE</span>
          </h2>
          <p className="mt-4 max-w-xl text-base" style={{ color: "#adaaaa" }}>
            Transmissions from the field — battle-tested knowledge scrolls.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((b, i) => (
            <motion.a
              key={b.id}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="block group relative overflow-hidden transition-all duration-300"
              style={{ background: "#1a1919", border: "1px solid rgba(72,72,71,0.15)", borderTop: `3px solid ${rankColors[i]}` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#201f1f";
                e.currentTarget.style.boxShadow = `0 0 24px ${rankColors[i]}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1a1919";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* rank badge */}
              <div className="absolute top-4 right-4">
                <span className="hud-label" style={{ color: `${rankColors[i]}80` }}>{ranks[i]}</span>
              </div>

              {/* Icon */}
              <div className="p-8 pb-4">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1"
                  style={{ background: `${rankColors[i]}15`, border: `1px solid ${rankColors[i]}30` }}
                >
                  <span className="material-symbols-outlined" style={{ color: rankColors[i] }}>{rankIcons[i]}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {b.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                      style={{
                        background: "#131313",
                        color: rankColors[i],
                        border: `1px solid ${rankColors[i]}25`,
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="font-bold uppercase tracking-tighter mb-3 leading-tight"
                  style={{ fontFamily: "Epilogue, sans-serif", fontSize: "1.15rem" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#adaaaa" }}>
                  {b.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="hud-label" style={{ color: "#484847" }}>{b.readTime}</span>
                  <div
                    className="flex items-center gap-1.5 hud-label transition-colors"
                    style={{ color: rankColors[i] }}
                  >
                    READ SCROLL
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Medium CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1" style={{ background: "rgba(72,72,71,0.3)" }} />
          <a
            href="https://medium.com/@vaid77167"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 transition-all hud-label"
            style={{ background: "#131313", border: "1px solid rgba(72,72,71,0.3)", color: "#adaaaa" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ff8f70"; e.currentTarget.style.color = "#ff8f70"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(72,72,71,0.3)"; e.currentTarget.style.color = "#adaaaa"; }}
          >
            <span className="material-symbols-outlined text-sm">article</span>
            VIEW ALL ON MEDIUM
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
          <div className="h-px flex-1" style={{ background: "rgba(72,72,71,0.3)" }} />
        </motion.div>
      </div>
    </section>
  );
}
