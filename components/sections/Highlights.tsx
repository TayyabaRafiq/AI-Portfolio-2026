// components/sections/Highlights.tsx

"use client";

import { motion } from "framer-motion";

export function Highlights() {
  return (
    <section className="bg-background text-foreground px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border border-border bg-card px-8 py-10 md:py-12 flex flex-col items-center text-center gap-3"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-5xl md:text-6xl font-bold tracking-tight">
            8+
          </span>
          <span className="text-lg md:text-xl font-semibold text-foreground">
            Projects Built
          </span>
          <span className="text-sm md:text-base text-muted-foreground max-w-md">
            AI, Web &amp; Full-Stack Applications
          </span>
        </motion.div>
      </div>
    </section>
  );
}