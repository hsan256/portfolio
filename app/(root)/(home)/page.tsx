import Image from "next/image";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMediumCircle,
  AiOutlineMail,
  AiOutlineLink,
  AiOutlineCloudDownload,
} from "react-icons/ai";

import Typist from "@/components/Typist";
import { Button } from "@/components/ui/button";
import { getHeroDetails } from "@/sanity/actions";

export const revalidate = 900;

const Page = async () => {
  const heroDetails = await getHeroDetails();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden text-white">
      <section className="flex flex-col md:flex-row nav-padding w-full items-center justify-center">
        <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
          
          <h6 className="text-white text-2xl mb-2">Hey!</h6>

          <h1 className="sm:heading1 xs:heading2 heading3 whitespace-pre-wrap">
            <span className="text-gradient_blue-purple">I'm </span>
            {heroDetails.name}
          </h1>

          <h1 className="sm:heading1 xs:heading2 heading3 whitespace-pre-wrap text-gradient_blue-purple">
            <Typist words={heroDetails.words} />
          </h1>

          <p className="paragraph-regular pt-6 text-white-400 max-w-lg">
            {heroDetails.description}
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
              {heroDetails.socialLinks.map((link: any) => {
                switch (link.type) {
                  case "linkedin":
                    return (
                      <Link href={link.url} target="_blank" key={link.type}>
                        <span className="text-twitter hover:text-[#0072b1] text-2xl">
                          <AiFillLinkedin />
                        </span>
                      </Link>
                    );
                  case "github":
                    return (
                      <Link href={link.url} target="_blank" key={link.type}>
                        <span className="text-github hover:text-gray-400 text-2xl">
                          <AiFillGithub />
                        </span>
                      </Link>
                    );
                  case "medium":
                    return (
                      <Link href={link.url} target="_blank" key={link.type}>
                        <span className="text-medium hover:text-gray-400 text-2xl">
                          <AiFillMediumCircle />
                        </span>
                      </Link>
                    );
                  default:
                    return null;
                }
              })}
            </span>
          </h6>

          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 pt-7">
            <Link href={`mailto:${heroDetails.email}`}>
              <div className="relative flex h-15 cursor-pointer">
                <div className="absolute -bottom-1 -right-1.5 z-10 flex h-12 w-full rounded-md bg-white"></div>
                <div className="flex-center body-semibold z-20 h-full w-full gap-2 rounded-md border-2 border-black-200 bg-primary px-6 py-4">
                  <AiOutlineMail className="text-xl" />
                  <span>Email Me</span>
                </div>
              </div>
            </Link>

            <Button className="relative flex h-15 cursor-pointer bubble-button flex-center body-semibold z-20 gap-2 bg-gradient-to-r from-[#854CFF] to-[#B573F8] px-6 py-4">
              <Link
                href={heroDetails.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center space-x-2">
                  <AiOutlineCloudDownload className="text-2xl" />
                  <span>Resume</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-full md:w-1/2 p-4">
          <Image
            src={heroDetails.image}
            width={450}
            height={450}
            alt="Hassan's Image"
            className="rounded-full"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;