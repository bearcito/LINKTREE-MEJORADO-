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

  // For smooth light effect
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX = x;
    mouseY = y;

    const width = rect.width;
    const height = rect.height;
    const rotateX = (y / height - 0.5) * -25;
    const rotateY = (x / width - 0.5) * 25;
    
    const isPressed = (e.buttons === 1);
    const scale = isPressed ? 0.97 : 1.04;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
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
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`
        group relative w-full max-w-md mx-auto block py-3 px-4 rounded-xl overflow-hidden
        bg-[rgba(${tint},0.08)] backdrop-blur-3xl border border-white/5
        shadow-xl shadow-black/40
        animate-wiggleFadeIn animate-shimmer

        before:absolute before:inset-0 before:rounded-xl before:z-0
        before:opacity-100 before:bg-[radial-gradient(600px_circle_at_center,rgba(${tint},0.03),transparent_80%)]

        after:absolute after:inset-0 after:rounded-xl after:z-0
        after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700
        after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(${tint},0.2),transparent_70%)]
        after:filter after:blur-2xl
      `}
    >
      <div className="relative z-10 flex items-center space-x-4" style={{ transform: "translateZ(20px)" }}>
        <div 
          className="flex-shrink-0 w-11 h-11 rounded-full bg-[rgba(255,255,255,0.08)] border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" 
          style={{ transform: "translateZ(40px)" }}
        >
          <Icon className="w-5 h-5 text-white drop-shadow-md transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-white font-semibold text-base tracking-wide drop-shadow-md transition-all duration-300 group-hover:translate-x-1 group-hover:drop-shadow-lg" style={{ transform: "translateZ(10px)" }}>
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
