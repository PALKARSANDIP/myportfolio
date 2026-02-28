

"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 & CSS3", level: 92 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 85 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "SEO Optimization", level: 80 },
    ],
  },
  {
    category: "Other",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    skills: [
      { name: "AI Prompt Engineering", level: 85 },
      { name: "Dynamic Sitemaps", level: 80 },
      { name: "Performance Optimization", level: 78 },
    ],
  },
];

const techBadges = [
  "React.js", "Next.js", "Node.js", "MongoDB", "JavaScript",
  "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Docker",
  "Git", "GitHub", "REST APIs", "SEO", "AI Tools",
];

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-24 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">02.</span>
          <span className="font-mono text-gray-500 dark:text-gray-500 text-sm tracking-widest uppercase">Skills</span>
          <div className="h-px flex-1 max-w-[80px] bg-gray-200 dark:bg-gray-800" />
        </div>

        <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
          My Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="font-body text-gray-600 dark:text-gray-400 mb-12 max-w-xl">
          Technologies I work with daily to build production-grade full stack applications.
        </p>

        {/* Tech badge cloud */}
        <div className="flex flex-wrap gap-3 mb-14">
          {techBadges.map((tech, i) => (
            <span
              key={tech}
              className={`px-4 py-2 rounded-full font-mono text-sm border transition-all duration-300 cursor-default
                border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300
                hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent hover:scale-105
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`p-6 rounded-2xl border bg-gradient-to-br ${group.color} ${group.border}
                transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${gi * 120}ms` }}
            >
              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-5 text-lg">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="font-mono text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: visible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
