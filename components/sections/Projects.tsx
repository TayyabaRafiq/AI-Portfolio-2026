// components/sections/Projects.tsx

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

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string; // leave undefined if not available yet
  liveUrl?: string; // leave undefined if not available yet
};

// Update project details and URLs here as real links become available.
const projects: Project[] = [
  {
    title: "Personal AI Employee / AI Agents",
    category: "AI Agents",
    description:
      "An autonomous AI agent system designed to handle tasks independently, combining reasoning, planning, and tool use to act like a digital employee.",
    technologies: ["Python", "AI Agents", "FastAPI"],
    // githubUrl: "",
    // liveUrl: "",
  },
  {
    title: "AI-Native Physical AI & Humanoid Robotics Textbook + RAG Chatbot",
    category: "RAG Systems",
    description:
      "An AI-native educational resource on physical AI and humanoid robotics, paired with a retrieval-augmented generation chatbot for interactive learning.",
    technologies: ["RAG", "Python", "Generative AI"],
    // githubUrl: "",
    // liveUrl: "",
  },
  {
    title: "Containerized Full-Stack AI Application",
    category: "Full-Stack Development",
    description:
      "A production-ready, containerized full-stack application integrating AI capabilities with a modern web frontend and backend architecture.",
    technologies: ["FastAPI", "Next.js", "Docker"],
    // githubUrl: "",
    // liveUrl: "",
  },
  {
    title: "AI Education Game — \"Don't Be a Yes-Bot!\"",
    category: "AI Education",
    description:
      "An interactive educational web game that teaches teenagers about AI sycophancy through engaging, hands-on gameplay mechanics.",
    technologies: ["JavaScript", "Game Design", "AI Literacy"],
    // githubUrl: "",
    liveUrl: "https://statuesque-empanada-cc286e.netlify.app/",
  },
];

export function Projects() {
  return (
    <section
      id="ai-projects"
      className="bg-background text-foreground px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-primary">AI Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            A selection of my strongest work across AI agents, RAG systems,
            generative AI, full-stack development, and AI education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="rounded-lg bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent p-[1px] transition-all hover:from-primary/50 hover:via-secondary/40 hover:shadow-[0_0_30px_-12px_var(--color-primary)]"
            >
              <div className="h-full rounded-lg bg-card p-6 flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                  {project.category}
                </span>

                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3 pt-2 mt-auto">
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