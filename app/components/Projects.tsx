"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, FolderOpen } from "lucide-react";

// TODO: Replace each entry with your actual project details.
// - Set `title` to your project name
// - Update `description` with what it does and your role
// - Update `tech` with the actual stack used
// - Replace `github` with the real GitHub repo URL
// - Replace `live` with the real Netlify (or other) deployment URL (leave empty string if no live demo)
const projects = [
  {
    title: "Project Title One",
    description:
      "Describe what this project does, the problem it solves, and your role. E.g. A full-stack task management app with real-time collaboration, built with Next.js and Node.js.",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    github: "https://github.com/YOUR_USERNAME/project-one",
    live: "https://your-project-one.netlify.app",
  },
  {
    title: "Project Title Two",
    description:
      "Describe what this project does, the problem it solves, and your role. E.g. A RESTful API for an e-commerce platform featuring JWT auth and role-based access control.",
    tech: ["ASP.NET Core", "C#", "PostgreSQL", "Entity Framework Core"],
    github: "https://github.com/YOUR_USERNAME/project-two",
    live: "https://your-project-two.netlify.app",
  },
  {
    title: "Project Title Three",
    description:
      "Describe what this project does, the problem it solves, and your role. E.g. A responsive React dashboard for visualizing analytics data with chart integrations.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST API"],
    github: "https://github.com/YOUR_USERNAME/project-three",
    live: "https://your-project-three.netlify.app",
  },
  {
    title: "Project Title Four",
    description:
      "Describe what this project does, the problem it solves, and your role. E.g. A health tracking app with PHP/Laravel backend and MySQL database.",
    tech: ["PHP", "Laravel", "MySQL", "React.js"],
    github: "https://github.com/YOUR_USERNAME/project-four",
    live: "",
  },
  {
    title: "Project Title Five",
    description:
      "Describe what this project does, the problem it solves, and your role. E.g. A DSA problem collection platform with curated challenges and solutions.",
    tech: ["JavaScript", "TypeScript", "Node.js"],
    github: "https://github.com/YOUR_USERNAME/project-five",
    live: "https://your-project-five.netlify.app",
  },
  {
    title: "Project Title Six",
    description:
      "Describe what this project does, the problem it solves, and your role. E.g. A responsive portfolio or landing page built with HTML, CSS, and vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/YOUR_USERNAME/project-six",
    live: "https://your-project-six.netlify.app",
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
      className={`py-24 bg-gray-900/20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-green-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-gray-800" />
        </div>

        {/* Placeholder instruction banner */}
        <p className="text-gray-600 text-xs font-mono mb-12 bg-gray-900 border border-dashed border-gray-800 rounded-lg px-4 py-3">
          💡 Replace placeholder data in{" "}
          <span className="text-green-400">app/components/Projects.tsx</span>{" "}
          with your actual GitHub repos and Netlify deployment URLs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-6 bg-gray-900 border border-gray-800/60 border-dashed rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-xl hover:shadow-black/30"
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
                      className="text-gray-600 hover:text-white transition-colors"
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
                      className="text-gray-600 hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-gray-400 italic font-semibold text-sm mb-2 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 italic text-xs leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          {/* TODO: Replace YOUR_GITHUB_USERNAME with your actual GitHub username */}
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-green-500 text-gray-400 hover:text-green-400 rounded-lg transition-all duration-200 text-sm"
          >
            <Github size={16} />
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
