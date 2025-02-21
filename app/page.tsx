"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Techstack } from "@/components/TechStack";
import { Wobble } from "@/components/Wobble";
import HeroParallax from "@/components/ui/Parallax";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" w-full z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Wobble />
        <HeroParallax />
        {/* <RecentProjects /> */}
        <Experience />
        <Techstack />

        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
