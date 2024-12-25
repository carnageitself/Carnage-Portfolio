"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import { Experience } from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Techstack } from "@/components/TechStack";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { Wobble } from "@/components/Wobble";
import { HeroParallax } from "@/components/ui/Parallax";
import { Bento } from "@/components/Grid";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Wobble />
        <HeroParallax />
        {/* <RecentProjects /> */}
        <Experience />
        <Techstack />
        <Bento />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
