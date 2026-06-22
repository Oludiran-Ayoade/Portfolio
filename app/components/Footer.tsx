import { Code2, Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#1a3a1a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-white font-mono font-bold hover:text-amber-400 transition-colors"
        >
          <Code2 size={18} />
          <span className="text-sm">OAE</span>
        </a>

        <p className="text-white/60 text-xs text-center font-mono">
          © {year} · Designed & Built by{" "}
          <span className="text-white/80">Oludiran-Ayoade Olutimileyin</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Oludiran-Ayoade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-amber-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:ooludiranayoade@gmail.com"
            className="text-white/60 hover:text-amber-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
