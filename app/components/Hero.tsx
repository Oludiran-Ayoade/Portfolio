"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, Github, ArrowRight } from "lucide-react";
import AnimatedAvatar from "./AnimatedAvatar";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0f0a07] pt-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            className={`space-y-6 transition-all duration-1000 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <p className="text-[#d4af37] font-mono text-base tracking-[0.25em] uppercase font-medium">
              Full Stack Developer
            </p>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f5f0e8] leading-[1.1] tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                I&apos;m <span className="text-[#d4af37]">Oludiran-Ayoade</span>
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#e8e0d4] leading-[1.1] tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Olutimileyin
              </h1>
            </div>

            <p className="text-[#c4b8a8] text-lg leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Crafting scalable APIs and intuitive interfaces. Based in{" "}
              <span className="font-semibold text-[#f5f0e8]">Ibadan, Oyo State, Nigeria</span>.
              Passionate about clean architecture, CQRS patterns, and turning
              complex problems into elegant code.
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
              <a
                href="#projects"
                className="px-8 py-4 bg-[#c9a84c] hover:bg-[#d4af37] text-[#0f0a07] font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#c9a84c]/30 text-base inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-[#a89b8c]/50 hover:border-[#d4af37] text-[#f5f0e8] hover:text-[#d4af37] font-bold rounded-full transition-all duration-200 text-base"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-base text-[#a89b8c]">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[#d4af37]" />
                Ibadan, Oyo State, Nigeria
              </span>
              <a
                href="mailto:ooludiranayoade@gmail.com"
                className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
              >
                <Mail size={16} className="text-[#d4af37]" />
                ooludiranayoade@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Oludiran-Ayoade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#1c1410] border border-[#2a1f18] hover:border-[#c9a84c] hover:text-[#d4af37] rounded-full text-[#a89b8c] transition-all duration-200 text-base font-medium shadow-sm"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="tel:+2347060601254"
                className="flex items-center gap-2 px-5 py-3 bg-[#1c1410] border border-[#2a1f18] hover:border-[#c9a84c] hover:text-[#d4af37] rounded-full text-[#a89b8c] transition-all duration-200 text-base font-medium shadow-sm"
              >
                <Phone size={18} />
                +234 706 060 1254
              </a>
            </div>
          </div>

          {/* Right: animated avatar */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <AnimatedAvatar />
          </div>
        </div>
      </div>
    </section>
  );
}
