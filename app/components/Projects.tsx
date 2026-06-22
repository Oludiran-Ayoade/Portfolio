"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "NairaRate.ng",
    description:
      "A platform for tracking Nigerian Naira exchange rates across multiple currencies. Provides real-time rate comparisons and historical trends for users.",
    tech: ["React.js", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/Oludiran-Ayoade/nairarate-ng",
    live: "https://nairarate.ng/",
  },
  {
    title: "Fancy Churros",
    description:
      "A visually engaging landing page built for a churros brand, showcasing modern web design and responsive layout techniques.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    github: "https://github.com/Oludiran-Ayoade/fancy-churros",
    live: "https://fancy-churros-49b58a.netlify.app/",
  },
  {
    title: "OyoBooking NG",
    description:
      "A booking platform designed for Oyo State, enabling seamless reservation services with an intuitive user interface.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Oludiran-Ayoade/oyobooking-ng",
    live: "https://oyobooking-ng.netlify.app",
  },
  {
    title: "Steady Boba",
    description:
      "A modern landing page for a boba tea brand featuring smooth animations and responsive design for all devices.",
    tech: ["HTML", "Sass", "JavaScript", "Responsive Design"],
    github: "https://github.com/Oludiran-Ayoade/steady-boba",
    live: "https://steady-boba-1c9363.netlify.app/",
  },
  {
    title: "Department of Accounting",
    description:
      "A professional institutional website for a university accounting department with course information, faculty profiles, and resources.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Oludiran-Ayoade/dept-of-accounting",
    live: "https://deptofaccounting.netlify.app/",
  },
  {
    title: "More Projects",
    description:
      "Explore additional repositories and works across various technologies and platforms.",
    tech: ["React", "Next.js", "Node.js", "ASP.NET Core"],
    github: "https://github.com/Oludiran-Ayoade",
    live: "",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 bg-[#141210] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-green-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "'Playfair Display', serif" }}>Projects</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-6 bg-[#1c1917] border border-[#292524] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-stone-200/50"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <FolderOpen size={30} className="text-green-400 group-hover:text-green-300 transition-colors" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-stone-100 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-stone-100 transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-gray-700 font-semibold text-sm mb-2 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-stone-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          {/* TODO: Replace Oludiran-Ayoade with your actual GitHub username */}
          <a
            href="https://github.com/Oludiran-Ayoade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#44403c] hover:border-green-500 text-gray-400 hover:text-green-400 rounded-lg transition-all duration-200 text-sm"
          >
            <Github size={16} />
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
