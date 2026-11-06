"use client";

import { useEffect, useRef } from "react";

export default function MagneticName() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Particle = {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      size: number;
    };

    let particles: Particle[] = [];
    let pointer = { x: -1000, y: -1000 };
    let animation = 0;
    let width = 0;
    let height = 0;
    let startTime = performance.now();

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = Math.ceil(width);
      off.height = Math.ceil(height);

      const octx = off.getContext("2d");
      if (!octx) return;

      octx.fillStyle = "#ffffff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";

      const fontSize = Math.min(width / 9, 100);
      octx.font = `bold ${fontSize}px Arial`;
      octx.fillText("Bharath Kumar L.", width / 2, height / 2);

      const pixels = octx.getImageData(
        0, 0, off.width, off.height
      ).data;

      particles = [];

      for (let y = 0; y < off.height; y += 3) {
        for (let x = 0; x < off.width; x += 3) {
          const i = (y * off.width + x) * 4;

          if (pixels[i + 3] > 100) {
            const ox = x;
            const oy = y;

            // Start scattered, then assemble automatically.
            particles.push({
              x: ox + (Math.random() - 0.5) * 220,
              y: oy + (Math.random() - 0.5) * 150,
              ox,
              oy,
              vx: 0,
              vy: 0,
              size: 1 + Math.random() * 0.8,
            });
          }
        }
      }

      startTime = performance.now();
    };

    const movePointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const leavePointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    canvas.addEventListener("pointermove", movePointer);
    canvas.addEventListener("pointerdown", movePointer);
    canvas.addEventListener("pointerleave", leavePointer);
    canvas.addEventListener("pointercancel", leavePointer);

    const animate = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      const introProgress = Math.min(
        (now - startTime) / 5000,
        1
      );

      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        // Touch and mouse interaction.
        const radius = 125;

        if (distance < radius && distance > 0) {
          const force = (radius - distance) / radius;
          const push = force * 3.5;

          p.vx += (dx / distance) * push;
          p.vy += (dy / distance) * push;
        }

        // Particles naturally return to their original positions.
        const spring = 0.018;

        p.vx += (p.ox - p.x) * spring;
        p.vy += (p.oy - p.y) * spring;

        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Blue glow near the pointer.
        const glow = Math.max(
          0,
          1 - distance / radius
        );

        const blue = glow > 0.15;

        ctx.fillStyle = blue
          ? `rgba(0,190,255,${0.65 + glow * 0.35})`
          : "rgba(210,230,255,0.9)";

        ctx.shadowBlur = blue ? 12 * glow : 3;
        ctx.shadowColor = "#00aaff";

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.size + glow * 1.2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      animation = requestAnimationFrame(animate);
    };

    createParticles();
    animation = requestAnimationFrame(animate);

    const observer = new ResizeObserver(createParticles);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animation);
      observer.disconnect();

      canvas.removeEventListener("pointermove", movePointer);
      canvas.removeEventListener("pointerdown", movePointer);
      canvas.removeEventListener("pointerleave", leavePointer);
      canvas.removeEventListener("pointercancel", leavePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[180px] md:h-[240px] touch-pan-y"
      aria-label="Interactive particle name animation"
    />
  );
}