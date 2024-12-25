"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";
import { DirectionAwareHover } from "./ui/DirectionAware";

const content = [
  {
    title: "Chief Technology Officer",
    company: "Five Line Healthcare",
    dates: "02/2024 - 05/2024",
    description: (
      <div className="">
        <li>
          Provided technical leadership to ensure platform scalability, backend
          efficiency, and alignment with business goals.
        </li>
        <li>
          Advised the team on website optimization with advanced caching, API
          integration, and microservices.
        </li>
        <li>
          Streamlined client-doctor matching through automated workflows and
          secure data protocols to improve healthcare access.
        </li>
      </div>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
    companyName: "sartha.in",
    companyLink: "",
    companyLogo: "",
  },
  {
    title: "Chief Technology Officer",
    company: "Sartha Education",
    dates: "08/2023 - 12/2023",
    description: (
      <div className="">
        <li>
          Integrated software solutions to link students with expert teachers
          and top ranked students.
        </li>
        <li>
          Designed and developed a user-friendly website using modern web
          frameworks such as Next.JS and MERN Stack.
        </li>
        <li>
          Enhanced Sartha Education's online presence by 40%, broadening
          audience reach.
        </li>
      </div>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white"></div>
    ),
    companyName: "",
    companyLink: "",
    companyLogo: "",
  },
  {
    title: "Technical Co-ordinator",
    company: "Thakur College of Engineering & Technology",
    dates: "08/2023 - 06/2024",
    description: (
      <div className="">
        <li>
          Collaborated with the college’s technical teams to identify and
          address software development needs, contributing to infrastructure
          improvements and enhancing project outcomes by 30%.
        </li>
        <li>
          Advised students on coding skills and innovative technologies like AI,
          DS, and AIML, preparing them for competitive careers.
        </li>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
    companyName: "",
    companyLink: "",
    companyLogo: "",
  },
];
export function Experience() {
  return (
    <div className="" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>
      <div className="mt-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
