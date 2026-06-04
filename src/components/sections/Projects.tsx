"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";

const tagIconMap: Record<string, string> = {
  "Next.js": "nextdotjs",
  "React": "react",
  "Python": "python",
  "FastAPI": "fastapi",
  "Three.js": "threedotjs",
  "TypeScript": "typescript",
  "PostgreSQL": "postgresql",
  "Laravel": "laravel",
  "Inertia.js": "inertia",
  "Azure Entra ID": "microsoftazure",
  "Microsoft Graph API": "microsoft",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "Tailwind CSS": "tailwindcss",
  "Supabase": "supabase",
  "Framer Motion": "framer",
  "ChatGPT / LLMs": "openai",
  "Power Automate": "powerautomate",
  "Power Apps": "powerapps",
  "Microsoft 365": "microsoft365",
  "SharePoint": "microsoftsharepoint",
  "Microsoft Excel": "microsoftexcel",
  "JavaScript": "javascript",
  "Power Query": "microsoft",
};

export function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-y border-line bg-white/[0.01] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="ambient-brown-glow absolute left-1/4 top-1/2 h-[550px] w-[550px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've worked on"
          subtitle="A few things I've built and shaped. Each starts from a real problem and ends in something people use."
        />

        <ScrollReveal stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {site.projects.map((project) => (
            <ScrollReveal
              as="article"
              key={project.title}
              className="glass-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(216,48,26,0.15)]"
            >
              {/* Visual */}
              <div className="stripe-pattern relative flex aspect-[16/9] overflow-hidden items-center justify-center border-b border-line bg-surface-2">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-muted">
                    Preview coming
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {project.title}
                  </h3>
                  {project.placeholder ? (
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-display text-[9px] uppercase tracking-widest text-accent">
                      Draft
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                {project.contributions && (
                  <ul className="mt-4 flex-1 list-outside list-disc pl-4 text-xs leading-relaxed text-muted/90 text-left">
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx} className="mb-1.5 pl-1">
                        {contribution}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 rounded-full border border-line bg-white/5 px-3 py-1 font-display text-[10px] uppercase tracking-wider text-white transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10"
                    >
                      {tagIconMap[tag] && (
                        <img 
                          src={`https://cdn.simpleicons.org/${tagIconMap[tag]}/white`} 
                          alt="" 
                          className="h-3 w-3 object-contain opacity-80"
                        />
                      )}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {project.href || project.repo ? (
                  <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-widest">
                    {project.href ? (
                      <a href={project.href} className="text-accent hover:text-white">
                        View →
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a href={project.repo} className="text-muted hover:text-white">
                        Code →
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
