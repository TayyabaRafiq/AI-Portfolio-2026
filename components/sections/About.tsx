// components/sections/About.tsx

"use client";

import { motion } from "framer-motion";
import { Bot, Database, Sparkles, Code2 } from "lucide-react";

const focusAreas = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Designing and building autonomous AI agents that reason, plan, and complete tasks.",
  },
  {
    icon: Database,
    title: "RAG Systems",
    description:
      "Building retrieval-augmented generation pipelines for accurate, context-aware AI responses.",
  },
  {
    icon: Sparkles,
    title: "Generative AI & Prompt Engineering",
    description:
      "Crafting effective prompts and generative AI solutions for real-world applications.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Developing production-ready applications with FastAPI, Next.js, and modern web technologies.",
  },
];

export function About() {
  return (
    <section className="bg-background text-foreground px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            I&apos;m Tayyaba Rafiq, an AI Developer and AI Engineer focused on
            building intelligent, production-ready applications. I work
            across AI agents, RAG systems, generative AI, and prompt
            engineering, combining them with full-stack development using
            FastAPI and Next.js to create real, usable AI-powered products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-lg border border-border bg-card p-6 flex flex-col gap-3"
            >
              <area.icon className="h-6 w-6 text-secondary" />
              <h3 className="text-lg font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}