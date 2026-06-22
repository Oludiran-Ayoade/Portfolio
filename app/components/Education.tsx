"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    degree: "B.Eng Civil Engineering",
    institution: "Covenant University",
    location: "Nigeria",
    period: "2015 – 2020",
    icon: GraduationCap,
    type: "Undergraduate Degree",
    note: "Engineering foundation — analytical thinking, structural problem-solving.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Winners International College Oyo",
    location: "Oyo State, Nigeria",
    period: "",
    icon: School,
    type: "Secondary School",
    note: "",
  },
];

export default function Education() {
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
      id="education"
      ref={ref}
      className={`py-24 bg-[#f0ebe3] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-green-400 font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-stone-900" style={{ fontFamily: "'Playfair Display', serif" }}>Education</h2>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl">
          {education.map(({ degree, institution, location, period, icon: Icon, type, note }) => (
            <div
              key={degree}
              className="p-6 bg-white border border-stone-200 rounded-xl hover:border-amber-500/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg shrink-0">
                  <Icon size={22} className="text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-600/60 uppercase tracking-widest">
                    {type}
                  </span>
                  <h3 className="text-stone-900 font-semibold mt-1">{degree}</h3>
                  <p className="text-stone-500 text-sm mt-1">{institution}</p>
                  <p className="text-stone-400 text-xs mt-1">
                    {location}
                    {period && ` · ${period}`}
                  </p>
                  {note && (
                    <p className="text-stone-400 text-xs mt-2 italic">{note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-amber-500/5 border border-amber-500/10 rounded-lg max-w-3xl">
          <p className="text-stone-500 text-sm">
            <span className="text-amber-600 font-medium">Career pivot: </span>
            Transitioning from Civil Engineering to Software Engineering
            demonstrates adaptability, rigorous analytical thinking, and a
            drive for continuous self-improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
