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
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.12]" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-green-400 font-mono text-sm tracking-[0.2em]">
              &lt;Hello, World! /&gt; &nbsp; I&apos;m
            </p>

            <div className="space-y-1">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
                Oludiran-Ayoade
              </h1>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400">
                  Olutimileyin
                </span>
              </h1>
            </div>

            <h2 className="text-xl text-gray-400 font-light tracking-wide">
              Full Stack Developer &nbsp;·&nbsp; Backend Specialist
            </h2>

            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Crafting scalable APIs and intuitive interfaces. Passionate about
              clean architecture, CQRS patterns, and turning complex problems
              into elegant code.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="px-6 py-3 bg-green-500 hover:bg-green-400 text-gray-950 font-semibold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-700 hover:border-green-500 text-gray-300 hover:text-green-400 font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-green-500" />
                Oyo State, Nigeria
              </span>
              <a
                href="mailto:ooludiranayoade@gmail.com"
                className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
              >
                <Mail size={13} className="text-green-500" />
                ooludiranayoade@gmail.com
              </a>
              <a
                href="tel:+2347060601254"
                className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
              >
                <Phone size={13} className="text-green-500" />
                +234 706 060 1254
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-1">
              {/* TODO: Replace YOUR_GITHUB_USERNAME with your actual GitHub username */}
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 hover:border-green-500/50 hover:text-green-400 rounded-lg text-gray-400 transition-all duration-200 text-sm font-mono"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: decorative code block */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="p-7 bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl backdrop-blur-sm font-mono text-sm leading-7 animate-float">
                {/* Window chrome */}
                <div className="flex gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-gray-600 text-xs">developer.ts</span>
                </div>

                <pre className="text-left">
                  <span className="text-blue-400">const </span>
                  <span className="text-cyan-300">developer</span>
                  <span className="text-white"> = {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">name</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">&quot;Olutimileyin&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">role</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">&quot;Full Stack Dev&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">stack</span>
                  <span className="text-white">: [</span>
                  <span className="text-yellow-300">&quot;.NET&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">&quot;React&quot;</span>
                  <span className="text-white">, </span>
                  <span className="text-yellow-300">&quot;Node&quot;</span>
                  <span className="text-white">]</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">location</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">&quot;Nigeria 🇳🇬&quot;</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">openToWork</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-500">,</span>
                  {"\n"}
                  <span className="text-white">{"}"}</span>
                  <span className="text-gray-500">;</span>
                </pre>
              </div>
              {/* Accent dot */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-gray-700 font-mono tracking-widest">scroll</span>
        <ChevronDown size={16} className="text-gray-600" />
      </div>
    </section>
  );
}
