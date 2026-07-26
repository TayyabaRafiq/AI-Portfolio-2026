// components/sections/Hero.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const roles = [
  "AI Developer",
  "AI Engineer",
  "Full Stack AI Developer",
  "Prompt Engineer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      id="home"
      className="min-h-screen bg-background text-foreground flex items-center justify-center px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left: Text content (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-6 max-w-2xl lg:text-left lg:max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Tayyaba Rafiq
          </h1>

          <div className="h-8 md:h-9 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl text-primary font-semibold"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-lg md:text-xl text-secondary font-medium leading-snug">
            Building AI Agents, RAG Systems &amp; Intelligent Web Applications
          </p>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed lg:mx-0">
            I build intelligent applications using Python, FastAPI, Next.js,
            and Generative AI. My work includes AI agents, RAG systems,
            educational AI experiences, technical documentation, and
            production-ready full-stack applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 lg:justify-start">
            <a
              href="#ai-projects"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              View My AI Projects
            </a>
            <a
              href="/Tayyaba-Rafiq-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full sm:w-auto"
              )}
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right: Portfolio photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="shrink-0"
        >
          <div className="relative h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent p-[3px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
              <Image
                src="/tayyaba-rafiq-ai-engineer.png"
                alt="Tayyaba Rafiq - AI Developer and AI Engineer"
                fill
                priority
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}