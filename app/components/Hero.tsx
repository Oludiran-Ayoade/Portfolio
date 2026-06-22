"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, Github } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#f0ebe3]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            className={`space-y-6 transition-all duration-1000 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <p className="text-amber-600 font-mono text-sm tracking-[0.2em]">
              &lt;Hello, World! /&gt; &nbsp; I&apos;m
            </p>

            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Oludiran-Ayoade
              </h1>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-amber-700">
                  Olutimileyin
                </span>
              </h1>
            </div>

            <h2 className="text-xl text-stone-500 font-light tracking-wide">
              Full Stack Developer &nbsp;·&nbsp; Backend Specialist
            </h2>

            <p className="text-stone-500 text-base leading-relaxed max-w-md">
              Crafting scalable APIs and intuitive interfaces. Passionate about
              clean architecture, CQRS patterns, and turning complex problems
              into elegant code.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/25 text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-600 font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-amber-600" />
                Oyo State, Nigeria
              </span>
              <a
                href="mailto:ooludiranayoade@gmail.com"
                className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
              >
                <Mail size={13} className="text-amber-600" />
                ooludiranayoade@gmail.com
              </a>
              <a
                href="tel:+2347060601254"
                className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
              >
                <Phone size={13} className="text-amber-600" />
                +234 706 060 1254
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {/* TODO: Replace Oludiran-Ayoade with your actual GitHub username */}
              <a
                href="https://github.com/Oludiran-Ayoade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 hover:border-amber-500/50 hover:text-amber-600 rounded-lg text-stone-500 transition-all duration-200 text-sm font-mono"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: decorative code block */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
          >
            <div className="relative">
              <div className="p-7 bg-white/90 border border-stone-200 rounded-2xl shadow-2xl backdrop-blur-sm font-mono text-sm leading-7 animate-float">
                {/* Window chrome */}
                <div className="flex gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-stone-400 text-xs">developer.ts</span>
                </div>

                <pre className="text-left">
                  <span className="text-blue-500">const </span>
                  <span className="text-cyan-600">developer</span>
                  <span className="text-stone-800"> = {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-600">name</span>
                  <span className="text-stone-800">: </span>
                  <span className="text-amber-600">&quot;Olutimileyin&quot;</span>
                  <span className="text-stone-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-600">role</span>
                  <span className="text-stone-800">: </span>
                  <span className="text-amber-600">&quot;Full Stack Dev&quot;</span>
                  <span className="text-stone-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-600">stack</span>
                  <span className="text-stone-800">: [</span>
                  <span className="text-amber-600">&quot;.NET&quot;</span>
                  <span className="text-stone-800">, </span>
                  <span className="text-amber-600">&quot;React&quot;</span>
                  <span className="text-stone-800">, </span>
                  <span className="text-amber-600">&quot;Node&quot;</span>
                  <span className="text-stone-800">]</span>
                  <span className="text-stone-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-600">location</span>
                  <span className="text-stone-800">: </span>
                  <span className="text-amber-600">&quot;Nigeria 🇳🇬&quot;</span>
                  <span className="text-stone-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-600">openToWork</span>
                  <span className="text-stone-800">: </span>
                  <span className="text-orange-500">true</span>
                  <span className="text-stone-400">,</span>
                  {"\n"}
                  <span className="text-stone-800">{"}"}</span>
                  <span className="text-stone-400">;</span>
                </pre>
              </div>
              {/* Accent dot */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-300/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-stone-400 font-mono tracking-widest">scroll</span>
        <ChevronDown size={16} className="text-stone-400" />
      </div>
    </section>
  );
}
