"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Next.js Developer",
  "Node.js Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#00FF94 1px, transparent 1px), linear-gradient(90deg, #00FF94 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-4 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Sandip</span>
            <br />
            <span className="text-gray-900 dark:text-white">Palkar</span>
          </h1>

          {/* Typewriter */}
          <div
            className={`font-display text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6 h-10 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span>{displayed}</span>
            <span className="animate-blink text-accent">|</span>
          </div>

          {/* Summary */}
          <p
            className={`font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Full Stack Developer with 2+ years of experience building scalable web applications.
            Passionate about clean code, great UX, and AI-powered development workflows.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 mb-12 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-display font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-display font-semibold rounded-lg hover:border-accent dark:hover:border-accent hover:text-accent transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://github.com/PALKARSANDIP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandip-palkar-3a34b024b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sandippalkar72@gmail.com"
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <div className="ml-2 h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <span className="font-mono text-xs text-gray-500 dark:text-gray-500 tracking-widest">
              FOLLOW ME
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 animate-bounce">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
