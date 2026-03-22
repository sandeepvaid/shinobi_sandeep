"use client";
import { useEffect, useRef } from "react";

/* Kunai SVG string — rendered as innerHTML for zero React overhead */
const kunaiSVG = (color: string, size: number) => `
<svg width="${size}" height="${size * 3.8}" viewBox="0 0 20 76" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- blade tip -->
  <polygon points="10,0 3,28 17,28" fill="${color}" opacity="0.95"/>
  <line x1="10" y1="2" x2="10" y2="27" stroke="rgba(255,255,255,0.6)" stroke-width="0.8"/>
  <!-- guard -->
  <rect x="2" y="28" width="16" height="4" rx="1" fill="${color}" opacity="0.85"/>
  <rect x="0" y="29" width="4" height="2" rx="0.5" fill="${color}" opacity="0.6"/>
  <rect x="16" y="29" width="4" height="2" rx="0.5" fill="${color}" opacity="0.6"/>
  <!-- handle -->
  <rect x="8" y="32" width="4" height="22" rx="1" fill="${color}" opacity="0.55"/>
  <rect x="7" y="35" width="6" height="1.5" rx="0.5" fill="${color}" opacity="0.35"/>
  <rect x="7" y="39" width="6" height="1.5" rx="0.5" fill="${color}" opacity="0.35"/>
  <rect x="7" y="43" width="6" height="1.5" rx="0.5" fill="${color}" opacity="0.35"/>
  <rect x="7" y="47" width="6" height="1.5" rx="0.5" fill="${color}" opacity="0.35"/>
  <!-- ring -->
  <circle cx="10" cy="58" r="4" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.7"/>
  <circle cx="10" cy="58" r="1.5" fill="${color}" opacity="0.5"/>
  <!-- rope tail -->
  <path d="M10 62 Q14 66 10 70 Q6 74 10 76" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.45" stroke-linecap="round"/>
</svg>`;

export default function ShinobiCursor() {
  const mainRef   = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const TRAIL_LEN = 6;

  useEffect(() => {
    /* ── inject cursor: none globally ─────────────────── */
    const style = document.createElement("style");
    style.innerHTML = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    /* ── state ─────────────────────────────────────────── */
    let mx = -300, my = -300;
    let rx = -300, ry = -300;          // ring lags behind
    let angle = -45;
    let prevX = -300, prevY = -300;
    let hovering = false, clicking = false;
    let trailIdx = 0;
    let trailTimer: ReturnType<typeof setInterval>;
    let raf: number;

    /* ── apply kunai SVG once ──────────────────────────── */
    if (mainRef.current) {
      mainRef.current.innerHTML = kunaiSVG("#ff8f70", 22);
    }

    /* ── ring dots ─────────────────────────────────────── */
    const setRingState = () => {
      if (!ringRef.current) return;
      const c = hovering ? "#00bdfd" : "#ff8f70";
      const s = hovering ? 52 : 38;
      ringRef.current.style.width  = `${s}px`;
      ringRef.current.style.height = `${s}px`;
      ringRef.current.style.borderColor = hovering
        ? "rgba(0,189,253,0.55)"
        : "rgba(255,143,112,0.4)";
      ringRef.current.style.boxShadow = hovering
        ? "0 0 14px rgba(0,189,253,0.3)"
        : "0 0 8px rgba(255,143,112,0.15)";
      // update tick marks color
      ringRef.current.querySelectorAll<HTMLSpanElement>(".ring-tick").forEach((t) => {
        t.style.background = c;
      });
    };

    /* ── animation loop ────────────────────────────────── */
    const loop = () => {
      // ring lerp
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;

      if (mainRef.current) {
        const scale = clicking ? 0.78 : hovering ? 1.22 : 1;
        mainRef.current.style.transform =
          `translate(-50%,-50%) rotate(${angle}deg) scale(${scale})`;
        mainRef.current.style.left = `${mx}px`;
        mainRef.current.style.top  = `${my}px`;
        mainRef.current.style.filter = clicking
          ? "drop-shadow(0 0 10px #fff) drop-shadow(0 0 18px #ff8f70)"
          : hovering
          ? "drop-shadow(0 0 8px #00bdfd) drop-shadow(0 0 14px rgba(0,189,253,0.4))"
          : "drop-shadow(0 0 5px rgba(255,143,112,0.7))";
        // swap color on hover/click
        const col = clicking ? "#ffffff" : hovering ? "#00bdfd" : "#ff8f70";
        mainRef.current.innerHTML = kunaiSVG(col, 22);
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top  = `${ry}px`;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    /* ── mouse events ──────────────────────────────────── */
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        angle = Math.atan2(dy, dx) * (180 / Math.PI) - 45;
      }
      mx = e.clientX;
      my = e.clientY;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      hovering = !!el.closest("a,button,[role='button'],input,textarea,select,label");
      setRingState();
    };

    const onDown = () => { clicking = true; };
    const onUp   = () => { clicking = false; };

    /* ── trail spawner ─────────────────────────────────── */
    let lastVX = 0, lastVY = 0;
    trailTimer = setInterval(() => {
      const speed = Math.hypot(mx - prevX + lastVX, my - prevY + lastVY);
      lastVX = mx - prevX; lastVY = my - prevY;
      if (speed < 1.5) return;

      const el = trailsRef.current[trailIdx % TRAIL_LEN];
      if (!el) return;

      el.style.left    = `${mx}px`;
      el.style.top     = `${my}px`;
      el.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
      el.style.opacity = "0.55";
      el.innerHTML     = kunaiSVG("#ff8f70", 14);

      // fade out
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.35s ease-out";
        el.style.opacity    = "0";
      });

      trailIdx++;
    }, 55);

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mouseover",  onOver,  { passive: true });
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(trailTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Trail ghost blades */}
      {Array.from({ length: TRAIL_LEN }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailsRef.current[i] = el; }}
          style={{
            position: "fixed",
            left: -300,
            top:  -300,
            opacity: 0,
            pointerEvents: "none",
            zIndex: 99997,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Outer lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          left: -300,
          top:  -300,
          width: 38,
          height: 38,
          transform: "translate(-50%,-50%)",
          border: "1px solid rgba(255,143,112,0.4)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.18s, height 0.18s, border-color 0.18s",
          willChange: "transform",
        }}
      >
        {/* 4 cross-hair ticks */}
        {[0, 90, 180, 270].map((deg) => (
          <span
            key={deg}
            className="ring-tick"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "block",
              width: 5,
              height: 1,
              background: "#ff8f70",
              transformOrigin: "left center",
              transform: `rotate(${deg}deg) translateX(19px) translateY(-50%)`,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      {/* Main kunai — rendered & updated via ref */}
      <div
        ref={mainRef}
        style={{
          position: "fixed",
          left: -300,
          top:  -300,
          pointerEvents: "none",
          zIndex: 100000,
          willChange: "transform, filter",
        }}
      />
    </>
  );
}
