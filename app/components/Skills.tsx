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
  blue: "bg-blue-800/10 text-blue-700 border-blue-700/20",
  cyan: "bg-cyan-800/10 text-cyan-700 border-cyan-700/20",
  green: "bg-green-800/10 text-green-800 border-green-800/20",
  yellow: "bg-yellow-800/10 text-yellow-700 border-yellow-700/20",
  purple: "bg-purple-800/10 text-purple-700 border-purple-700/20",
  orange: "bg-orange-800/10 text-orange-700 border-orange-700/20",
};

const headerColorMap: Record<string, string> = {
  blue: "text-blue-700",
  cyan: "text-cyan-700",
  green: "text-green-800",
  yellow: "text-yellow-700",
  purple: "text-purple-700",
  orange: "text-orange-700",
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
      className={`py-24 bg-[#f5f5f0] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-green-800 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Skills</h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ name, color, skills }) => (
            <div
              key={name}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200"
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
