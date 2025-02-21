"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { ReactHTML } from "react";

export function Glowing() {
  const Frontend = [
    {
      id: "1",
      name: "Typescript",
    },
    {
      id: "2",
      name: "Javascript",
    },
    {
      id: "3",
      name: "SQL",
    },
    {
      id: "4",
      name: "Solidity",
    },
  ];

  const Backend = [
    {
      id: "1",
      name: "Next JS",
    },
    {
      id: "2",
      name: "React JS",
    },
    {
      id: "3",
      name: "Tailwind CSS",
    },
    {
      id: "4",
      name: "Bootstrap",
    },
    {
      id: "5",
      name: "Vite JS",
    },
    {
      id: "6",
      name: "Framer Motion",
    },
  ];

  const Data = [
    {
      id: "1",
      name: "Foundation of Data Analytics",
    },
    {
      id: "2",
      name: "Data Management for Analytics",
    },
    {
      id: "3",
      name: "Data Mining",
    },
    {
      id: "4",
      name: "Computational Visualisation for Analytics",
    },
  ];

  const Softwares = [
    {
      id: "1",
      name: "Foundation of Data Analytics",
    },
    {
      id: "2",
      name: "Data Management for Analytics",
    },
    {
      id: "3",
      name: "Data Mining",
    },
    {
      id: "4",
      name: "Computational Visualisation for Analytics",
    },
  ];

  const ProgrammingLanguage = [
    {
      id: "1",
      name: "Foundation of Data Analytics",
    },
    {
      id: "2",
      name: "Data Management for Analytics",
    },
    {
      id: "3",
      name: "Data Mining",
    },
    {
      id: "4",
      name: "Computational Visualisation for Analytics",
    },
  ];

  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mx-10">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Frontend Development"
        description="Running out of copy so I'll write anything."
        skills={Frontend}
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Backend Development"
        description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        skills={Backend}
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Programming Languages"
        description="It's the best money you'll ever spend"
        skills={ProgrammingLanguage}
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Data Analysis Tools"
        description="I'm not even kidding. Ask my mom if you don't believe me."
        skills={Data}
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Softwares & Technologies"
        description="I'm writing the code as I record this, no shit."
        skills={Softwares}
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  skills: { id: string; name: string }[];
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  skills,
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-center gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          {/* Icon and Title in the same line */}
          <div className="flex items-center gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <h3 className="text-xl font-semibold font-sans -tracking-4 md:text-2xl text-black dark:text-white">
              {title}
            </h3>
          </div>

          {/* Skills Below */}
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mt-3">
            {skills.map((item: any) => (
              <div
                className="p-2 bg-white/10 text-white text-[12px] rounded-lg"
                key={item.id}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};
