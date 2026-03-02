"use client";
import { ExternalLink, Github, Star } from "lucide-react";
import { useReveal } from "@/components/useReveal";

const projects = [
  {
    name: "marketing.inc",
    description: "Full-stack marketing platform built with Next.js, Node.js, and MongoDB. Features a responsive UI with scalable backend APIs designed for performance and growth.",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API"],
    live: "https://marketing.inc/",
    featured: true,
    color: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
  },
  {
    name: "docuPitch.com",
    description: "Document management platform with AI-based workflow integration. Built backend services for document handling and integrated intelligent automation features.",
    tags: ["Next.js", "Node.js", "AI Integration", "MongoDB"],
    live: "https://docupitch.com/",
    featured: true,
    color: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
  },
  {
    name: "thereIsSomeone.com",
    description: "End-to-end web application featuring user authentication, complete API handling, and database management. Solo-built from scratch.",
    tags: ["React.js", "Node.js", "MongoDB", "Auth"],
    live: "https://thereissomeone.com/",
    featured: true,
    color: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20",
  },
  {
    name: "dshgsonic.com",
    description: "Corporate website and internal tools with performance optimisation and deep backend integration. Contributed to SEO, sitemap generation, and metadata optimization.",
    tags: ["Next.js", "SEO", "Docker", "Performance"],
    live: "https://dshgsonic.com/",
    featured: false,
    color: "",
    border: "",
  },
  {
    name: "AI-Based Web Application",
    description: "Built prompt-based automation features using AI tools. Integrated frontend with backend APIs for seamless user experience and optimised development workflows.",
    tags: ["AI Prompt Engineering", "React.js", "Node.js", "Automation"],
    live: null,
    featured: false,
    color: "",
    border: "",
  },
];

export default function Projects() {
  const ref = useReveal();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-28 bg-gray-50/50 dark:bg-white/[0.01] relative">
      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">04.</span>
          <span className="font-mono text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">Projects</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
          Things I&apos;ve <span className="text-gradient">Built</span>
        </h2>
        <p className="reveal delay-1 font-body text-gray-600 dark:text-gray-400 mb-14 max-w-xl text-lg">
          Production-level applications — live, real users, real impact.
        </p>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <div
              key={project.name}
              className={`reveal delay-${i + 1} group relative p-7 rounded-2xl border bg-white dark:bg-white/[0.02]
                bg-gradient-to-br ${project.color} ${project.border}
                hover:border-accent dark:hover:border-accent hover:-translate-y-2
                transition-all duration-300 hover:shadow-xl dark:hover:shadow-black/30`}
            >
              {/* Top line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <Star size={16} className="text-accent group-hover:text-black transition-colors" />
                </div>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-accent transition-colors px-2.5 py-1 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent">
                    <ExternalLink size={12} />
                    Live
                  </a>
                )}
              </div>

              <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-3 group-hover:text-accent transition-colors duration-200">
                {project.name}
              </h3>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {others.map((project, i) => (
            <div
              key={project.name}
              className={`reveal delay-${i + 4} group p-6 rounded-xl border border-gray-200 dark:border-gray-800
                bg-white dark:bg-white/[0.02] hover:border-accent/50 dark:hover:border-accent/50
                transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors">
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal text-center">
          <a href="https://github.com/PALKARSANDIP" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700
              font-display font-medium text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent
              hover:border-accent dark:hover:border-accent hover:bg-accent/5 transition-all duration-200 group">
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
