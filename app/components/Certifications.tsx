"use client";

import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Java Programming Language Training",
    issuer: "Parach Computers",
    year: "2021",
  },
  {
    name: "Web Design Certification",
    issuer: "SQI College of ICT",
    year: "2023",
  },
  {
    name: "JavaScript & Firebase Certification",
    issuer: "SQI College of ICT",
    year: "2024",
  },
  {
    name: "MERN Stack Certification",
    issuer: "SQI College of ICT",
    year: "2024",
  },
];

export default function Certifications() {
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
      id="certifications"
      ref={ref}
      className={`py-24 bg-stone-100 dark:bg-gray-950/50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-green-400 font-mono text-sm">06.</span>
          <h2 className="text-3xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Certifications</h2>
          <div className="flex-1 h-px bg-stone-200 dark:bg-gray-800" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map(({ name, issuer, year }) => (
            <div
              key={name}
              className="p-5 bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-800 rounded-xl hover:border-amber-500/30 dark:hover:border-green-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-amber-500/10 dark:bg-green-500/10 rounded-lg">
                  <Award size={18} className="text-amber-600 dark:text-green-400" />
                </div>
                <span className="text-xs font-mono text-stone-500 dark:text-gray-600 bg-stone-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                  {year}
                </span>
              </div>
              <h3 className="text-stone-900 dark:text-white font-medium text-sm leading-snug mb-2">{name}</h3>
              <p className="text-stone-500 dark:text-gray-500 text-xs">{issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
