"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

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
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#00FF94 1px, transparent 1px), linear-gradient(90deg, #00FF94 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">

          {/* Available badge */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/25 bg-accent/5 mb-10
            transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="relative flex w-2.5 h-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-accent"></span>
            </span>
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1
            className={`font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
            <span className="text-gradient">Sandip</span>
            <br />
            <span className="text-gray-900 dark:text-white">Palkar</span>
          </h1>
          {/* Typewriter */}
          <div className={`font-display text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-7 h-9
            transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span>{displayed}</span>
            <span className="animate-blink text-accent ml-0.5">|</span>
          </div>

          {/* Summary */}
          <p className={`font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mb-10
            transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Full Stack Developer with <span className="text-accent font-medium">2 years</span> of experience building
            scalable, production-ready web applications. Passionate about clean code, great UX,
            and AI-powered development workflows.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap items-center gap-4 mb-12
            transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-black font-display font-bold rounded-xl
                hover:bg-accent-dark transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_8px_30px_rgba(0,255,148,0.35)]">
              View My Work
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-700
                text-gray-700 dark:text-gray-300 font-display font-semibold rounded-xl
                hover:border-accent dark:hover:border-accent hover:text-accent transition-all duration-200 hover:bg-accent/5">
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex items-center gap-4
            transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[
              { href: "https://github.com/PALKARSANDIP", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/sandip-palkar-3a34b024b/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:sandippalkar72@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400
                  hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent
                  hover:bg-accent/5 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5">
                <Icon size={18} />
              </a>
            ))}
            <div className="h-px w-10 bg-gray-300 dark:bg-gray-700" />
            <span className="font-mono text-xs text-gray-400 dark:text-gray-600 tracking-widest uppercase">Follow Me</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        {/* <div className="w-5 h-9 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div> */}
        <ArrowDown size={16} className="animate-bounce text-accent color-primary" />
      </div>
    </section>
  );
}
