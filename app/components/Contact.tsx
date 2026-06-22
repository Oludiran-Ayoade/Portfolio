"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ooludiranayoade@gmail.com",
    href: "mailto:ooludiranayoade@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 706 060 1254",
    href: "tel:+2347060601254",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Oyo State, Nigeria",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    // TODO: Replace Oludiran-Ayoade with your actual GitHub username
    value: "github.com/Oludiran-Ayoade",
    href: "https://github.com/Oludiran-Ayoade",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    // TODO: Sign up at formspree.io, create a form, and replace YOUR_FORM_ID below
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-[#0f0a07] transition-all duration-700 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#c9a84c] font-mono text-sm">07.</span>
          <h2 className="text-4xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Get In Touch</h2>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <p className="text-[#a89b8c] mb-12 max-w-lg text-sm leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind, want to collaborate, or just want to connect — my
          inbox is always open.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-[#1c1410] border border-[#2a1f18] rounded-xl hover:border-[#c9a84c]/30 transition-colors"
              >
                <div className="p-3 bg-[#c9a84c]/10 rounded-lg shrink-0">
                  <Icon size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-[#a89b8c] text-xs font-mono uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#f5f0e8] hover:text-[#c9a84c] transition-colors text-sm font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#f5f0e8] text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Formspree setup reminder */}
            <p className="text-xs text-[#a89b8c] font-mono bg-[#1c1410] border border-dashed border-[#2a1f18] rounded-lg px-3 py-2">
              💡 Set up{" "}
              <a
                href="https://formspree.io"
                className="text-[#c9a84c] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formspree
              </a>{" "}
              and replace <span className="text-gray-400">YOUR_FORM_ID</span> in Contact.tsx.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#a89b8c] mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#1c1410] border border-[#2a1f18] rounded-lg text-[#f5f0e8] placeholder-[#5a4d3e] focus:outline-none focus:border-[#c9a84c] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#a89b8c] mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#1c1410] border border-[#2a1f18] rounded-lg text-[#f5f0e8] placeholder-[#5a4d3e] focus:outline-none focus:border-[#c9a84c] transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#a89b8c] mb-2 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Project Collaboration / Job Opportunity"
                className="w-full px-4 py-3 bg-[#1c1410] border border-[#2a1f18] rounded-lg text-[#f5f0e8] placeholder-[#5a4d3e] focus:outline-none focus:border-[#c9a84c] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#a89b8c] mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-[#1c1410] border border-[#2a1f18] rounded-lg text-[#f5f0e8] placeholder-[#5a4d3e] focus:outline-none focus:border-[#c9a84c] transition-colors text-sm resize-none"
              />
            </div>

            {status === "sent" ? (
              <div className="w-full py-3 bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] rounded-lg text-sm text-center font-medium">
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a84c] hover:bg-[#c9a84c] disabled:opacity-60 text-[#f5f0e8] font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/20 text-sm"
              >
                <Send size={15} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            )}

            {status === "error" && (
              <p className="text-red-500 text-xs text-center">
                Something went wrong. Please email me directly at ooludiranayoade@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
