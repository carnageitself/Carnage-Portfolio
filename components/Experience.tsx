"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";
import { DirectionAwareHover } from "./ui/DirectionAware";
import ayurgrid from "@/public/ayurgrid.png";
import sartha from "@/public/sartha.png";
import tcet from "@/public/tcet.png";

const content = [
  // {
  //   title: "Chief Technology Officer",
  //   company: "Five Line Healthcare",
  //   dates: "02/2024 - 05/2024",
  //   description: (
  //     <div className="">
  //       <li>
  //         Provided technical leadership to ensure platform scalability, backend
  //         efficiency, and alignment with business goals.
  //       </li>
  //       <li>
  //         Advised the team on website optimization with advanced caching, API
  //         integration, and microservices.
  //       </li>
  //       <li>
  //         Streamlined client-doctor matching through automated workflows and
  //         secure data protocols to improve healthcare access.
  //       </li>
  //     </div>
  //   ),
  //   content: (
  //     <Image
  //       src={ayurgrid}
  //       alt=""
  //       className="object-contain w-full h-full absolute overflow-hidden top-0 left-0"
  //     />
  //   ),
  //   companyName: "",
  //   companyLink: "https://www.ayurgrid.com",
  //   companyLogo: "",
  // },
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
      <Image
        src={sartha}
        alt=""
        className="object-contain w-full h-full absolute overflow-hidden top-0 left-0"
      />
    ),
    companyName: "",
    companyLink: "https://www.sartha.in",
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
      <Image
        src={tcet}
        alt=""
        className="object-contain w-full h-full absolute overflow-hidden top-0 left-0"
      />
    ),
    companyName: "",
    companyLink: "https://www.tcetmumbai.in",
    companyLogo: "",
  },
];
export function Experience() {
  return (
    <div className="" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>
      <div className="mt-20 mx-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
