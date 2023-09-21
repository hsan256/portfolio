"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillMediumCircle,
  AiOutlineMail,
  AiOutlineLink,
  AiOutlineCloudDownload,
} from "react-icons/ai";

import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

const words = [
  "Software Engineer",
  "Web Developer",
  "Blockchain Enthusiast",
  "Writer",
];

const Hero = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden text-white">
      <section className="flex flex-wrap nav-padding w-full">
        <div className="flex flex-col justify-center w-full md:w-1/2 p-4">
          <h6 className="text-white text-2xl mb-2">Hey!</h6>
          <h1 className="sm:heading1 xs:heading2 heading3 whitespace-pre-wrap">
            <span className="text-gradient_blue-purple">I'm </span>
            Hassan
          </h1>
          <h1 className="sm:heading1 xs:heading2 heading3 whitespace-pre-wrap text-gradient_blue-purple">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="paragraph-regular pt-6 text-white-400 max-w-lg">
            I have a passion for technology.
          </p>
          <p className="paragraph-regular pt-6 text-white-400 max-w-lg inline-flex items-center">
            <Link href="/about">
              <span className="text-gradient_blue-purple hover:text-primary-600 transition flex items-center">
                Know More
                <AiOutlineLink className="ml-1 text-xl align-middle" />
              </span>
            </Link>
            <span className="text-primary-500 ml-2">about me</span>
          </p>

          <h6 className="paragraph-regular pt-6 text-white-600 max-w-lg flex items-center">
            Find me
            <span className="inline-flex space-x-4 ml-2">
              <Link
                href="https://www.linkedin.com/in/hassan-trabelsi/"
                target="_blank"
              >
                <span className="text-twitter hover:text-twitter-dark text-2xl">
                  <AiFillLinkedin />
                </span>
              </Link>
              <Link href="https://github.com/hsan256" target="_blank">
                <span className="text-github hover:text-github-dark text-2xl">
                  <AiFillGithub />
                </span>
              </Link>
              <Link href="https://medium.com/@HassanTrabelsi" target="_blank">
                <span className="text-medium hover:text-medium-dark text-2xl">
                  <AiFillMediumCircle />
                </span>
              </Link>
            </span>
          </h6>

          <div className="flex w-full gap-8 pt-7 max-md:flex-col">
            <Link href="mailto:hassan.trabelsi1999@gmail.com">
              <div className="relative flex h-15 cursor-pointer">
                <div className="absolute -bottom-1 -right-1.5 z-10 flex h-12 w-full rounded-md bg-white"></div>
                <div className="flex-center body-semibold z-20 h-full w-full gap-2 rounded-md border-2 border-black-200 bg-primary px-6 py-4">
                  Email Me
                </div>
              </div>
            </Link>

            <Button className="relative flex h-15 cursor-pointer bubble-button flex-center body-semibold z-20 gap-2 bg-gradient-to-r from-[#854CFF] to-[#B573F8] px-6 py-4">
              <Link
                href="https://drive.google.com/file/d/1keXc1Dgiybo4u7yT1l_5zNiHA_8Ghmnd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center space-x-2">
                  <AiOutlineCloudDownload className="text-xl" />
                  <span>Resume</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full md:w-1/2 p-4">
          <Image
            src="/avatar.png"
            width={300}
            height={300}
            alt="Hassan's Avatar"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
