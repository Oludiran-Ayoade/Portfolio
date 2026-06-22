"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, Github, User, Code2, Briefcase } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#f5f5f0] pt-20"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div
            className={`space-y-5 transition-all duration-1000 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <p className="text-amber-500 font-mono text-sm tracking-[0.2em] uppercase">
              Full Stack Developer
            </p>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                I&apos;m <span className="text-[#1a3a1a]">Oludiran-Ayoade</span>
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Olutimileyin
              </h1>
            </div>

            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Crafting scalable APIs and intuitive interfaces. Based in{" "}
              <span className="font-medium text-gray-800">Oyo State, Nigeria</span>.
              Passionate about clean architecture, CQRS patterns, and turning
              complex problems into elegant code.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#1a3a1a] hover:bg-[#143014] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/20 text-sm inline-flex items-center gap-2"
              >
                View My Work
                <ChevronDown size={14} className="rotate-[-90deg]" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-400 hover:border-[#1a3a1a] text-gray-700 hover:text-[#1a3a1a] font-semibold rounded-full transition-all duration-200 text-sm"
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
                className="flex items-center gap-1.5 hover:text-[#1a3a1a] transition-colors"
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
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-[#1a3a1a] hover:text-[#1a3a1a] rounded-full text-gray-600 transition-all duration-200 text-sm font-medium shadow-sm"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="tel:+2347060601254"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-[#1a3a1a] hover:text-[#1a3a1a] rounded-full text-gray-600 transition-all duration-200 text-sm font-medium shadow-sm"
              >
                <Phone size={15} />
                +234 706 060 1254
              </a>
            </div>
          </div>

          {/* Right: photo area with amber circle */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <div className="relative">
              {/* Amber circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-400 rounded-full" />

              {/* Photo placeholder */}
              <div className="relative w-64 h-64 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                <User size={80} className="text-gray-300" />
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-2 right-0 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100 flex items-center gap-2 animate-float">
                <Code2 size={16} className="text-[#1a3a1a]" />
                <span className="text-xs font-semibold text-gray-800">Full Stack</span>
              </div>

              {/* Floating badge - bottom left */}
              <div className="absolute -bottom-2 left-0 bg-[#1a3a1a] rounded-full px-4 py-2 shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                <Briefcase size={16} className="text-amber-400" />
                <span className="text-xs font-semibold text-white">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
