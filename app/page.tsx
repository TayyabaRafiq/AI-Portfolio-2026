import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Highlights } from "@/components/sections/Highlights";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Skills } from "@/components/sections/Skills";
import { TechnicalWriting } from "@/components/sections/TechnicalWriting";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Highlights />
      <MoreProjects />
      <Skills />
      <TechnicalWriting />
      <Contact />
    </>
  );
}