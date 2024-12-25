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

export function Wobble() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

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

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
      id="about"
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        ></TextRevealCard>
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
        <Image
          src={profilepic}
          alt=""
          className="object-cover w-full h-full absolute overflow-hidden top-0 left-0"
        />
      </WobbleCard>
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <></>
      </WobbleCard> */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <CardSpot />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <MaskContainer
          revealText={
            <div className="max-w-4xl mx-10 text-slate-800 text-center flex flex-col gap-3">
              <h1 className="text-4xl font-bold">
                <span className="text-5xl text-red-600 tracking-tight">N</span>
                ortheastern University
              </h1>
              <h1 className="text-md">
                Master of Science in Data Analytics Engineering
              </h1>
              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mt-5">
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
  );
}
