"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", ...navItems.map((n) => n.href.slice(1))];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? "bg-[#f0ebe3]/90 backdrop-blur-md border-b border-stone-200/60 shadow-2xl" : "bg-transparent" }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-amber-600 font-mono font-bold text-lg hover:text-amber-700 transition-colors"
        >
          <Code2 size={22} />
          <span>OAE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${ activeSection === item.href.slice(1) ? "text-amber-600 " : "text-stone-500 hover:text-stone-900 " }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-amber-500/60 text-amber-600 hover:bg-amber-500 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
        >
          Resume
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-stone-500 hover:text-stone-900 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f0ebe3]/95 backdrop-blur-md border-b border-stone-200/60 px-6 pb-6 pt-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors ${ activeSection === item.href.slice(1) ? "text-amber-600 " : "text-stone-500 hover:text-stone-900 " }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="/resume.pdf"
              download
              className="block w-full text-center px-4 py-2 border border-amber-500/60 text-amber-600 rounded-lg text-sm font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
