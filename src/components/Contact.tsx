"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = "service_jjheqv5";
const EMAILJS_TEMPLATE_ID = "template_1i1npic";
const EMAILJS_PUBLIC_KEY  = "FOjHaASn5PuP8rJ-8";
// ────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef    = useRef<HTMLFormElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });

  const [status, setStatus]   = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const socials = [
    { label: "GITHUB",   icon: "code",        href: "https://github.com/sandeepvaid",                      color: "#ff8f70" },
    { label: "LINKEDIN", icon: "group",        href: "https://www.linkedin.com/in/sandeep-vaid623/",        color: "#00bdfd" },
    { label: "MEDIUM",   icon: "history_edu",  href: "https://medium.com/@vaid77167",                       color: "#ff7072" },
    { label: "EMAIL",    icon: "mail",         href: `mailto:${personalInfo.email}`,                        color: "#facc15" },
  ];

  return (
    <section id="summon" ref={sectionRef} className="relative overflow-hidden py-16 md:py-24 pb-28 md:pb-24" style={{ background: "#000000" }}>
      <span className="section-watermark top-8 left-4" style={{ opacity: 0.025 }}>SUMMON</span>

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(255,143,112,0.06)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(0,189,253,0.06)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="hud-label block mb-3" style={{ color: "#00bdfd" }}>Open to Collaboration</span>
          <h2
            className="font-black uppercase tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.9 }}
          >
            DEPLOY{" "}
            <span style={{ color: "#ff8f70", textShadow: "0 0 24px rgba(255,143,112,0.4)" }}>SUMMON</span>
          </h2>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "#adaaaa" }}>
            Ready to forge an alliance? Send your mission briefing — I respond within 24 hours.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00bdfd" }} />
            <span className="hud-label" style={{ color: "#adaaaa" }}>STATUS: AVAILABLE_FOR_MISSIONS</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* ── Form ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            {/* Success state */}
            {status === "success" ? (
              <div
                className="h-full flex flex-col items-center justify-center gap-5 p-12 text-center"
                style={{ background: "#1a1919", border: "1px solid rgba(0,189,253,0.2)" }}
              >
                <span className="material-symbols-outlined text-5xl" style={{ color: "#00bdfd" }}>check_circle</span>
                <h3 className="font-black uppercase text-2xl" style={{ fontFamily: "Epilogue, sans-serif" }}>SCROLL SENT!</h3>
                <p className="text-sm" style={{ color: "#adaaaa" }}>Your message has been transmitted. I&apos;ll respond within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="hud-label px-5 py-2 transition-colors mt-2"
                  style={{ border: "1px solid rgba(72,72,71,0.4)", color: "#adaaaa" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ff8f70"; e.currentTarget.style.color = "#ff8f70"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(72,72,71,0.4)"; e.currentTarget.style.color = "#adaaaa"; }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-5 md:p-8"
                style={{ background: "#1a1919", border: "1px solid rgba(72,72,71,0.2)" }}
              >
                <div className="px-3 py-1 self-start" style={{ background: "rgba(0,189,253,0.1)", borderLeft: "2px solid #00bdfd" }}>
                  <span className="hud-label" style={{ color: "#00bdfd" }}>Mission Brief</span>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="hud-label" style={{ color: "#484847" }}>OPERATIVE_NAME</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 text-sm outline-none transition-all"
                    style={{ background: "#131313", border: "1px solid rgba(72,72,71,0.3)", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#ff8f70")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(72,72,71,0.3)")}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="hud-label" style={{ color: "#484847" }}>COMM_CHANNEL</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 text-sm outline-none transition-all"
                    style={{ background: "#131313", border: "1px solid rgba(72,72,71,0.3)", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#ff8f70")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(72,72,71,0.3)")}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="hud-label" style={{ color: "#484847" }}>MISSION_OBJECTIVE</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your mission..."
                    value={formData.message}
                    onChange={handleChange}
                    className="px-4 py-3 text-sm outline-none resize-none transition-all"
                    style={{ background: "#131313", border: "1px solid rgba(72,72,71,0.3)", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#ff8f70")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(72,72,71,0.3)")}
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-center gap-2 px-4 py-2 text-sm" style={{ background: "rgba(255,112,114,0.1)", border: "1px solid rgba(255,112,114,0.3)", color: "#ff7072" }}>
                    <span className="material-symbols-outlined text-sm">error</span>
                    Transmission failed — please try again or email directly.
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.02, boxShadow: "0 0 24px rgba(255,143,112,0.35)" } : {}}
                  whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                  className="py-4 font-black uppercase tracking-tighter flex items-center justify-center gap-2 transition-opacity"
                  style={{
                    fontFamily: "Epilogue, sans-serif",
                    background: "linear-gradient(135deg, #ff8f70, #ff7852)",
                    color: "#5c1300",
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span className="material-symbols-outlined text-base animate-spin">autorenew</span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-base">send</span>
                      TRANSMIT SCROLL
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* ── Right panel ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Direct contact */}
            <div className="p-5 md:p-7" style={{ background: "#1a1919", border: "1px solid rgba(72,72,71,0.2)" }}>
              <span className="hud-label block mb-5" style={{ color: "#ff8f70" }}>Direct Lines</span>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined" style={{ color: "#ff8f70" }}>mail</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm transition-colors"
                    style={{ color: "#adaaaa" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ff8f70")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#adaaaa")}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined" style={{ color: "#00bdfd" }}>location_on</span>
                  <span className="text-sm" style={{ color: "#adaaaa" }}>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social grid */}
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 transition-all"
                  style={{ background: "#131313", border: "1px solid rgba(72,72,71,0.2)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background    = "#1a1919";
                    e.currentTarget.style.borderColor   = s.color + "50";
                    e.currentTarget.style.boxShadow     = `0 0 16px ${s.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background  = "#131313";
                    e.currentTarget.style.borderColor = "rgba(72,72,71,0.2)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: s.color }}>{s.icon}</span>
                  <span className="hud-label" style={{ color: "#adaaaa" }}>{s.label}</span>
                </a>
              ))}
            </div>

            {/* Japanese quote */}
            <div className="p-5" style={{ background: "#0e0e0e", borderLeft: "2px solid rgba(72,72,71,0.3)" }}>
              <p className="text-base font-bold mb-1" style={{ color: "#ffed00", fontFamily: "Inter, sans-serif" }}>
                「準備完了。次の任務へ」
              </p>
              <p className="hud-label" style={{ color: "#484847" }}>READY_FOR_DEPLOYMENT</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
