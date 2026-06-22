"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    color: "blue",
    skills: ["JavaScript", "TypeScript", "C#", "HTML", "CSS", "PHP"],
  },
  {
    name: "Frontend",
    color: "cyan",
    skills: ["React.js", "Next.js", "Sass", "Bootstrap", "Tailwind CSS", "Flutter"],
  },
  {
    name: "Backend",
    color: "green",
    skills: ["Node.js", "Express.js", "ASP.NET Core", "Laravel", "Carter", "Cortex.Mediator"],
  },
  {
    name: "Databases",
    color: "yellow",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Entity Framework Core"],
  },
  {
    name: "Tools & Platforms",
    color: "purple",
    skills: ["Git", "Postman", "WordPress", "JWT", "ASP.NET Identity"],
  },
  {
    name: "Architecture & Patterns",
    color: "orange",
    skills: ["REST APIs", "CQRS", "Clean Architecture", "Vertical Slice Architecture", "JVM"],
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const headerColorMap: Record<string, string> = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  green: "text-green-400",
  yellow: "text-yellow-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
};

export default function Skills() {
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
      id="skills"
      ref={ref}
      className={`py-24 bg-[#0c0a09] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-green-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "'Playfair Display', serif" }}>Skills</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ name, color, skills }) => (
            <div
              key={name}
              className="p-6 bg-[#1c1917] border border-[#292524] rounded-xl hover:border-[#44403c] transition-colors duration-200"
            >
              <h3 className={`text-xs font-mono uppercase tracking-widest mb-4 ${headerColorMap[color]}`}>
                {name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-mono rounded-full border ${colorMap[color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
