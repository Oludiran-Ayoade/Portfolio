"use client";

import { useEffect, useState } from "react";

export default function AnimatedAvatar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative w-96 h-96 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#c9a84c]/15 blur-3xl animate-pulse" />
      <div className="absolute inset-8 rounded-full bg-[#c9a84c]/10 blur-xl" />
      
      {/* Main avatar circle */}
      <div className="absolute inset-6 rounded-full bg-[#2a1f18] border-[3px] border-[#c9a84c]/50 overflow-hidden shadow-2xl shadow-[#c9a84c]/10">
        
        {/* Hair - more detailed */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-28 bg-[#1a1410] rounded-b-full">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-40 h-24 bg-[#2a1f18] rounded-b-full" />
          {/* Hair texture lines */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-[#3a2f28]/50 rounded-full" />
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-[#3a2f28]/50 rounded-full" />
        </div>
        
        {/* Face - rounder and larger */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-36 bg-[#c9a84c]/25 rounded-[2rem]">
          
          {/* Eyebrows */}
          <div className="absolute top-8 left-6 w-8 h-[3px] bg-[#1a1410]/60 rounded-full rotate-[-5deg]" />
          <div className="absolute top-8 right-6 w-8 h-[3px] bg-[#1a1410]/60 rounded-full rotate-[5deg]" />
          
          {/* Glasses - thicker frames */}
          <div className="absolute top-11 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-12 h-9 border-[3px] border-[#d4af37] rounded-xl relative bg-[#c9a84c]/10">
              <div className="absolute top-3 left-3 w-2 h-2 bg-[#d4af37] rounded-full animate-blink" />
              {/* Lens reflection */}
              <div className="absolute top-1 right-2 w-3 h-2 bg-white/20 rounded-full" />
            </div>
            <div className="w-12 h-9 border-[3px] border-[#d4af37] rounded-xl relative bg-[#c9a84c]/10">
              <div className="absolute top-3 left-3 w-2 h-2 bg-[#d4af37] rounded-full animate-blink" style={{ animationDelay: "0.1s" }} />
              <div className="absolute top-1 right-2 w-3 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
          
          {/* Nose */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3 h-5 bg-[#c9a84c]/35 rounded-full" />
          
          {/* Mouth - wider smile */}
          <div className="absolute top-28 left-1/2 -translate-x-1/2 w-10 h-4 border-b-[3px] border-[#d4af37] rounded-b-full" />
          <div className="absolute top-[7.2rem] left-[3.8rem] w-1.5 h-1.5 bg-[#d4af37]/60 rounded-full" />
          
          {/* Blush - more visible */}
          <div className="absolute top-20 left-3 w-5 h-3 bg-[#c9a84c]/30 rounded-full blur-md" />
          <div className="absolute top-20 right-3 w-5 h-3 bg-[#c9a84c]/30 rounded-full blur-md" />
        </div>
        
        {/* Ears */}
        <div className="absolute top-36 left-[4.5rem] w-4 h-6 bg-[#c9a84c]/20 rounded-full" />
        <div className="absolute top-36 right-[4.5rem] w-4 h-6 bg-[#c9a84c]/20 rounded-full" />
        
        {/* Neck */}
        <div className="absolute top-[15.5rem] left-1/2 -translate-x-1/2 w-12 h-8 bg-[#c9a84c]/20" />
        
        {/* Body / Shirt - polo style */}
        <div className="absolute top-[17.5rem] left-1/2 -translate-x-1/2 w-48 h-32 bg-[#0f0a07] rounded-t-[2.5rem]">
          {/* Collar */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#2a1f18] rounded-b-2xl border-b border-[#c9a84c]/30" />
          
          {/* Code on shirt - bigger */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <span className="text-sm text-green-400 font-mono font-bold tracking-wider">&lt;/&gt;</span>
          </div>
          
          {/* Shirt texture */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-[#c9a84c]/20" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#c9a84c]/20" />
        </div>
        
        {/* Floating code particles - bigger and more */}
        <div className="absolute top-12 right-6 text-sm text-[#d4af37]/70 font-mono font-bold animate-float">{}</div>
        <div className="absolute top-28 left-4 text-sm text-green-400/70 font-mono font-bold animate-float" style={{ animationDelay: "0.5s" }}>[]</div>
        <div className="absolute bottom-24 right-8 text-sm text-[#d4af37]/70 font-mono font-bold animate-float" style={{ animationDelay: "1s" }}>();</div>
        <div className="absolute bottom-36 left-8 text-sm text-green-400/70 font-mono font-bold animate-float" style={{ animationDelay: "1.5s" }}>=&gt;</div>
        <div className="absolute top-20 right-20 text-xs text-[#d4af37]/50 font-mono animate-float" style={{ animationDelay: "0.8s" }}>//</div>
        <div className="absolute bottom-28 left-20 text-xs text-green-400/50 font-mono animate-float" style={{ animationDelay: "1.2s" }}>++</div>
      </div>
      
      {/* Glow dots around - bigger and more */}
      <div className="absolute -top-3 left-1/2 w-3 h-3 bg-[#d4af37] rounded-full animate-pulse shadow-lg shadow-[#d4af37]/50" />
      <div className="absolute top-1/4 -right-4 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
      <div className="absolute top-3/4 -right-2 w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" style={{ animationDelay: "0.7s" }} />
      <div className="absolute -bottom-3 left-1/3 w-3 h-3 bg-[#d4af37] rounded-full animate-pulse shadow-lg shadow-[#d4af37]/50" style={{ animationDelay: "0.6s" }} />
      <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" style={{ animationDelay: "1.4s" }} />
      
      {/* Orbital ring */}
      <div className="absolute inset-0 rounded-full border border-[#c9a84c]/20 animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute inset-3 rounded-full border border-[#c9a84c]/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
    </div>
  );
}
