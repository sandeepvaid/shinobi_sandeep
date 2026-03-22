"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 overflow-hidden energy-gradient"
    >
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center">
        <span className="section-watermark">RESILIENCE</span>
      </div>

      {/* Energy trails */}
      <div className="absolute bottom-0 right-0 w-full h-2/3 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "rgba(255,143,112,0.1)" }} />
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[100px]" style={{ background: "rgba(0,189,253,0.1)" }} />
      </div>

      {/* Corner decoration */}
      <div className="absolute top-24 right-12 md:right-24 hidden lg:block pointer-events-none">
        <div className="w-64 h-64 rounded-full border opacity-[0.06]" style={{ borderColor: "#ffffff" }} />
        <div className="absolute inset-8 rounded-full border animate-pulse opacity-[0.08]" style={{ borderColor: "#ffffff" }} />
      </div>

      {/* HUD bottom-left */}
      <div className="absolute bottom-10 left-16 hidden lg:flex flex-col gap-2 opacity-30 pointer-events-none">
        <div className="flex items-center gap-4">
          <span className="hud-label" style={{ color: "#adaaaa" }}>System_Stability</span>
          <div className="flex gap-1">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="w-1 h-3" style={{ background: i < 5 ? "#00bdfd" : "#484847" }} />
            ))}
          </div>
        </div>
        <span className="hud-label" style={{ color: "#adaaaa" }}>BUILD: PRODUCTION_READY</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Status label */}
          <div className="flex items-center gap-3">
            <span className="block w-12 h-0.5" style={{ background: "#00bdfd" }} />
            <span className="hud-label" style={{ color: "#00bdfd" }}>STATUS: ACTIVE_OPERATIVE</span>
          </div>

          {/* Name */}
          <div>
            <h1
              className="font-black tracking-tighter uppercase leading-[0.88] ink-glow"
              style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3.5rem, 10vw, 8rem)", color: "#ffffff" }}
            >
              SANDEEP<br />
              <span style={{ color: "#ff8f70", fontStyle: "italic" }}>VAID</span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl leading-relaxed max-w-xl pl-5 py-2"
            style={{
              color: "#adaaaa",
              borderLeft: "2px solid rgba(255,143,112,0.35)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Software Developer · Building{" "}
            <span className="font-semibold underline" style={{ color: "#ffffff", textDecorationColor: "rgba(0,189,253,0.5)" }}>
              scalable systems
            </span>{" "}
            with precision and resilience.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 py-2">
            {[
              { val: "100M+", lbl: "Records Processed" },
              { val: "50K/s", lbl: "Requests / Second" },
              { val: "80%", lbl: "Ops Automated" },
            ].map((s) => (
              <div key={s.lbl} className="flex flex-col gap-1">
                <span
                  className="text-3xl font-black tracking-tighter"
                  style={{ fontFamily: "Epilogue, sans-serif", color: "#ff8f70" }}
                >
                  {s.val}
                </span>
                <span className="hud-label" style={{ color: "#adaaaa" }}>{s.lbl}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#missions"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(0,189,253,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 font-black uppercase tracking-tight overflow-hidden group"
              style={{
                fontFamily: "Epilogue, sans-serif",
                background: "linear-gradient(135deg, #ff8f70, #ff7852)",
                color: "#5c1300",
              }}
            >
              <span className="relative z-10">ENTER THE JOURNEY</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: "#00bdfd" }} />
            </motion.a>

            <motion.a
              href="#arsenal"
              whileHover={{ borderColor: "#00bdfd", color: "#ffffff" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 font-black uppercase tracking-tight border flex items-center gap-2 transition-all"
              style={{ fontFamily: "Epilogue, sans-serif", color: "#ffffff", borderColor: "rgba(72,72,71,0.4)" }}
            >
              VIEW ARSENAL
              <span className="material-symbols-outlined text-base" style={{ color: "#ff8f70" }}>east</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="hud-label" style={{ color: "#484847" }}>SCROLL_DOWN</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <span className="material-symbols-outlined text-sm" style={{ color: "#ff8f70" }}>expand_more</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
