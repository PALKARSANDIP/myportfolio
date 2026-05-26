"use client";
import { GraduationCap, Trophy, Calendar, Building2 } from "lucide-react";
import { useReveal } from "@/components/useReveal";

const educationList = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "Zeal College of Engineering and Research Centre",
    period: "2020 – 2024",
  },
  {
    degree: "12th Grade — HSC Board",
    field: "Higher Secondary Certificate",
    institution: "Muktangan Eng. School & Jr. College",
    period: "2018 – 2020",
  },
  {
    degree: "10th Grade — SSC Board",
    field: "Secondary School Certificate",
    institution: "Balaji Madhyamik Vidyalaya",
    period: "—",
  },
];

const awards = [
  {
    title: "Best Performer Award",
    period: "Q1 2026",
    organization: "DSHGSonic",
    description:
      "Recognised for outstanding performance — delivering high-quality projects, driving GenAI integration, and making consistent contributions to production-level applications.",
    highlights: ["GenAI Integration", "High-Quality Delivery", "Production Projects"],
  },
];

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" ref={ref} className="py-28 relative">
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-accent text-sm tracking-widest">05.</span>
          <span className="font-mono text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">Education & Awards</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-16">
          Learning &amp; <span className="text-gradient">Recognition</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Education Timeline */}
          <div>
            <div className="reveal flex items-center gap-2 mb-8">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-gray-300 dark:via-gray-700 to-transparent" />

              <div className="space-y-8">
                {educationList.map((edu, i) => (
                  <div key={edu.degree} className={`reveal reveal-left delay-${i + 1} relative pl-12`}>
                    {/* Dot */}
                    <div className={`absolute left-3 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center
                      ${i === 0
                        ? "bg-accent border-accent shadow-[0_0_12px_rgba(0,255,148,0.5)]"
                        : "bg-white dark:bg-[#060810] border-gray-300 dark:border-gray-600"
                      }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-black" : "bg-gray-400"}`} />
                    </div>

                    {/* Content */}
                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-white/[0.02] hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5">
                      <div className="flex items-start justify-between gap-4 mb-1.5">
                        <h4 className="font-display font-bold text-gray-900 dark:text-white text-base">{edu.degree}</h4>
                        {edu.period !== "—" && (
                          <span className="flex items-center gap-1 font-mono text-xs text-gray-400 dark:text-gray-600 shrink-0">
                            <Calendar size={10} />
                            {edu.period}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm text-accent mb-1">{edu.field}</p>
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
                        <Building2 size={12} />
                        <p className="font-body text-xs">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Awards & Recognition */}
          <div>
            <div className="reveal flex items-center gap-2 mb-8">
              <Trophy size={18} className="text-amber-400" />
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl">Awards & Recognition</h3>
            </div>

            {awards.map((award, i) => (
              <div
                key={award.title}
                className={`reveal reveal-right delay-${i + 1} relative p-7 rounded-2xl border
                  border-amber-400/25 bg-gradient-to-br from-amber-500/8 to-yellow-500/5
                  hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1
                  hover:shadow-xl dark:hover:shadow-black/30`}
              >
                {/* Trophy icon with glow */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Trophy size={64} className="text-amber-400" />
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-amber-400/15 border border-amber-400/25 shrink-0">
                    <Trophy size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-0.5">{award.title}</h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-body font-semibold text-amber-400 text-sm">{award.organization}</span>
                      <span className="font-mono text-xs text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-full">
                        {award.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {award.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {award.highlights.map((tag) => (
                    <span key={tag}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-400">
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Motivational quote */}
            <div className="reveal delay-2 mt-6 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-white/[0.02]">
              <p className="font-body text-sm text-gray-500 dark:text-gray-500 italic leading-relaxed">
                &ldquo;Passionate about building things that matter — from clean, scalable code to
                AI-powered features that push what&apos;s possible on the web.&rdquo;
              </p>
              <p className="font-mono text-xs text-accent mt-3">— Sandip Palkar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
