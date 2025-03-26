"use client";

import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";

interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 50, // Reduced default quantity
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const rafID = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(0);
  const frameInterval = 1000 / 30; // Target 30fps

  // Initialize canvas and particles
  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d", { alpha: false });
      initCanvas();
      animate();
    }

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (rafID.current) cancelAnimationFrame(rafID.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mouse movement handler with throttling
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = e.clientX - rect.left - w / 2;
      const y = e.clientY - rect.top - h / 2;
      mouse.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const initCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) return;

    const dpr = window.devicePixelRatio || 1;
    canvasSize.current.w = canvasContainerRef.current.offsetWidth;
    canvasSize.current.h = canvasContainerRef.current.offsetHeight;

    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;
    context.current.scale(dpr, dpr);

    // Initialize particles
    circles.current = Array.from({ length: quantity }, () => ({
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 1.5 + size,
      alpha: 0,
      targetAlpha: Math.random() * 0.6 + 0.1,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
    }));
  };

  const animate = (timestamp: number = 0) => {
    // Throttle to ~30fps
    if (timestamp - lastFrameTime.current < frameInterval) {
      rafID.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = timestamp;

    if (!context.current) {
      rafID.current = requestAnimationFrame(animate);
      return;
    }

    // Clear canvas with opaque background
    context.current.fillStyle = "#0A0A0A";
    context.current.fillRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    // Draw particles
    const rgb = [255, 255, 255]; // White particles
    circles.current.forEach((circle, i) => {
      // Update position
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      
      // Apply mouse magnetism
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      // Draw particle
      context.current!.save();
      context.current!.translate(circle.translateX, circle.translateY);
      context.current!.globalAlpha = circle.alpha;
      context.current!.fillStyle = `rgb(${rgb.join(",")})`;
      context.current!.beginPath();
      context.current!.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
      context.current!.fill();
      context.current!.restore();

      // Reset particles that go off-screen
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current[i] = {
          ...circle,
          x: Math.random() > 0.5 ? -circle.size : canvasSize.current.w + circle.size,
          y: Math.random() * canvasSize.current.h,
          alpha: 0,
        };
      } else {
        // Fade in/out based on edge proximity
        const edge = Math.min(
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size
        );
        const edgeFactor = Math.min(Math.max(edge / 20, 0), 1);
        circle.alpha = Math.min(circle.targetAlpha * edgeFactor, circle.targetAlpha);
      }
    });

    rafID.current = requestAnimationFrame(animate);
  };

  return (
    <div
      className={cn("pointer-events-none fixed inset-0", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};