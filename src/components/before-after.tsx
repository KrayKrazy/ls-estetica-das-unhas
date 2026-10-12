"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function BeforeAfter({
  beforeImage = "/antes.jpg",
  afterImage = "/depois.jpg",
  title = "Transformação Real",
}: {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event 
      ? event.touches[0].clientX - containerRect.left
      : (event as MouseEvent).clientX - containerRect.left;
      
    const percent = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e);
    const handleTouchMove = (e: TouchEvent) => handleMove(e);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[650px] mx-auto aspect-square select-none overflow-hidden cursor-ew-resize group rounded-2xl bg-[#140b10] border border-[#c9828f]/30 shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* DEPOIS (Background / Base Image) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt="Depois - Unhas Perfeitas" fill className="object-cover object-center" priority />
        <div className="absolute top-4 right-4 bg-[#0d080a]/80 text-[#f5d77f] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-[#d4af37]/40 backdrop-blur-md z-10 shadow-lg">
          ✨ Depois
        </div>
      </div>
      
      {/* ANTES (Foreground / Clipped Image) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)` }}
      >
        <Image src={beforeImage} alt="Antes - Sem Tratamento" fill className="object-cover object-center" priority />
        <div className="absolute top-4 left-4 bg-[#0d080a]/80 text-[#e6b8c2] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-[#c9828f]/40 backdrop-blur-md z-10 shadow-lg">
          Natural / Antes
        </div>
      </div>

      {/* DRAGGER LINE */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] via-[#c9828f] to-[#d4af37] shadow-[0_0_15px_rgba(201,130,143,0.9)] z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#120b0e] border-2 border-[#d4af37] rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5d77f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
