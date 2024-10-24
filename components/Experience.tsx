"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";
import { DirectionAwareHover } from "./ui/DirectionAware";

const content = [
  {
    title: "Chief Technology Officer",
    company: "Sartha Education",
    dates: "08/2023 - 12/2023",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
    company: "Five Line Healthcare",
    dates: "02/2024 - 06/2024",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
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
    dates: "01/2023 - 06/2024",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
    <div className="">
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>
      <div className="mt-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
