import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About));
const TechStack = dynamic(() => import("@/components/sections/TechStack").then((mod) => mod.TechStack));
const Experience = dynamic(() => import("@/components/sections/Experience").then((mod) => mod.Experience));
const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
      <Contact />
    </>
  );
}
