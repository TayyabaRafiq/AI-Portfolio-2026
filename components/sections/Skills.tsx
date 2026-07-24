// components/sections/Skills.tsx

"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Code2, Database, Wrench } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: typeof Sparkles;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Generative AI",
    icon: Sparkles,
    skills: [
      "Generative AI",
      "AI Agents",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "LLM Applications",
    ],
  },
  {
    title: "Programming & Backend",
    icon: Terminal,
    skills: ["Python", "FastAPI", "REST APIs", "Node.js"],
  },
  {
    title: "Frontend & Web",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "AI & Data Infrastructure",
    icon: Database,
    skills: ["Qdrant", "Neon PostgreSQL", "Cohere", "OpenAI Agents SDK"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Docker", "Git & GitHub", "Vercel", "Hugging Face", "Linux / WSL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-card text-foreground px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            A focused toolkit spanning AI systems, full-stack development,
            and the infrastructure that connects them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="rounded-lg bg-background border border-border overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-transparent" />

              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <category.icon className="h-5 w-5 text-secondary" />
                  <h3 className="text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}