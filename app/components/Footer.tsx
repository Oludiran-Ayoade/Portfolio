import { Code2, Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-green-400 font-mono font-bold hover:text-green-300 transition-colors"
        >
          <Code2 size={18} />
          <span className="text-sm">OAE</span>
        </a>

        <p className="text-gray-700 text-xs text-center font-mono">
          © {year} · Designed & Built by{" "}
          <span className="text-gray-500">Oludiran-Ayoade Olutimileyin</span>
        </p>

        <div className="flex items-center gap-4">
          {/* TODO: Replace YOUR_GITHUB_USERNAME with your actual GitHub username */}
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:ooludiranayoade@gmail.com"
            className="text-gray-700 hover:text-green-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
