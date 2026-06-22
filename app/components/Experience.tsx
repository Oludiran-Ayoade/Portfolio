"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer",
    company: "Aft Solutions",
    period: "Apr 2026 – Present",
    current: true,
    bullets: [
      "Developing and maintaining RESTful APIs using ASP.NET Core with Vertical Slice Architecture (VSA).",
      "Implementing authentication and authorization systems using ASP.NET Identity and JWT.",
      "Building clean, scalable backend features using Cortex.Mediator, Carter, and EF Core with PostgreSQL.",
      "Writing structured, maintainable code following clean architecture principles and CQRS patterns.",
    ],
    tech: ["ASP.NET Core", "C#", "Entity Framework Core", "PostgreSQL", "Cortex.Mediator", "Carter", "JWT"],
  },
  {
    role: "DSA Content Creator",
    company: "Datacurve",
    period: "Sep 2024 – Apr 2026",
    current: false,
    bullets: [
      "Designed and developed complex DSA problems for students and professionals.",
      "Created optimized solutions and detailed explanations for arrays, trees, graphs, and dynamic programming.",
      "Collaborated with experts to tailor problem sets for coding interviews and competitive programming.",
    ],
    tech: ["JavaScript", "TypeScript"],
  },
  {
    role: "Frontend Engineer",
    company: "BoatCruize",
    period: "Jul 2024 – Aug 2024",
    current: false,
    bullets: [
      "Enhanced user experience and interface using Next.js and Sass.",
      "Transformed wireframes into responsive, visually appealing UIs.",
      "Conducted API testing with Postman and collaborated with backend developers for seamless integration.",
    ],
    tech: ["Next.js", "React.js", "Sass", "Postman"],
  },
  {
    role: "MERN Stack Engineer Apprentice",
    company: "SQI College of ICT",
    period: "Jul 2023 – Jun 2024",
    current: false,
    bullets: [
      "Built full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Developed RESTful APIs and responsive UIs with React and Next.js.",
      "Collaborated on projects involving advanced JavaScript, TypeScript, and API integration.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript", "Axios"],
  },
  {
    role: "Fullstack Engineer",
    company: "Novy Systems",
    period: "Jul 2023 – Aug 2023",
    current: false,
    bullets: [
      "Contributed to backend development using PHP, Laravel, and MySQL for the 'Health Then More' app.",
      "Managed and optimized a WordPress website, ensuring performance and user experience.",
      "Prepared technical reports documenting system architecture and API specifications.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "WordPress"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Cloudware Technologies",
    period: "Aug 2022 – May 2023",
    current: false,
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, Bootstrap, and React.",
      "Taught web design workshops, mentoring interns in creating web projects.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = experiences[active];

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 bg-[#1a1410] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[#c9a84c] font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Work Experience</h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          {/* Tab list */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-[#2a1f18] pb-4 md:pb-0 gap-1 shrink-0">
            {experiences.map((ex, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap md:whitespace-normal rounded-r-lg shrink-0 ${ active === i ? "text-[#c9a84c] bg-[#c9a84c]/10 border-l-2 border-amber-600 -ml-0.5" : "text-[#a89b8c] hover:text-[#e8e0d4] hover:bg-gray-300/40 border-l-2 border-transparent -ml-0.5" }`}
              >
                <span className="block">{ex.company}</span>
                {ex.current && (
                  <span className="text-xs text-green-500/80 font-mono">● Current</span>
                )}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="space-y-5 min-h-[280px]">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.role}{" "}
                <span className="text-amber-600">@ {exp.company}</span>
              </h3>
              <p className="flex items-center gap-2 text-[#8a7d6e] text-sm mt-1.5 font-mono">
                <Calendar size={13} />
                {exp.period}
              </p>
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[#8a7d6e] text-sm leading-relaxed">
                  <ChevronRight
                    size={15}
                    className="text-[#c9a84c] mt-0.5 shrink-0"
                  />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-mono rounded-full border border-[#c9a84c]/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
