import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-gray-500 dark:text-gray-500">
          © {year} <span className="text-gradient font-semibold">Sandip Palkar</span>. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/PALKARSANDIP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sandip-palkar-3a34b024b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:sandippalkar72@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
