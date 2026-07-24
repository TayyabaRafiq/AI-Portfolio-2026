// components/sections/Contact.tsx

"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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

// lucide-react v1 removed brand icons (including LinkedIn) entirely.
// Using a small inline SVG instead of adding a new icon-pack dependency.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

// Real contact details.
const EMAIL = "tayyabaaliowais@gmail.com";

const GITHUB_URL = "https://github.com/TayyabaRafiq";

const LINKEDIN_URL = "https://www.linkedin.com/in/tayyaba-rafiq-0652702bb/";

// Opens Gmail's web compose window directly (avoids the blank-tab issue
// some browsers, like Edge, have with mailto: links when no default
// desktop mail client is configured).
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}`;

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-card text-foreground px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent p-[1px]"
        >
          <div className="rounded-lg bg-background px-6 py-14 md:py-16 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let&apos;s Build Something{" "}
              <span className="text-primary">Intelligent</span>
            </h2>

            <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              I&apos;m open to opportunities, collaborations, and projects
              involving AI agents, RAG systems, Generative AI, and
              intelligent full-stack applications.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" })
                )}
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                <GithubIcon className="h-4 w-4" />
                View GitHub
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}