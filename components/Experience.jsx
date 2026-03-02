"use client";
import { Briefcase, Calendar } from "lucide-react";
import { useReveal } from "@/components/useReveal";

const experiences = [
  {
    company: "DSHGSonic",
    role: "Full Stack Developer",
    period: "2024 – Present",
    current: true,
    color: "border-accent/40 bg-accent/5",
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
    color: "border-gray-200 dark:border-gray-800",
    points: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Assisted in building dynamic UI components using React.js and Next.js.",
      "Followed coding standards and best practices in a professional development environment.",
      "Worked closely with senior developers to understand real-world project workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">03.</span>
          <span className="font-mono text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">Experience</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-16">
          Where I&apos;ve <span className="text-gradient">Worked</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-accent via-gray-300 dark:via-gray-700 to-transparent md:left-[31px]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal reveal-left delay-${i + 1} relative pl-16 md:pl-20`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-5 top-6 w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${exp.current
                    ? "bg-accent border-accent shadow-[0_0_16px_rgba(0,255,148,0.6)]"
                    : "bg-white dark:bg-[#060810] border-gray-300 dark:border-gray-600"
                  }`}>
                  {exp.current
                    ? <span className="w-2.5 h-2.5 rounded-full bg-black" />
                    : <span className="w-2 h-2 rounded-full bg-gray-400" />
                  }
                </div>

                {/* Card */}
                <div className={`p-7 rounded-2xl border ${exp.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/20`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Briefcase size={15} className="text-accent" />
                        <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl">{exp.role}</h3>
                      </div>
                      <p className="font-body font-semibold text-accent text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-accent/15 text-accent font-mono text-xs border border-accent/30 animate-pulse">
                          ● Current
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 font-mono text-sm text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/80 px-3 py-1.5 rounded-full">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-accent shrink-0 mt-1.5 text-xs">▸</span>
                        <span className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{point}</span>
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
