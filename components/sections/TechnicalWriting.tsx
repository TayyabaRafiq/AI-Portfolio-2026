// components/sections/TechnicalWriting.tsx

"use client";

import { motion } from "framer-motion";
import { Bot, Database, Sparkles, Cpu } from "lucide-react";

type WritingTopic = {
  icon: typeof Bot;
  title: string;
  description: string;
  tags: string[];
};

const topics: WritingTopic[] = [
  {
    icon: Bot,
    title: "AI Agents & Agentic AI",
    description:
      "Exploring how autonomous agents reason, plan, and take action — from core concepts to practical design patterns.",
    tags: ["AI Agents", "Agentic AI", "Automation"],
  },
  {
    icon: Database,
    title: "RAG Systems",
    description:
      "Breaking down retrieval-augmented generation pipelines and how they ground AI responses in real, relevant context.",
    tags: ["RAG", "Vector Search", "LLMs"],
  },
  {
    icon: Sparkles,
    title: "Generative AI & Prompt Engineering",
    description:
      "Writing about effective prompting techniques and how generative AI can be applied to real-world problems.",
    tags: ["Generative AI", "Prompt Engineering", "LLM Applications"],
  },
  {
    icon: Cpu,
    title: "Physical AI & Humanoid Robotics",
    description:
      "Documenting the emerging intersection of AI, robotics, and physical systems as intelligent technology moves into the real world.",
    tags: ["Physical AI", "Robotics", "Emerging Tech"],
  },
];

export function TechnicalWriting() {
  return (
    <section
      id="technical-writing"
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
            Technical <span className="text-primary">Writing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            I write and document complex AI and software concepts in a
            clear, practical way — with a focus on AI agents, RAG systems,
            Generative AI, and emerging intelligent technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="rounded-lg bg-card border border-border border-l-2 border-l-primary/60 p-6 flex flex-col gap-4 transition-colors hover:border-l-secondary"
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                <topic.icon className="h-5 w-5 text-secondary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground leading-snug">
                {topic.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/30 bg-background px-3 py-1 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}