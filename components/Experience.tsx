"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";
import sartha from "@/public/sartha.png";
import tcet from "@/public/tcet.png";
import { ColourfulText } from "./ui/ColorfulText";

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
          Led a technical team of 5 engineers, overseeing the design and
          development of a high-performance website that facilitated seamless
          student-teacher connectivity, improving student engagement by 20%
        </li>
        <li>
          Engineered the platform using the MERN stack, integrating Next.js,
          Tailwind CSS, and Figma for a fully responsive, SEO friendly UI/UX
        </li>
        <li>
          Automated backend workflows using NoSQL (Firebase & MongoDB), reducing
          manual data entry by 90%
        </li>
        <li>
          Collaborated with key stakeholders, aligning technical strategies with
          business goals, resulting in a 30% increase in operational efficiency
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
          Developed a college prediction model using statistical analysis, which
          was integrated into the university admission portal, boosting
          performance by 40%
        </li>
        <li>
          Conceptualized and built a CRM system leveraging the MERN stack,
          enabling university officials to track and resolve student inquiries
          65% faster, enhancing departmental responsiveness and student
          satisfaction
        </li>
        <li>
          Integrated Firebase to execute NoSQL queries and streamlined database
          management, simplifying user data handling and reducing administrative
          overhead
        </li>
        <li>
          Coordinated 20+ tech events and collaborated across departments to
          drive student engagement and data adoption
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
        <ColourfulText text="My Experience" />
      </h1>
      <div className="mt-20 mx-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
