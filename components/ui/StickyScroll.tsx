"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { PinContainer } from "./Pin";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    company: string;
    dates: string;
    description: React.ReactNode | any;
    content?: React.ReactNode | any;
    companyName: string;
    companyLink: string;
    companyLogo: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--black)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-between relative space-x-10 rounded-md w-full"
      ref={ref}
    >
      {/* Left side containing all the details (70% width) */}
      <div className="relative flex flex-col items-start w-[60%] px-4">
        <div className="w-full">
          {" "}
          {/* Updated: Removed max-width to use full space */}
          {content.map((item, index) => (
            <div key={item.title + index} className="mt-28 mb-32">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-slate-100 tracking-wider"
              >
                {item.title}
              </motion.h2>
              <motion.div className="flex items-center justify-between mt-5 ">
                <div className="text-xl">{item.company}</div>
                <div className="text-lg">{item.dates}</div>
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 w-full mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side containing the gradient (30% width) */}
      <div className="h-full w-[40%] sticky top-0 overflow-hidden hidden lg:flex items-center justify-center">
        <PinContainer>
          <div
            style={{ background: backgroundGradient }}
            className={cn(" h-80 w-96 rounded-md bg-white", contentClassName)}
          >
            {content[activeCard].content ?? null}
          </div>
        </PinContainer>
      </div>
    </motion.div>
  );
};
