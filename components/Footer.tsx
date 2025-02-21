import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Cover } from "./ui/Cover";
import { get } from "http";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { LinkPreview } from "./ui/LinkPreview";
import Image from "next/image";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={1920}
          height={980}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white">
          Ready to elevate <span className="text-purple">your</span> digital
          presence to the <Cover>next level?</Cover>
        </h1>
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p> */}
        <a href="mailto:harale.y@northeastern.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-neutral-500 to-neutral-500 dark:from-neutral-800 dark:via-white dark:to-white">
          Copyright © {currentyear}
        </p>

        <div className="flex items-center md:gap-3 gap-6 py-10">
          <LinkPreview url="https://github.com/carnageitself">
            <a
              href="https://github.com/carnageitself"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <FaGithub />
            </a>
          </LinkPreview>
          <LinkPreview url="https://linktr.ee/carnageitself">
            <a
              href="https://linktr.ee/carnageitself"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <BiLinkAlt />
            </a>
          </LinkPreview>
          <LinkPreview url="https://www.linkedin.com/in/yash-harale">
            <a
              href="https://www.linkedin.com/in/yash-harale"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <FaLinkedin />
            </a>
          </LinkPreview>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
