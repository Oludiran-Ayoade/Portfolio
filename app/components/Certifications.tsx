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
      className={`py-24 bg-[#1a1410] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-[#c9a84c] font-mono text-sm">06.</span>
          <h2 className="text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Certifications</h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map(({ name, issuer, year }) => (
            <div
              key={name}
              className="p-5 bg-[#1c1410] border border-[#2a1f18] rounded-xl hover:border-[#c9a84c]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-[#c9a84c]/10 rounded-lg">
                  <Award size={18} className="text-amber-600" />
                </div>
                <span className="text-xs font-mono text-[#a89b8c] bg-[#1a1410] px-2 py-0.5 rounded">
                  {year}
                </span>
              </div>
              <h3 className="text-[#f5f0e8] font-medium text-sm leading-snug mb-2">{name}</h3>
              <p className="text-[#a89b8c] text-xs">{issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
