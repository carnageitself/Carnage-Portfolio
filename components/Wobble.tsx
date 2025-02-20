"use client";
import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import { CardSpot } from "./CardSpotlight";
import { MaskContainer } from "./ui/MaskEffect";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/TextRevealCard";
import Image from "next/image";
import profilepic from "@/public/yasshhh.jpg";
import { Vortex } from "./ui/Vortex";
import animationData from "@/data/confetti.json";
import { GridGlobe } from "./ui/GridGlobe";
import { Meteors } from "./ui/Meteors";

export function Wobble() {
  const courses1 = [
    {
      id: "1",
      name: "Internet Programming",
    },
    {
      id: "2",
      name: "Operating Systems",
    },
    {
      id: "3",
      name: "Real Time Operating Systems",
    },
    {
      id: "4",
      name: "Database Management & Systems",
    },
    {
      id: "5",
      name: "Advance Database & Management Systems",
    },
    {
      id: "6",
      name: "Cybersecurity & Laws",
    },
    {
      id: "7",
      name: "Programming for Problem Solving",
    },
  ];

  const courses2 = [
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

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full" id="about">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-clip- bg-gradient-to-b from-neutral-900 via-black to-black"
          className=""
        >
          <div className="noise absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
            style={{
              mask: `radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)`,
            }}
          ></div>
          {/* <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        > */}
          {/* <TextRevealCard
            text="You highlight the need"
            revealText="I provide the solution"
          ></TextRevealCard> */}
          {/* <TextRevealCard
            text="Highlight your need"
            revealText="I'll work on the solution"
          ></TextRevealCard> */}
          <TextRevealCard
            text="Just bring in your needs"
            revealText="I'll provide the solution"
          ></TextRevealCard>
          {/* </Vortex> */}
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          {/* <BackgroundGradientAnimation>
          {/* <div className="text-center flex items-center w-full h-full absolute justify-center flex-col z-40">
            <h1 className="text-3xl font-bold">Hi, I'm Yash !</h1>
            <MagicButton
              title={copied ? "My Resume!" : "My Resume!"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </BackgroundGradientAnimation> */}
          <h1 className="text-xl md:text-4xl font-bold text-white text-center py-8">
            I'm versatile with time zone communications
          </h1>
          <GridGlobe />
          <Meteors number={5} />
        </WobbleCard>
        {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <></>
      </WobbleCard> */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl flex-col">
              <h1 className="text-3xl font-bold">
                Let’s collaborate and bring your ideas to life!
              </h1>
              <MagicButton
                title={copied ? "Resume Downloaded!" : "My Resume!"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          </BackgroundGradientAnimation>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <MaskContainer
            revealText={
              <div className="max-w-4xl mx-10 text-black text-center flex flex-col gap-3">
                <h1 className="text-4xl font-bold">
                  <span className="text-5xl text-red-600 tracking-tight">
                    N
                  </span>
                  ortheastern University
                </h1>
                <h1 className="text-md mt-2 lg:mt-0">
                  Master of Science in Data Analytics Engineering
                </h1>
                <div className="flex flex-wrap justify-center gap-2 max-w-5xl mt-10 lg:mt-5">
                  {courses2.map((item) => (
                    <div
                      className="p-2 bg-black/10 text-black text-[12px] rounded-lg"
                      key={item.id}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <div className="max-w-4xl mx-10 text-white text-center flex flex-col gap-3">
              <h1 className="text-4xl font-bold">Mumbai University</h1>
              <h1 className="text-md">
                Bachelor of Engineering in Electronics Engineering
              </h1>
              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mt-5">
                {courses1.map((item) => (
                  <div
                    className="p-2 bg-white/10 text-white text-[12px] rounded-lg"
                    key={item.id}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </MaskContainer>
        </WobbleCard>
      </div>
    </div>
  );
}
