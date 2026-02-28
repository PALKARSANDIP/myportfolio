"use client";
import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "DSHGSonic",
    role: "Full Stack Developer",
    period: "2024 – Present",
    current: true,
    points: [
      "Developed and maintained 6+ production-level web applications using React.js, Next.js and Node.js.",
      "Designed RESTful APIs and integrated MongoDB database for dynamic data handling.",
      "Implemented AI-based prompt automation tools to optimize development workflow.",
      "Implemented SEO improvements, including dynamic sitemap generation and metadata optimization.",
      "Containerized applications using Docker for consistent development and deployment environments.",
      "Improved application performance and responsiveness across devices.",
    ],
  },
  {
    company: "Orange ITech",
    role: "Frontend Developer (Internship)",
    period: "2022 – 2023",
    current: false,
    points: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Assisted in building dynamic UI components using React.js and Next.js.",
      "Followed coding standards and best practices in a professional development environment.",
      "Worked closely with senior developers to understand real-world project workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">03.</span>
          <span className="font-mono text-gray-500 dark:text-gray-500 text-sm tracking-widest uppercase">Experience</span>
          <div className="h-px flex-1 max-w-[80px] bg-gray-200 dark:bg-gray-800" />
        </div>

        <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-12">
          Where I've <span className="text-gradient">Worked</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:left-8" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative pl-16 md:pl-20 transition-all duration-700 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${exp.current
                      ? "bg-accent border-accent shadow-[0_0_12px_rgba(0,255,148,0.5)]"
                      : "bg-white dark:bg-[#080B10] border-gray-300 dark:border-gray-700"
                    }`}
                >
                  {exp.current && <span className="w-2 h-2 rounded-full bg-black" />}
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02] hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-accent" />
                        <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="font-body font-medium text-accent">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-xs border border-accent/30">
                          Current
                        </span>
                      )}
                      <span className="font-mono text-sm text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-accent mt-1.5 shrink-0 text-xs">▸</span>
                        <span className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
