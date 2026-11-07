"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  size: number;
};

export default function MagneticName() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let startTime = performance.now();

    const pointer = { x: -1000, y: -1000 };

    const createParticles = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      if (!width || !height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = Math.round(width);
      off.height = Math.round(height);

      const offCtx = off.getContext("2d");
      if (!offCtx) return;

      const name = "Bharath Kumar L.";
      offCtx.fillStyle = "#ffffff";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";

      let fontSize = Math.min(100, height * 0.55);
      offCtx.font = `bold ${fontSize}px Arial`;

      const measured = offCtx.measureText(name).width;
      if (measured > width * 0.92) {
        fontSize *= (width * 0.92) / measured;
      }

      offCtx.font = `bold ${fontSize}px Arial`;
      offCtx.fillText(name, width / 2, height / 2);

      const pixels = offCtx.getImageData(
        0, 0, off.width, off.height
      ).data;

      particles = [];

      const step = width < 600 ? 2 : 3;

      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          const index = (y * off.width + x) * 4;

          if (pixels[index + 3] > 0) {
            particles.push({
              x: x + (Math.random() - 0.5) * 100,
              y: y + (Math.random() - 0.5) * 100,
              ox: x,
              oy: y,
              vx: 0,
              vy: 0,
              size: 1.5 + Math.random() * 0.8,
            });
          }
        }
      }

      startTime = performance.now();
    };

    const movePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const leavePointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const animate = (now: number) => {
      ctx.clearRect(0, 0, width, height);


      if (window.innerWidth < 768) {
  ctx.save();
  ctx.font = "bold 34px Arial";
  ctx.fillStyle = "#bfeaff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Bharath Kumar L.", width / 2, height / 2);
  ctx.restore();
  return;
}

      const intro = Math.min(1, (now - startTime) / 1800);
      const attraction = 0.018;

      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const radius = 125;

        // Touch and mouse ripple effect
        if (distance < radius && distance > 0) {
          const force = (radius - distance) / radius;
          const push = force * 3.5;

          p.vx += (dx / distance) * push;
          p.vy += (dy / distance) * push;
        }

        // Return particles to their original positions
        p.vx += (p.ox - p.x) * attraction;
        p.vy += (p.oy - p.y) * attraction;

        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        const glow = Math.max(0, 1 - distance / radius);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + glow * 1.2, 0, Math.PI * 2);

        ctx.fillStyle = glow > 0.1
          ? `rgba(0, 180, 255, ${0.8 + glow * 0.2})`
          : "rgba(190, 225, 255, 0.95)";

        ctx.shadowBlur = glow > 0.1 ? 12 : 4;
        ctx.shadowColor = "#00aaff";
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      frame = requestAnimationFrame(animate);
    };

    createParticles();

    const observer = new ResizeObserver(createParticles);
    observer.observe(canvas);

    canvas.addEventListener("pointermove", movePointer);
    canvas.addEventListener("pointerdown", movePointer);
    canvas.addEventListener("pointerleave", leavePointer);
    canvas.addEventListener("pointercancel", leavePointer);

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();

      canvas.removeEventListener("pointermove", movePointer);
      canvas.removeEventListener("pointerdown", movePointer);
      canvas.removeEventListener("pointerleave", leavePointer);
      canvas.removeEventListener("pointercancel", leavePointer);
    };
  }, []);

return (
  <div className="w-full h-[220px] md:h-[240px] flex items-center justify-center">
    <h1 className="block md:hidden text-center text-4xl font-bold text-[#bfeaff] leading-tight">
      Bharath Kumar L.
    </h1>

    <canvas
      ref={canvasRef}
      className="hidden md:block w-full h-[240px] touch-none"
      aria-label="Interactive particle animation displaying Bharath Kumar L."
    />
  </div>
);
}