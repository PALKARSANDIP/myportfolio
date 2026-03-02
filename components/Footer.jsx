import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <p className="font-body text-sm text-gray-500 dark:text-gray-500">
            © {year} <span className="text-gradient font-semibold">Sandip Palkar</span>
          </p>
          <span className="hidden sm:block text-gray-300 dark:text-gray-700">·</span>
          <p className="font-body text-sm text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/PALKARSANDIP", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/sandip-palkar-3a34b024b/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:sandippalkar72@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-gray-400 hover:text-accent transition-all duration-200 hover:bg-accent/10 hover:scale-110">
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
