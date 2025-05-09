"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ThreeDCard";
import { AnimatedTooltip } from "./Tooltip";
import { LinkPreview } from "./LinkPreview";
import github from "@/public/github.png";
import { ColourfulText } from "./ColorfulText";

export default function HeroParallax() {
  return (
    <div className="projects h-full">
      <div className="py-24">
        <h1 className="heading">
          <ColourfulText text="My Projects" />
        </h1>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mx-10">
          {projects.map((item) => (
            <div key={item.id}>
              <CardContainer className="inter-var">
                <CardBody className="relative group/card bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/20 shadow-card">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={item.img}
                      width="1000"
                      height="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={item.title || "Project image"}
                    />
                    <div className="absolute inset-0 flex justify-end m-2">
                      <button
                        onClick={() => window.open(item.github, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        aria-label="View source code on GitHub"
                      >
                        <Image
                          src={github}
                          alt="GitHub"
                          className="w-full h-full p-1 object-contain"
                        />
                      </button>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4 flex items-center w-full justify-between"
                  >
                    <div className="gap-2 flex items-center w-[90%]">
                      <h1 className="truncate">{item.title}</h1>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
                  >
                    <p className="line-clamp-6">{item.des}</p>
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={50}
                      className="py-2 rounded-xl text-xs font-normal flex gap-2"
                    >
                      <AnimatedTooltip items={item.iconLists} />
                    </CardItem>
                    <CardItem
                      translateZ={60}
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <LinkPreview url={item.link}>Live Preview</LinkPreview>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
