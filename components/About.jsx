"use client";
import { useState } from "react";
import { Code2, Layers, Zap, Globe } from "lucide-react";
import Image from "next/image";
import { useReveal } from "@/components/useReveal";

const highlights = [
  { icon: Code2, label: "2 Years", sub: "Professional Experience" },
  { icon: Layers, label: "6+ Apps", sub: "Production Deployed" },
  { icon: Zap, label: "AI Tools", sub: "Prompt Engineering" },
  { icon: Globe, label: "Full Stack", sub: "End-to-End Dev" },
];

export default function About() {
  const ref = useReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" ref={ref} className="py-28 relative">
      {/* Section bg accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">01.</span>
          <span className="font-mono text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">About Me</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal reveal-left font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-8 leading-tight">
              Building things<br />
              <span className="text-gradient">for the web.</span>
            </h2>

            <div className="space-y-4 font-body text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="reveal delay-1">
                I&apos;m a Full Stack Developer based in India with a passion for building fast, scalable,
                and user-friendly web applications. I graduated with a Bachelor of Engineering in 2024
                and have been working professionally since 2022.
              </p>
              <p className="reveal delay-2">
                Currently at <span className="text-accent font-semibold">DSHGSonic</span>, I develop
                and maintain 6+ production-level web applications using React.js, Next.js, and Node.js.
                I also work with AI-based prompt automation tools to streamline development workflows.
              </p>
              <p className="reveal delay-3">
                I enjoy the full spectrum of web development — from crafting pixel-perfect UIs to
                designing RESTful APIs and optimizing application performance.
              </p>
            </div>

            {/* Photo */}
            <div className="reveal delay-4 mt-10">
              <div className="relative w-52 h-52 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl shadow-accent/10 hover:border-accent hover:shadow-accent/20 transition-all duration-300 group">
                <Image
                  src={imgError ? "/avatar_curly.svg" : "/Image/image.jpeg"}
                  alt="Sandip Palkar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={() => setImgError(true)}
                  priority
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal delay-${i + 1} group p-6 rounded-2xl border border-gray-200 dark:border-gray-800
                    hover:border-accent dark:hover:border-accent bg-gray-50/80 dark:bg-white/[0.02]
                    hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1`}
                >
                  <item.icon size={22} className="text-accent mb-4" />
                  <div className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-1">{item.label}</div>
                  <div className="font-body text-sm text-gray-500 dark:text-gray-500">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="reveal delay-5 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-white/[0.02]">
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-5 text-xs tracking-widest uppercase text-accent">
                Quick Info
              </h3>
              <dl className="space-y-3">
                {[
                  ["Email", "sandippalkar72@gmail.com"],
                  ["Phone", "+91 876 7505569"],
                  ["Location", "India 🇮🇳"],
                  ["Education", "B.E. Graduate (2024)"],
                  ["Status", "Open to Work ✅"],
                ].map(([key, val]) => (
                  <div key={key} className="flex items-start gap-4">
                    <dt className="font-mono text-xs text-gray-400 dark:text-gray-600 w-24 shrink-0 pt-0.5">{key}</dt>
                    <dd className="font-body text-sm text-gray-700 dark:text-gray-300">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
