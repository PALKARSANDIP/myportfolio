"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass bg-white/80 dark:bg-[#080B10]/80 border-b border-gray-200/50 dark:border-gray-800/50 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(0,255,148,0.4)]">
            <Image
              src="/Image/avtar2.jpg"
              alt="Sandip Palkar Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-gradient">Sandip</span>
            <span className="text-gray-900 dark:text-white"> Palkar</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass bg-white/95 dark:bg-[#080B10]/95 border-b border-gray-200/50 dark:border-gray-800/50 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}