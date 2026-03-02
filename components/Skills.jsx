"use client";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/components/useReveal";

const skillGroups = [
  {
    category: "Frontend",
    emoji: "🎨",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-400/50",
    barColor: "bg-blue-400",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    color: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20 hover:border-green-400/50",
    barColor: "bg-accent",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 78 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "DevOps & Tools",
    emoji: "🛠️",
    color: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-500/20 hover:border-orange-400/50",
    barColor: "bg-orange-400",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "SEO Optimization", level: 72 },
    ],
  },
  {
    category: "Other",
    emoji: "✨",
    color: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20 hover:border-purple-400/50",
    barColor: "bg-purple-400",
    skills: [
      { name: "AI Prompt Engineering", level: 95 },
      { name: "Dynamic Sitemaps", level: 80 },
      { name: "Performance Optimization", level: 78 },
    ],
  },
];

const techBadges = [
  "React.js", "Next.js", "Node.js", "MongoDB", "JavaScript",
  "HTML5", "CSS3", "Tailwind CSS", "Docker", "Git",
  "GitHub", "REST APIs", "SEO", "AI Tools", "Vercel",
];

function SkillBar({ name, level, barColor, animate }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm text-gray-700 dark:text-gray-300">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();
  const barsRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setBarsVisible(true); },
      { threshold: 0.1 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 bg-gray-50/50 dark:bg-white/[0.01] relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">02.</span>
          <span className="font-mono text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">Skills</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
          My Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="reveal delay-1 font-body text-gray-600 dark:text-gray-400 mb-12 max-w-xl text-lg">
          Technologies I use daily to build production-grade full stack applications.
        </p>

        {/* Badge Cloud */}
        <div className="flex flex-wrap gap-3 mb-16">
          {techBadges.map((tech, i) => (
            <span
              key={tech}
              className={`reveal delay-${Math.min(i % 6 + 1, 6)} px-4 py-2 rounded-full font-mono text-sm border cursor-default
                border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300
                hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent
                hover:bg-accent/5 hover:scale-105 transition-all duration-200`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Skill cards */}
        <div ref={barsRef} className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal delay-${gi + 1} p-7 rounded-2xl border bg-gradient-to-br ${group.color} ${group.border}
                transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg">{group.category}</h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} barColor={group.barColor} animate={barsVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
