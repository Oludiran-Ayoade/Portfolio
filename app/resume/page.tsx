import { Mail, Phone, MapPin, Github, Globe, Download } from "lucide-react";

export const metadata = {
  title: "Resume | Oludiran-Ayoade Olutimileyin Emmanuel",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0f0a07] text-[#f5f0e8] py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 border-b border-[#c9a84c]/30 pb-8">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#f5f0e8]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Oludiran-Ayoade <span className="text-[#d4af37]">Olutimileyin Emmanuel</span>
          </h1>
          <p className="text-[#a89b8c] text-lg">Full Stack Developer</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[#c4b8a8]">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#d4af37]" />
              Ibadan, Oyo State, Nigeria
            </span>
            <a href="tel:+2347060601254" className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Phone size={14} className="text-[#d4af37]" />
              +234 706 060 1254
            </a>
            <a href="mailto:ooludiranayoade@gmail.com" className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Mail size={14} className="text-[#d4af37]" />
              ooludiranayoade@gmail.com
            </a>
            <a href="https://github.com/Oludiran-Ayoade" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Github size={14} className="text-[#d4af37]" />
              GitHub
            </a>
          </div>
        </div>

        {/* Work Experience */}
        <section>
          <h2
            className="text-2xl font-bold text-[#d4af37] mb-5 pb-2 border-b border-[#c9a84c]/20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Work Experience
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-[#f5f0e8]">Backend Developer</h3>
                <span className="text-sm text-[#a89b8c]">Aft Solutions | Apr 2026 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm leading-relaxed">
                <li>Developing and maintaining RESTful APIs using ASP.NET Core with Vertical Slice Architecture (VSA).</li>
                <li>Implementing authentication and authorization systems using ASP.NET Identity and JWT.</li>
                <li>Building clean, scalable backend features using Cortex.Mediator, Carter, and EF Core with PostgreSQL.</li>
                <li>Writing structured, maintainable code following clean architecture principles and CQRS patterns.</li>
              </ul>
              <p className="text-xs text-[#d4af37]/80 font-mono">ASP.NET Core · C# · EF Core · PostgreSQL · Cortex.Mediator · Carter · JWT</p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-[#f5f0e8]">DSA Content Creator</h3>
                <span className="text-sm text-[#a89b8c]">Datacurve | Sep 2024 – Apr 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm leading-relaxed">
                <li>Designed and developed complex data structures and algorithms (DSA) problems for students and professionals.</li>
                <li>Created optimized solutions and detailed explanations for topics like arrays, trees, graphs, and dynamic programming.</li>
                <li>Collaborated with experts to tailor problem sets for coding interviews and competitive programming.</li>
              </ul>
              <p className="text-xs text-[#d4af37]/80 font-mono">JavaScript · TypeScript</p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-[#f5f0e8]">Frontend Engineer</h3>
                <span className="text-sm text-[#a89b8c]">BoatCruize | Jul 2024 – Aug 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm leading-relaxed">
                <li>Enhanced user experience and interface using Next.js and Sass.</li>
                <li>Transformed wireframes into responsive, visually appealing UIs.</li>
                <li>Conducted API testing with Postman and collaborated with backend developers for seamless integration.</li>
              </ul>
              <p className="text-xs text-[#d4af37]/80 font-mono">Next.js · Sass · React.js · Postman</p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-[#f5f0e8]">MERN Stack Engineer Apprentice</h3>
                <span className="text-sm text-[#a89b8c]">SQI College of ICT | Jul 2023 – Jun 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm leading-relaxed">
                <li>Built full-stack applications using MongoDB, Express.js, React.js, and Node.js.</li>
                <li>Developed RESTful APIs and responsive UIs with React and Next.js.</li>
                <li>Collaborated on projects involving advanced JavaScript, TypeScript, and API integration.</li>
              </ul>
              <p className="text-xs text-[#d4af37]/80 font-mono">MERN Stack · Next.js · TypeScript · Axios</p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-[#f5f0e8]">Fullstack Engineer</h3>
                <span className="text-sm text-[#a89b8c]">Novy Systems | Jul 2023 – Aug 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm leading-relaxed">
                <li>Contributed to backend development using PHP, Laravel, and MySQL for the "Health Then More" app.</li>
                <li>Managed and optimized a WordPress website, ensuring performance and user experience.</li>
                <li>Prepared technical reports documenting system architecture and API specifications.</li>
              </ul>
              <p className="text-xs text-[#d4af37]/80 font-mono">PHP · Laravel · MySQL · WordPress</p>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-lg font-semibold text-[#f5f0e8]">Frontend Developer Intern</h3>
                <span className="text-sm text-[#a89b8c]">Cloudware Technologies | Aug 2022 – May 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm leading-relaxed">
                <li>Developed responsive web interfaces using HTML, CSS, Bootstrap, and React.</li>
                <li>Taught web design workshops, mentoring interns in creating web projects.</li>
              </ul>
              <p className="text-xs text-[#d4af37]/80 font-mono">HTML · CSS · JavaScript · React.js</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2
            className="text-2xl font-bold text-[#d4af37] mb-5 pb-2 border-b border-[#c9a84c]/20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Education
          </h2>
          <div className="space-y-3 text-[#c4b8a8] text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <p><span className="text-[#f5f0e8] font-medium">B. Eng Civil Engineering</span> — Covenant University, Nigeria</p>
              <span className="text-[#a89b8c]">2015 – 2020</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <p><span className="text-[#f5f0e8] font-medium">Secondary School</span> — Winners International College Oyo, Ibadan, Oyo State, Nigeria</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2
            className="text-2xl font-bold text-[#d4af37] mb-5 pb-2 border-b border-[#c9a84c]/20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#c4b8a8]">
            <div>
              <span className="text-[#d4af37] font-medium">Languages:</span> JavaScript/TypeScript, C#, HTML/CSS
            </div>
            <div>
              <span className="text-[#d4af37] font-medium">Frameworks:</span> Node.js/Express, React/Next.js, Flutter
            </div>
            <div>
              <span className="text-[#d4af37] font-medium">Databases:</span> MongoDB, MySQL, PostgreSQL
            </div>
            <div>
              <span className="text-[#d4af37] font-medium">Other:</span> WordPress, ASP.NET Core, EF Core
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2
            className="text-2xl font-bold text-[#d4af37] mb-5 pb-2 border-b border-[#c9a84c]/20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Certifications & Achievements
          </h2>
          <ul className="list-disc list-inside space-y-1 text-[#c4b8a8] text-sm">
            <li>Java Programming Language Training Certification — Parach Computers (2021)</li>
            <li>Web Design Certification — SQI College of ICT (2023)</li>
            <li>JavaScript and Firebase Certification — SQI College of ICT (2024)</li>
            <li>MERN Stack Certification — SQI College of ICT (2024)</li>
          </ul>
        </section>

        {/* Back to Portfolio */}
        <div className="pt-8 border-t border-[#c9a84c]/20 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] hover:bg-[#d4af37] text-[#0f0a07] font-bold rounded-full transition-all duration-200"
          >
            <Globe size={18} />
            Back to Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
