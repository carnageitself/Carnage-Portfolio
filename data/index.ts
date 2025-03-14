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

export const technologies = [
  {
    name: "typeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "firebase",
    icon: firebase,
  },

  {
    name: "Solidity",
    icon: solidity,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },

  {
    name: "Power Bi",
    icon: powerbi,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Vite JS",
    icon: vite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

export const Frontend = [
  {
    id: "1",
    name: "Typescript",
    icon: typescript,
  },
  {
    id: "2",
    name: "Javascript",
    icon: typescript,
  },
  {
    id: "3",
    name: "SQL",
    icon: typescript,
  },
  {
    id: "4",
    name: "Solidity",
    icon: solidity,
  },
];

export const Backend = [
  {
    id: "1",
    name: "Next JS",
    icon: nextjs,
  },
  {
    id: "2",
    name: "React JS",
    icon: reactjs,
  },
  {
    id: "3",
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: "4",
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    id: "5",
    name: "Vite JS",
    icon: vite,
  },
  {
    id: "6",
    name: "Framer Motion",
    icon: typescript,
  },
];

export const Data = [
  {
    id: "1",
    name: "Foundation of Data Analytics",
    icon: typescript,
  },
  {
    id: "2",
    name: "Data Management for Analytics",
    icon: typescript,
  },
  {
    id: "3",
    name: "Data Mining",
    icon: typescript,
  },
  {
    id: "4",
    name: "Computational Visualisation for Analytics",
    icon: typescript,
  },
];

export const Softwares = [
  {
    id: "1",
    name: "Foundation of Data Analytics",
    icon: typescript,
  },
  {
    id: "2",
    name: "Data Management for Analytics",
    icon: typescript,
  },
  {
    id: "3",
    name: "Data Mining",
    icon: typescript,
  },
  {
    id: "4",
    name: "Computational Visualisation for Analytics",
    icon: typescript,
  },
];

export const ProgrammingLanguage = [
  {
    id: "1",
    name: "Foundation of Data Analytics",
    icon: typescript,
  },
  {
    id: "2",
    name: "Data Management for Analytics",
    icon: typescript,
  },
  {
    id: "3",
    name: "Data Mining",
    icon: typescript,
  },
  {
    id: "4",
    name: "Computational Visualisation for Analytics",
    icon: typescript,
  },
];
