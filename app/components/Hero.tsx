"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, Github, Code2, Briefcase } from "lucide-react";
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div
            className={`space-y-5 transition-all duration-1000 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <p className="text-[#d4af37] font-mono text-sm tracking-[0.2em] uppercase">
              Full Stack Developer
            </p>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                I&apos;m <span className="text-[#c9a84c]">Oludiran-Ayoade</span>
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-[#e8e0d4] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Olutimileyin
              </h1>
            </div>

            <p className="text-[#a89b8c] text-base leading-relaxed max-w-md">
              Crafting scalable APIs and intuitive interfaces. Based in{" "}
              <span className="font-medium text-gray-800">Oyo State, Nigeria</span>.
              Passionate about clean architecture, CQRS patterns, and turning
              complex problems into elegant code.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#0f0a07] hover:bg-[#1c1410] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/20 text-sm inline-flex items-center gap-2"
              >
                View My Work
                <ChevronDown size={14} className="rotate-[-90deg]" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#a89b8c]/60 hover:border-[#c9a84c] text-[#d4c8b8] hover:text-[#c9a84c] font-semibold rounded-full transition-all duration-200 text-sm"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-amber-500" />
                Oyo State, Nigeria
              </span>
              <a
                href="mailto:ooludiranayoade@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors"
              >
                <Mail size={14} className="text-amber-500" />
                ooludiranayoade@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://github.com/Oludiran-Ayoade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1c1410] border border-[#2a1f18] hover:border-[#c9a84c] hover:text-[#c9a84c] rounded-full text-[#a89b8c] transition-all duration-200 text-sm font-medium shadow-sm"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="tel:+2347060601254"
                className="flex items-center gap-2 px-4 py-2 bg-[#1c1410] border border-[#2a1f18] hover:border-[#c9a84c] hover:text-[#c9a84c] rounded-full text-[#a89b8c] transition-all duration-200 text-sm font-medium shadow-sm"
              >
                <Phone size={15} />
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
