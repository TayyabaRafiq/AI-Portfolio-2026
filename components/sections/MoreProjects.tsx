// components/sections/MoreProjects.tsx

"use client";

import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// lucide-react v1 removed brand icons (including GitHub) entirely.
// Using a small inline SVG instead of adding a new icon-pack dependency.
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

type MoreProject = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string; // leave undefined if not available yet
  liveUrl?: string; // leave undefined if not available yet
};

// Update project details and URLs here as real links become available.
const moreProjects: MoreProject[] = [
  {
    title: "Rental Car Marketplace",
    category: "Full-Stack Development",
    description:
      "A car rental marketplace web application with a content-managed catalog and category-based browsing.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    githubUrl: "https://github.com/TayyabaRafiq/tamplate7",
    liveUrl: "https://tamplate7.vercel.app/",
  },
  {
    title: "TodoFlow",
    category: "Full-Stack + AI Integration",
    description:
      "A task management application combining a full-stack architecture with AI chatbot integration for a smarter workflow experience.",
    technologies: ["Next.js", "Express", "Prisma", "Neon PostgreSQL", "AI Chatbot"],
    githubUrl: "https://github.com/TayyabaRafiq/Hackathon-2",
  },
  {
    title: "AI Engineer Portfolio Website",
    category: "Full-Stack Development",
    description:
      "This portfolio itself — a production-ready site built to present my AI engineering and full-stack development work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export function MoreProjects() {
  return (
    <section className="bg-background text-foreground px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            More <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
            Additional work showing my broader full-stack and applied
            development experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {moreProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="rounded-lg bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent p-[1px]"
            >
              <div className="h-full rounded-lg bg-card p-5 flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                  {project.category}
                </span>

                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "default", size: "sm" })
                        )}
                      >
                        <SquareArrowOutUpRight className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" })
                        )}
                      >
                        <GithubIcon className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}