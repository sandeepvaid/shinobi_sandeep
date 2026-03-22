"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="origin" className="relative overflow-hidden" style={{ background: "#000000" }}>

      {/* ── Hero arc ──────────────────────────────────────────── */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Moon circles — scaled for mobile */}
        <div
          className="absolute pointer-events-none rounded-full opacity-[0.06] hidden sm:block"
          style={{ top: "5%", right: "4%", width: "min(480px, 55vw)", height: "min(480px, 55vw)", border: "1px solid #ffffff" }}
        />
        <div
          className="absolute pointer-events-none rounded-full animate-pulse opacity-[0.08] hidden sm:block"
          style={{ top: "12%", right: "12%", width: "min(360px, 40vw)", height: "min(360px, 40vw)", border: "1px solid #ffffff" }}
        />

        {/* Watermark */}
        <span className="section-watermark top-12 left-4 md:left-8 hidden sm:block">ORIGIN</span>

        {/* Main grid */}
        <div
          ref={ref}
          className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-24 md:py-32"
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div
              className="inline-flex items-center gap-3 px-4 py-2 self-start"
              style={{ background: "rgba(255,112,114,0.1)", borderLeft: "2px solid #ff7072" }}
            >
              <span className="hud-label" style={{ color: "#ff7072" }}>Introduction Arc</span>
            </div>

            <h2
              className="font-black tracking-tighter uppercase leading-[0.88]"
              style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(2.5rem, 10vw, 5.5rem)" }}
            >
              ORIGIN{" "}
              <span className="italic" style={{ color: "#ff8f70", textShadow: "0 0 16px rgba(255,143,112,0.45)" }}>
                STORY
              </span>{" "}
              ARC
            </h2>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#adaaaa" }}>
              Engineering is not just writing code; it is a{" "}
              <span
                className="font-semibold underline"
                style={{ color: "#ffffff", textDecorationColor: "#ff8f70", textUnderlineOffset: "4px" }}
              >
                way of life
              </span>
              . My philosophy is forged in the fires of two legendary spirits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "bolt",
                  title: "Perseverance",
                  color: "#ff8f70",
                  text: "Inspired by the Uzumaki spirit — I believe in \"Never Give Up\". Debugging a 3AM production failure is my trial of fire.",
                },
                {
                  icon: "flare",
                  title: "Precision",
                  color: "#00bdfd",
                  text: "Like sharpened blades, my code is refined through iteration. Every function is a breathing style, executed with lethal accuracy.",
                },
              ].map((p) => (
                <div key={p.title} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm" style={{ color: p.color }}>{p.icon}</span>
                    <span className="hud-label" style={{ color: p.color }}>{p.title}</span>
                  </div>
                  <p
                    className="text-sm leading-relaxed pl-4"
                    style={{ color: "#adaaaa", borderLeft: "1px solid rgba(72,72,71,0.3)" }}
                  >
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — artifact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Outer wrapper gives space for the education tag on larger screens */}
            <div className="relative pb-12 sm:pb-14">
              <div
                className="clip-asymmetric p-6 md:p-8 relative z-10"
                style={{ background: "#201f1f", border: "1px solid rgba(72,72,71,0.2)", minWidth: "min(280px, 90vw)" }}
              >
                <div className="flex justify-between items-center mb-5">
                  <span className="hud-label" style={{ color: "#adaaaa" }}>TRAINING_LOG</span>
                  <span className="hud-label" style={{ color: "#ff7072" }}>LVL. 99</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="font-black tracking-tighter"
                    style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 12vw, 5rem)", lineHeight: 1, color: "#ff8f70" }}
                  >
                    600+
                  </span>
                  <span className="hud-label" style={{ color: "#adaaaa" }}>LeetCode<br />Solved</span>
                </div>
                <div className="w-full h-1 mb-5" style={{ background: "#1a1919" }}>
                  <div className="h-full w-4/5" style={{ background: "#ff8f70", boxShadow: "0 0 10px #ff8f70" }} />
                </div>
                <p className="text-sm italic" style={{ color: "#adaaaa" }}>
                  "A shinobi&apos;s true power is not in the scroll, but in the repetition of the blade."
                </p>
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 blur-2xl opacity-[0.07] rounded-full pointer-events-none" style={{ background: "#ff8f70" }} />

              {/* Education tag — sits below card, no absolute overlap issue */}
              <div
                className="absolute bottom-0 right-0 px-4 md:px-5 py-3 md:py-4 z-20 flex flex-col gap-1"
                style={{
                  background: "#262626",
                  border: "1px solid rgba(72,72,71,0.3)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}
              >
                <span className="hud-label" style={{ color: "#ff8f70" }}>B.TECH GRADUATE</span>
                <span className="font-bold uppercase text-xs md:text-sm" style={{ fontFamily: "Epilogue, sans-serif", color: "#ffffff" }}>
                  BTU Kota · 2022
                </span>
                <div className="flex gap-1.5 mt-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full opacity-50" style={{ background: i === 3 ? "#ff8f70" : "#ffffff" }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Japanese subtitle */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-center px-4 pointer-events-none w-full">
          <p
            className="font-bold text-sm md:text-lg truncate"
            style={{ color: "#ffed00", textShadow: "0 2px 6px rgba(0,0,0,0.9)", fontFamily: "Inter, sans-serif" }}
          >
            「俺の忍道、それは決して曲げないことだ！」
          </p>
          <p
            className="hud-label mt-1 inline-block px-3 py-1 text-[9px] md:text-[10px]"
            style={{ color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            MY NINJA WAY: TO NEVER BREAK MY WORD
          </p>
        </div>
      </div>

      {/* ── The Forge narrative ───────────────────────────────── */}
      <div className="py-14 md:py-20" style={{ background: "#131313" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="relative pt-6">
              <h3
                className="font-bold uppercase pb-2 mb-4 w-fit"
                style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(1.5rem, 5vw, 2rem)", borderBottom: "4px solid #ff8f70" }}
              >
                The Forge
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#adaaaa" }}>
                Born in the academic heartland of BTU Kota, my engineering path was defined not by easy wins, but by the relentless pursuit of logical clarity. I spent nights deconstructing algorithms until they became as intuitive as muscle memory.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LeetCode card */}
              <div className="p-6 md:p-8 flex flex-col justify-center" style={{ background: "#0e0e0e", border: "1px solid rgba(72,72,71,0.15)" }}>
                <span className="hud-label mb-2" style={{ color: "#00bdfd" }}>Training Stats</span>
                <h4 className="font-bold uppercase mb-3" style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}>
                  The LeetCode Gauntlet
                </h4>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#adaaaa" }}>
                  600+ problems — each green checkmark a kunai hit.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { tier: "Easy", label: "Foundation", color: "#ffffff" },
                    { tier: "Med",  label: "Tactical",   color: "#ff8f70" },
                    { tier: "Hard", label: "Elite",      color: "#00bdfd" },
                  ].map((t) => (
                    <div key={t.tier} className="p-2.5" style={{ background: "#1a1919" }}>
                      <div className="font-bold text-base md:text-lg" style={{ color: t.color, fontFamily: "Epilogue, sans-serif" }}>{t.tier}</div>
                      <div className="hud-label text-[8px] md:text-[10px]" style={{ color: "#484847" }}>{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Combat metrics */}
              <div className="p-6 md:p-8 flex flex-col justify-center" style={{ background: "#1a1919", border: "1px solid rgba(72,72,71,0.1)" }}>
                <span className="hud-label mb-4" style={{ color: "#ff8f70" }}>Combat Metrics</span>
                {[
                  { label: "ETL Pipeline Scale",       val: "100M+",  color: "#ff8f70" },
                  { label: "Event Server Throughput",  val: "50K/s",  color: "#00bdfd" },
                  { label: "Workload Reduction",       val: "80%",    color: "#ff7072" },
                ].map((m) => (
                  <div key={m.label} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(72,72,71,0.15)" }}>
                    <span className="text-xs" style={{ color: "#adaaaa" }}>{m.label}</span>
                    <span className="font-bold text-sm" style={{ fontFamily: "Epilogue, sans-serif", color: m.color }}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
