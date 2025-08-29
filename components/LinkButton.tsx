"use client"
import { useRef, useEffect } from "react";
import type { MouseEvent } from "react";
import type { Link } from "../data/links";

interface LinkButtonProps {
  link: Link;
  tint?: string; // color opcional para el vidrio
}

export default function LinkButton({ link, tint = "255,255,255" }: LinkButtonProps) {
  const { title, url, icon: Icon } = link;
  const ref = useRef<HTMLAnchorElement>(null);

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  };

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (!ref.current) return;
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      ref.current.style.setProperty("--mouse-x", `${currentX}px`);
      ref.current.style.setProperty("--mouse-y", `${currentY}px`);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`
        group relative w-full max-w-md mx-auto block p-5 rounded-3xl overflow-hidden
        bg-[rgba(${tint},0.08)] backdrop-blur-3xl border border-white/5
        shadow-xl shadow-black/40 transition-all duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:scale-[1.04] active:scale-[0.97]
        animate-wiggleFadeIn

        before:absolute before:inset-0 before:rounded-3xl before:z-0
        before:opacity-100 before:bg-[radial-gradient(600px_circle_at_center,rgba(${tint},0.03),transparent_80%)]

        after:absolute after:inset-0 after:rounded-3xl after:z-0
        after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700
        after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(${tint},0.2),transparent_70%)]
        after:filter after:blur-2xl
      `}
    >
      <div className="relative z-10 flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgba(255,255,255,0.08)] border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner">
          <Icon className="w-6 h-6 text-white drop-shadow-md" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-lg tracking-wide drop-shadow-md">
            {title}
          </h3>
        </div>
        <div>
          <svg
            className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
