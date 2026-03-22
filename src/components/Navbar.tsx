"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "ORIGIN", href: "#origin" },
  { label: "MISSIONS", href: "#missions" },
  { label: "ARSENAL", href: "#arsenal" },
  { label: "SCROLLS", href: "#scrolls" },
  { label: "SUMMON", href: "#summon" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("origin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(14,14,14,0.92)" : "rgba(14,14,14,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(72,72,71,0.2)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.6)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-20 max-w-screen-xl mx-auto">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <span
              className="text-xl font-black tracking-tighter uppercase"
              style={{
                fontFamily: "Epilogue, sans-serif",
                color: "#ff8f70",
                textShadow: "0 0 10px rgba(255,143,112,0.5)",
              }}
            >
              SHINOBI_
            </span>
            <span
              className="text-xl font-black tracking-tighter uppercase text-white"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              DEV
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-black tracking-tighter uppercase text-sm transition-all duration-200"
                style={{
                  fontFamily: "Epilogue, sans-serif",
                  color: active === l.href.replace("#", "") ? "#ff8f70" : "#6b7280",
                  borderBottom: active === l.href.replace("#", "") ? "2px solid #ff8f70" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://drive.google.com/file/d/1gkwnmeqDodep2JGRj2vBPwzvTjAAdO4-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(255,143,112,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 font-black uppercase text-sm tracking-tight"
              style={{
                fontFamily: "Epilogue, sans-serif",
                background: "linear-gradient(135deg, #ff8f70, #ff7852)",
                color: "#480d00",
              }}
            >
              GET SCROLL
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[80px] z-40 md:hidden"
            style={{ background: "rgba(14,14,14,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(72,72,71,0.2)" }}
          >
            <div className="flex flex-col p-6 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 font-black uppercase text-sm tracking-tight transition-colors"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    color: active === l.href.replace("#", "") ? "#ff8f70" : "#6b7280",
                    background: active === l.href.replace("#", "") ? "rgba(255,143,112,0.08)" : "transparent",
                    borderLeft: active === l.href.replace("#", "") ? "2px solid #ff8f70" : "2px solid transparent",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1gkwnmeqDodep2JGRj2vBPwzvTjAAdO4-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-3 font-black uppercase text-sm text-center"
                style={{ fontFamily: "Epilogue, sans-serif", background: "linear-gradient(135deg, #ff8f70, #ff7852)", color: "#480d00" }}
              >
                GET SCROLL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side social bar — desktop only */}
      <aside
        className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-5 p-4"
        style={{
          background: "#131313",
          borderLeft: "3px solid #ff7072",
          borderRadius: "4px",
          boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex flex-col items-center gap-1 mb-1">
          <span className="hud-label" style={{ color: "#ff7072" }}>SCROLL</span>
        </div>
        {[
          { label: "GITHUB", href: "https://github.com/sandeepvaid", icon: "code" },
          { label: "LINKED", href: "https://www.linkedin.com/in/sandeep-vaid623/", icon: "group" },
          { label: "MEDIUM", href: "https://medium.com/@vaid77167", icon: "history_edu" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 p-2 rounded transition-all duration-200 group"
            style={{ color: "#6b7280" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff7072";
              e.currentTarget.style.background = "rgba(255,112,114,0.1)";
              e.currentTarget.style.transform = "translateX(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#6b7280";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <span className="material-symbols-outlined text-base">{s.icon}</span>
            <span className="hud-label text-[8px]">{s.label}</span>
          </a>
        ))}
      </aside>

      {/* Material Symbols font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </>
  );
}
