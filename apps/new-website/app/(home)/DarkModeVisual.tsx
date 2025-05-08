"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DarkModeVisual() {

  const drag = useRef<HTMLDivElement>(null);
  const maskRef1 = useRef<HTMLDivElement>(null);
  const maskRef2 = useRef<HTMLDivElement>(null);
  const dragbgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dx, setDX] = useState('50%');

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !drag.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const xPercent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    const percentStr = `${xPercent.toFixed(2)}%`;
    setDX(percentStr);
  };

  const handleMouseUp = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false);
  };

  useEffect(() => {
    if (!drag.current || !containerRef.current) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    drag.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      if (!drag.current) return;
      drag.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [drag.current, containerRef.current, isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full -z-20"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div
        ref={maskRef1}
        id="drag"
        className="flex flex-col justify-end p-4 gap-4 w-full h-full bg-neutral-900/50 group-hover:bg-neutral-900"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 50%, red 50%)",
          WebkitMaskSize: "200% 100%",
          WebkitMaskPosition: `-${dx} 0%`,
        }}
      >
        <div className="group-hover:bg-cyan-500/30 bg-cyan-400/3 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-full w-10 h-10" />
        <div className="group-hover:bg-cyan-500/20 bg-cyan-400/2 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-xl p-4 w-full h-[69%]" />
        <div className="flex gap-4 justify-end">
          <div className="bg-black/5 group-hover:bg-cyan-500/15 dark:bg-cyan-400/5 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
          <div className="bg-black/5 group-hover:bg-cyan-500/15 dark:bg-cyan-400/5 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
        </div>
      </div>

      <div
        ref={dragbgRef}
        className="absolute left-1/2 top-1/2 -translate-1/2 w-8 h-8 animate-ping rounded-full bg-fd-primary z-10"
        style={{
          left: dx,
        }}
      />
      <div
        ref={drag}
        className="absolute top-1/2 left-1/2 -translate-1/2 h-8 w-8 flex justify-center items-center rounded-full bg-fd-primary text-fd-foreground z-20"
        style={{
          left: dx,
        }}
      >
        <ChevronLeft className="w-8 h-8 text-neutral-900/80 group-hover:text-neutral-900" />
        <ChevronRight className="w-8 h-8 text-neutral-100/80 group-hover:text-neutral-100" />
      </div>

      <div
        ref={maskRef2}
        className="flex flex-col justify-end p-4 gap-4 w-full h-full bg-neutral-100/50 group-hover:bg-neutral-100 absolute inset-0 duration-300 transition-colors"
        style={{
          WebkitMaskImage: "linear-gradient(to right, red 50%, transparent 50%)",
          WebkitMaskSize: "200% 100%",
          WebkitMaskPosition: `-${dx} 0%`,  
        }}
      >
        <div className="group-hover:bg-cyan-500/30 bg-black/5 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-full w-10 h-10" />
        <div className="bg-black/5 group-hover:bg-cyan-500/20 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-xl p-4 w-full h-[69%]" />
        <div className="flex gap-4 justify-end">
          <div className="bg-black/5 group-hover:bg-cyan-500/15 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
          <div className="bg-black/5 group-hover:bg-cyan-500/15 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
        </div>
      </div>
    </div>
  );
}