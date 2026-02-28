"use client";
import { useEffect, useRef, useState } from "react";
import { Code2, Layers, Zap, Globe } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Code2, label: "2+ Years", sub: "Professional Experience" },
  { icon: Layers, label: "6+ Apps", sub: "Production Deployed" },
  { icon: Zap, label: "AI Tools", sub: "Prompt Engineering" },
  { icon: Globe, label: "Full Stack", sub: "End-to-End Dev" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">01.</span>
          <span className="font-mono text-gray-500 dark:text-gray-500 text-sm tracking-widest uppercase">About Me</span>
          <div className="h-px flex-1 max-w-[80px] bg-gray-200 dark:bg-gray-800" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-6">
              Building things<br />
              <span className="text-gradient">for the web.</span>
            </h2>
            <div className="space-y-4 font-body text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a Full Stack Developer based in India with a passion for building fast, scalable,
                and user-friendly web applications. I graduated with a Bachelor of Engineering in 2024
                and have been working professionally since 2022.
              </p>
              <p>
                Currently at <span className="text-accent font-medium">DSHGSonic</span>, I develop
                and maintain 6+ production-level web applications using React.js, Next.js, and Node.js.
                I also work with AI-based prompt automation tools to streamline development workflows.
              </p>
              <p>
                I enjoy the full spectrum of web development — from crafting pixel-perfect UIs to
                designing RESTful APIs and optimizing application performance. I'm always looking for
                new challenges and opportunities to grow.
              </p>
            </div>

            {/* Photo */}
            <div className="mt-8">
              {!imgError ? (
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10">
                  <Image
                    src="/Image/SandipPalkar_Portfolio.jpg"
                    alt="Sandip Palkar"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                    priority
                  />
                </div>
              ) : (
                // Fallback if image not found
                <div className="w-48 h-48 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center text-center p-4 text-gray-400 dark:text-gray-600">
                  <span className="text-3xl mb-2">📸</span>
                  <span className="font-mono text-xs">Image not found</span>
                  <span className="font-mono text-xs text-accent mt-1">/public/Image/SandipPalkar.jpeg</span>
                </div>
              )}
            </div>
          </div>

          {/* Stats grid */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-accent dark:hover:border-accent bg-gray-50 dark:bg-white/[0.02] hover:bg-accent/5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <item.icon size={24} className="text-accent mb-4" />
                  <div className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-sm text-gray-500 dark:text-gray-500">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="mt-6 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/[0.02]">
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm tracking-wide uppercase">
                Quick Info
              </h3>
              <dl className="space-y-2.5">
                {[
                  ["Email", "sandippalkar72@gmail.com"],
                  ["Phone", "+91 876 7505569"],
                  ["Location", "India"],
                  ["Education", "B.E. (2024)"],
                ].map(([key, val]) => (
                  <div key={key} className="flex items-center gap-3">
                    <dt className="font-mono text-xs text-gray-500 dark:text-gray-500 w-20 shrink-0">{key}</dt>
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