import nextjs from "@/public/next.png";
import firebase from "@/public/firebase.png";
import bootstrap from "@/public/bootstrap.png";
import git from "@/public/git.png";
import express from "@/public/expressJS.png";
import vite from "@/public/vite.png";
import mongodb from "@/public/mongodb.png";
import nodejs from "@/public/nodejs.png";
import reactjs from "@/public/reactjs.png";
import solidity from "@/public/solidity.png";
import tailwind from "@/public/tailwind.png";
import typescript from "@/public/typescript.png";
import threejs from "@/public/three.png";
import python from "@/public/python.png";
import tableau from "@/public/tableau.png";
import powerbi from "@/public/powerbi.png";
import mysql from "@/public/mysql.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

const icons = [
  {
    id: 1,
    name: "Tailwind CSS",
    designation: "Software Engineer",
    image: "/tail.svg",
  },
  {
    id: 2,
    name: "Typescript",
    designation: "Product Manager",
    image: "/ts.svg",
  },
  {
    id: 3,
    name: "Next JS",
    designation: "Data Scientist",
    image: "/next.svg",
  },
  {
    id: 4,
    name: "Three JS",
    designation: "UX Designer",
    image: "/three.svg",
  },
  {
    id: 5,
    name: "React JS",
    designation: "Soap Developer",
    image: "/re.svg",
  },
  {
    id: 6,
    name: "GSAP",
    designation: "The Explorer",
    image: "/gsap.svg",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: icons,
    link: "https://github.com/carnageitself",
    github: "https://github.com/carnageitself",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: icons,
    link: "https://github.com/carnageitself",
    github: "https://github.com/carnageitself",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: icons,
    link: "https://github.com/carnageitself",
    github: "https://github.com/carnageitself",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: icons,
    link: "https://github.com/carnageitself",
    github: "https://github.com/carnageitself",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: icons,
    link: "https://github.com/carnageitself",
    github: "https://github.com/carnageitself",
  },
  {
    id: 6,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: icons,
    link: "https://github.com/carnageitself",
    github: "https://github.com/carnageitself",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    title: "Github",
    href: "https://github.com/carnageitself",
  },
  {
    id: 2,
    img: "/twit.svg",
    title: "Github",
    href: "https://github.com/carnageitself",
  },
  {
    id: 3,
    img: "/link.svg",
    title: "Github",
    href: "https://github.com/carnageitself",
  },
  {
    id: 4,
    img: "/link.svg",
    title: "Github",
    href: "https://github.com/carnageitself",
  },
  {
    id: 5,
    img: "/link.svg",
    title: "Github",
    href: "https://github.com/carnageitself",
  },
];

export const Visualization = [
  {
    id: "1",
    name: "Power BI",
    icon: typescript,
  },
  {
    id: "2",
    name: "KPI Dashboards",
    icon: typescript,
  },
  {
    id: "3",
    name: "Matplotlib",
    icon: typescript,
  },
  {
    id: "3",
    name: "Plotly",
    icon: typescript,
  },
  {
    id: "4",
    name: "Seaborn",
    icon: typescript,
  },
  {
    id: "5",
    name: "Altair",
    icon: solidity,
  },
  {
    id: "6",
    name: "Plotly Dash",
    icon: typescript,
  },
  {
    id: "7",
    name: "Tableau",
    icon: typescript,
  },
];

export const CloudPlatforms = [
  {
    id: "1",
    name: "Amazon Web Services (AWS)",
    icon: nextjs,
  },
  {
    id: "2",
    name: "AWS S3",
    icon: reactjs,
  },
  {
    id: "3",
    name: "AWS Glue",
    icon: tailwind,
  },
  {
    id: "4",
    name: "AWS Athena",
    icon: bootstrap,
  },
  {
    id: "5",
    name: "AWS Quicksight",
    icon: vite,
  },
  {
    id: "6",
    name: "Firebase",
    icon: typescript,
  },
  {
    id: "7",
    name: "MongoDB Atlas",
    icon: typescript,
  },
  {
    id: "8",
    name: "MongoDB Compass",
    icon: typescript,
  },
  {
    id: "9",
    name: "Ethereum Blockchain",
    icon: typescript,
  },
];

export const ProgrammingAndTools = [
  {
    id: "1",
    name: "Python",
    icon: typescript,
  },
  {
    id: "2",
    name: "Pandas",
    icon: typescript,
  },
  {
    id: "3",
    name: "NumPy",
    icon: typescript,
  },
  {
    id: "4",
    name: "SciKit Learn",
    icon: typescript,
  },
  {
    id: "5",
    name: "SQL",
    icon: typescript,
  },
  {
    id: "6",
    name: "NoSQL",
    icon: typescript,
  },
  {
    id: "6",
    name: "JavaScript",
    icon: typescript,
  },
  {
    id: "7",
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: "8",
    name: "Solidity",
    icon: typescript,
  },
  {
    id: "9",
    name: "MySQL",
    icon: typescript,
  },
  {
    id: "10",
    name: "Microsoft SQL server",
    icon: typescript,
  },
  {
    id: "11",
    name: "Microsoft Excel",
    icon: typescript,
  },
  {
    id: "12",
    name: "Git/Github",
    icon: typescript,
  },
  {
    id: "13",
    name: "Figma",
    icon: typescript,
  },
];

export const WebDevelopment = [
  {
    id: "1",
    name: "React JS",
    icon: typescript,
  },
  {
    id: "2",
    name: "Node JS",
    icon: typescript,
  },
  {
    id: "3",
    name: "Express JS",
    icon: typescript,
  },
  {
    id: "4",
    name: "Vite JS",
    icon: typescript,
  },
  {
    id: "5",
    name: "Tailwind Css",
    icon: typescript,
  },
  {
    id: "6",
    name: "Three JS",
    icon: typescript,
  },
  {
    id: "7",
    name: "D3 JS",
    icon: typescript,
  },
  {
    id: "8",
    name: "Docker",
    icon: typescript,
  },
  {
    id: "9",
    name: "Next JS",
    icon: typescript,
  },
  {
    id: "10",
    name: "Metamask",
    icon: typescript,
  },
  {
    id: "11",
    name: "Hardhat",
    icon: typescript,
  },
  {
    id: "12",
    name: "Redux",
    icon: typescript,
  },
];

export const DataModeling = [
  {
    id: "1",
    name: "Predicitive Modelling",
    icon: typescript,
  },
  {
    id: "2",
    name: "Time Series Analysis",
    icon: typescript,
  },
  {
    id: "3",
    name: "Machine Learning",
    icon: typescript,
  },
  {
    id: "4",
    name: "Hypothesis Testing",
    icon: typescript,
  },
  {
    id: "5",
    name: "Statistical Analysis",
    icon: typescript,
  },
  {
    id: "6",
    name: "Exploratary Data Analysis (EDA)",
    icon: typescript,
  },
  {
    id: "7",
    name: "Explore Transform Load Pipelines (ETL)",
    icon: typescript,
  },
  {
    id: "8",
    name: "Neural Networks",
    icon: typescript,
  },
];
