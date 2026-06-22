"use client";

import { useEffect, useState } from "react";

export default function AnimatedAvatar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative w-72 h-72 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#c9a84c]/20 blur-2xl animate-pulse" />
      
      {/* Main avatar circle */}
      <div className="absolute inset-4 rounded-full bg-[#2a1f18] border-2 border-[#c9a84c]/40 overflow-hidden shadow-2xl">
        
        {/* Hair */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-[#1a1410] rounded-b-full">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-16 bg-[#2a1f18] rounded-b-full" />
        </div>
        
        {/* Face */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#c9a84c]/30 rounded-2xl">
          
          {/* Glasses */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-8 h-6 border-2 border-[#c9a84c] rounded-lg relative">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-blink" />
            </div>
            <div className="w-8 h-6 border-2 border-[#c9a84c] rounded-lg relative">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-blink" style={{ animationDelay: "0.1s" }} />
            </div>
          </div>
          
          {/* Nose */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-2 h-3 bg-[#c9a84c]/40 rounded-full" />
          
          {/* Mouth - smiling */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-[#c9a84c] rounded-b-full" />
          
          {/* Blush */}
          <div className="absolute top-12 left-2 w-3 h-2 bg-[#c9a84c]/20 rounded-full blur-sm" />
          <div className="absolute top-12 right-2 w-3 h-2 bg-[#c9a84c]/20 rounded-full blur-sm" />
        </div>
        
        {/* Neck */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-8 h-6 bg-[#c9a84c]/20" />
        
        {/* Body / Shirt */}
        <div className="absolute top-44 left-1/2 -translate-x-1/2 w-36 h-24 bg-[#0f0a07] rounded-t-3xl">
          {/* Collar */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-6 bg-[#2a1f18] rounded-b-lg" />
          
          {/* Code on shirt */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <div className="flex gap-1">
              <span className="text-[8px] text-green-400 font-mono">&lt;/&gt;</span>
            </div>
          </div>
        </div>
        
        {/* Floating code particles */}
        <div className="absolute top-8 right-4 text-[10px] text-[#d4af37]/60 font-mono animate-float">{}</div>
        <div className="absolute top-20 left-2 text-[10px] text-green-400/60 font-mono animate-float" style={{ animationDelay: "0.5s" }}>[]</div>
        <div className="absolute bottom-20 right-6 text-[10px] text-[#d4af37]/60 font-mono animate-float" style={{ animationDelay: "1s" }}>();</div>
        <div className="absolute bottom-32 left-6 text-[10px] text-green-400/60 font-mono animate-float" style={{ animationDelay: "1.5s" }}>=&gt;</div>
      </div>
      
      {/* Glow dots around */}
      <div className="absolute -top-2 left-1/2 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
      <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
      <div className="absolute -bottom-2 left-1/3 w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
    </div>
  );
}
