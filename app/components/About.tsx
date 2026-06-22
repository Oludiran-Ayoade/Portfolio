"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Server, Database, Layers } from "lucide-react";

const highlights = [
  { icon: Code, title: "Frontend", desc: "React.js, Next.js, TypeScript, HTML/CSS, Sass" },
  { icon: Server, title: "Backend", desc: "ASP.NET Core, Node.js/Express, C#, PHP/Laravel" },
  { icon: Database, title: "Databases", desc: "PostgreSQL, MongoDB, MySQL" },
  { icon: Layers, title: "Architecture", desc: "Clean Architecture, CQRS, VSA, REST APIs" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 bg-[#0f0a07] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[#c9a84c] font-mono text-sm">01.</span>
          <h2 className="text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>About Me</h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-5 text-[#8a7d6e] leading-relaxed">
            <p>
              I&apos;m a{" "}
              <span className="text-[#f5f0e8] font-medium">Full Stack Developer</span>{" "}
              with roots in Civil Engineering — I bring a builder&apos;s mindset to every
              codebase: structured, methodical, and obsessed with getting things right.
            </p>
            <p>
              Currently building robust backend systems at{" "}
              <span className="text-[#c9a84c] font-medium">Aft Solutions</span>, where I
              design RESTful APIs using{" "}
              <span className="text-[#f5f0e8] font-medium">ASP.NET Core</span> with Vertical
              Slice Architecture, CQRS patterns, and JWT-based auth. I care deeply about
              code that scales and is easy for the next developer to understand.
            </p>
            <p>
              My journey across multiple companies — from health tech and logistics to
              education and SaaS — has given me a broad perspective on how great
              software solves real problems. I&apos;m equally comfortable owning a
              backend service or polishing a pixel-perfect UI.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              {["ASP.NET Core", "React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 bg-[#1c1410] border border-[#2a1f18] rounded-xl hover:border-[#c9a84c]/30 transition-all duration-200 group"
              >
                <Icon
                  size={22}
                  className="text-[#c9a84c] mb-3 group-hover:scale-110 transition-transform duration-200"
                />
                <h3 className="text-[#f5f0e8] font-semibold text-sm mb-1">{title}</h3>
                <p className="text-[#a89b8c] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
