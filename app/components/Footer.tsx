import { Code2, Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0c0a09] border-t border-[#292524]/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-green-400 font-mono font-bold hover:text-green-300 transition-colors"
        >
          <Code2 size={18} />
          <span className="text-sm">OAE</span>
        </a>

        <p className="text-gray-600 text-xs text-center font-mono">
          © {year} · Designed & Built by{" "}
          <span className="text-stone-600">Oludiran-Ayoade Olutimileyin</span>
        </p>

        <div className="flex items-center gap-4">
          {/* TODO: Replace Oludiran-Ayoade with your actual GitHub username */}
          <a
            href="https://github.com/Oludiran-Ayoade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:ooludiranayoade@gmail.com"
            className="text-gray-600 hover:text-green-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
