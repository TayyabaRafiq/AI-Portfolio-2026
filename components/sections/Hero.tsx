// components/sections/Hero.tsx

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Tayyaba Rafiq
        </h1>

        <div className="h-8 md:h-9 flex items-center justify-center">
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

        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          I build intelligent applications using Python, FastAPI, Next.js,
          and Generative AI. My work includes AI agents, RAG systems,
          educational AI experiences, technical documentation, and
          production-ready full-stack applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button size="lg" className="w-full sm:w-auto">
            View My AI Projects
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Download Resume
          </Button>
        </div>
      </motion.div>
    </main>
  );
}