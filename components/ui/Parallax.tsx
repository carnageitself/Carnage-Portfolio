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

export const HeroParallax = ({}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 150]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-48">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              style={{ x: translateX }}
              className="group/product h-96 w-[30rem] relative flex-shrink-0"
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/20 shadow-card ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={item.img}
                      width="1000"
                      height="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                    <div className="absolute inset-0 flex justify-end m-2">
                      <div
                        onClick={() => window.open(item.github, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <Image
                          src={github}
                          alt="source code"
                          className="w-full h-full p-1 object-contain"
                        />
                      </div>
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
                      <LinkPreview url="https://github.com/carnageitself">
                        Live Preview
                      </LinkPreview>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-row  mb-48 space-x-20 ">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              style={{ x: translateXReverse }}
              className="group/product h-96 w-[30rem] relative flex-shrink-0"
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/20 shadow-card ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={item.img}
                      width="1000"
                      height="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                    <div className="absolute inset-0 flex justify-end m-2">
                      <div
                        onClick={() => window.open(item.github, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <Image
                          src={github}
                          alt="source code"
                          className="w-full h-full p-1 object-contain"
                        />
                      </div>
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
                      <LinkPreview url="https://github.com/carnageitself">
                        Live Preview
                      </LinkPreview>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-48">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              style={{ x: translateX }}
              className="group/product h-96 w-[30rem] relative flex-shrink-0"
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/20 shadow-card ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={item.img}
                      width="1000"
                      height="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                    <div className="absolute inset-0 flex justify-end m-2">
                      <div
                        onClick={() => window.open(item.github, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <Image
                          src={github}
                          alt="source code"
                          className="w-full h-full p-1 object-contain"
                        />
                      </div>
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
                      <LinkPreview url="https://github.com/carnageitself">
                        Live Preview
                      </LinkPreview>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        My Projects
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};
