"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/Tooltip";
import { LinkPreview } from "./ui/LinkPreview";
import { TextHoverEffect } from "./ui/TextHoverEffect";

const RecentProjects = () => {
  const icons = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: "/tail.svg",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: "/ts.svg",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: "/next.svg",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: "/three.svg",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: "/re.svg",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image: "/gsap.svg",
    },
  ];

  return (
    <div className="projects h-full">
      <div className="py-24">
        <h1 className="heading">
          Some of my <span className="text-purple">recent Projects</span>
        </h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 mx-10">
          {projects.map((item) => (
            <div key={item.id}>
              <CardContainer className="inter-var" key={item.id}>
                <CardBody className="relative group/card bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/20 shadow-card ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={item.img}
                      width="1000"
                      height="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4 flex items-center w-full justify-between"
                  >
                    <div className="gap-2 flex items-center w-[90%]">
                      <h1 className="truncate">{item.title}</h1>
                    </div>
                    {/* <Image src={yash} alt="" width="32" height="32" className=""/> */}
                    <></>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;