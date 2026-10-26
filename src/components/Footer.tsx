"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-10 md:py-12 px-5 md:px-16 pb-24 md:pb-12"
      style={{ background: "#0e0e0e", borderTop: "1px solid rgba(72,72,71,0.2)" }}
    >
      {/* Decorative corner blade */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-full h-full border-r border-b translate-x-12 translate-y-12 rotate-45"
          style={{ borderColor: "var(--c-accent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span
            className="text-lg font-black tracking-tighter uppercase"
            style={{ fontFamily: "Epilogue, sans-serif", color: "var(--c-accent)", textShadow: "0 0 8px rgba(var(--c-accent-rgb),0.4)" }}
          >
            SHINOBI_DEV
          </span>
          <span className="hud-label" style={{ color: "#484847" }}>// SANDEEP VAID</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--c-blue)" }} />
          <span className="hud-label" style={{ color: "#484847" }}>ACTIVE_OPERATIVE · 2024</span>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 px-4 py-2 transition-all hud-label"
          style={{ border: "1px solid rgba(72,72,71,0.3)", color: "#484847" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--c-accent)"; e.currentTarget.style.color = "var(--c-accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(72,72,71,0.3)"; e.currentTarget.style.color = "#484847"; }}
        >
          <span className="material-symbols-outlined text-sm">keyboard_double_arrow_up</span>
          RETURN_TO_TOP
        </motion.button>
      </div>
    </footer>
  );
}
