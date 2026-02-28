"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "marketing.inc",
    description:
      "Full-stack marketing platform built with Next.js, Node.js, and MongoDB. Features a responsive UI with scalable backend APIs designed for performance and growth.",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API"],
    live: "https://marketing.inc/",
    github: null,
    featured: true,
  },
  {
    name: "docuPitch.com",
    description:
      "Document management platform with AI-based workflow integration. Built backend services for document handling and integrated intelligent automation features.",
    tags: ["Next.js", "Node.js", "AI Integration", "MongoDB"],
    live: "https://docupitch.com/",
    github: null,
    featured: true,
  },
  {
    name: "thereIsSomeone.com",
    description:
      "End-to-end web application featuring user authentication, complete API handling, and database management. Solo-built from scratch.",
    tags: ["React.js", "Node.js", "MongoDB", "Auth"],
    live: "https://thereissomeone.com/",
    github: null,
    featured: true,
  },
  {
    name: "dshgsonic.com",
    description:
      "Corporate website and internal tools with performance optimisation and deep backend integration. Contributed to SEO, sitemap generation, and metadata optimization.",
    tags: ["Next.js", "SEO", "Docker", "Performance"],
    live: "https://dshgsonic.com/",
    github: null,
    featured: false,
  },
  {
    name: "AI-Based Web Application",
    description:
      "Built prompt-based automation features using AI tools. Integrated frontend with backend APIs for seamless user experience and optimised development workflows.",
    tags: ["AI Prompt Engineering", "React.js", "Node.js", "Automation"],
    live: null,
    github: null,
    featured: false,
  },
];

export default function Projects() {
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

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">04.</span>
          <span className="font-mono text-gray-500 dark:text-gray-500 text-sm tracking-widest uppercase">Projects</span>
          <div className="h-px flex-1 max-w-[80px] bg-gray-200 dark:bg-gray-800" />
        </div>

        <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
          Things I've <span className="text-gradient">Built</span>
        </h2>
        <p className="font-body text-gray-600 dark:text-gray-400 mb-12 max-w-xl">
          Production-level applications built solo at DSHGSonic. Each project is live and used by real users.
        </p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <div
              key={project.name}
              className={`group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02]
                hover:border-accent dark:hover:border-accent hover:-translate-y-1 transition-all duration-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="w-5 h-5 rounded-sm bg-accent" />
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-3 group-hover:text-accent transition-colors duration-200">
                {project.name}
              </h3>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {others.map((project, i) => (
            <div
              key={project.name}
              className={`group p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.02]
                hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/PALKARSANDIP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-medium text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors group"
          >
            <span>See more on GitHub</span>
            <Github size={16} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
