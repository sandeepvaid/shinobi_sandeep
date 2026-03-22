"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12 px-6 md:px-16"
      style={{ background: "#0e0e0e", borderTop: "1px solid rgba(72,72,71,0.2)" }}
    >
      {/* Decorative corner blade */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-full h-full border-r border-b translate-x-12 translate-y-12 rotate-45"
          style={{ borderColor: "#ff8f70" }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span
            className="text-lg font-black tracking-tighter uppercase"
            style={{ fontFamily: "Epilogue, sans-serif", color: "#ff8f70", textShadow: "0 0 8px rgba(255,143,112,0.4)" }}
          >
            SHINOBI_DEV
          </span>
          <span className="hud-label" style={{ color: "#484847" }}>// SANDEEP VAID</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: "#00bdfd" }} />
          <span className="hud-label" style={{ color: "#484847" }}>ACTIVE_OPERATIVE · 2024</span>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 transition-all hud-label"
          style={{ border: "1px solid rgba(72,72,71,0.3)", color: "#484847" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ff8f70"; e.currentTarget.style.color = "#ff8f70"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(72,72,71,0.3)"; e.currentTarget.style.color = "#484847"; }}
        >
          <span className="material-symbols-outlined text-sm">keyboard_double_arrow_up</span>
          RETURN_TO_TOP
        </motion.button>
      </div>
    </footer>
  );
}
