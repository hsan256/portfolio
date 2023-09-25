import Image from "next/image";
import Link from "next/link";
import EmailButton from "@/components/EmailButton";
import { getAboutMeDetails } from "@/sanity/actions";
import SocialIcons from "@/components/SocialIcons";

export const revalidate = 900;

interface Experience {
  role: string;
  company: string;
  companyLogo: string;
  type: string;
  currentPosition: boolean;
  timeframe: string;
}
interface Skill {
  technology: string;
  iconLink: string;
  iconWhiteBackground: boolean;
}

interface Strength {
  title: string;
  description: string;
  illustration: string;
}

const page = async () => {
  const aboutMeData = await getAboutMeDetails();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden text-white">
      {/* Hero Section */}
      <section className="custom-paddings inner-width">
        <div className="flex flex-wrap -m-4">
          <div className="w-full sm:w-1/2 p-4 flex justify-center">
            <Image
              src={aboutMeData.avatar}
              height={400}
              width={400}
              className="rounded-full"
              alt={`It's ${aboutMeData.name}`}
            />
          </div>

          <div className="w-full sm:w-1/2 p-4 space-y-4">
            <div>
              <h1 className="text-5xl font-bold">{aboutMeData.name}</h1>
              <p className="text-lg mt-2 text-gradient_yellow-orange">
                {aboutMeData.tagline}
              </p>
            </div>
            <h6 className="text-sm font-semibold">Email Me</h6>

            <EmailButton email={aboutMeData.email} />

            <div className="space-y-4 p-10">
              <div className="flex flex-wrap -m-2">
                <div className="w-full lg:w-1/4 md:w-1/2 p-2">
                  <Link
                    href="/work"
                    className="text-center btn btn-primary block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-[#854CFF] to-[#B573F8]"
                  >
                    Work
                  </Link>
                </div>
                <div className="w-full lg:w-1/4 md:w-1/2 p-2">
                  <Link
                    href="/blogs"
                    className="text-center btn btn-primary block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-[#854CFF] to-[#B573F8]"
                  >
                    Blogs
                  </Link>
                </div>
                <div className="w-full lg:w-1/4 md:w-1/2 p-2">
                  <Link
                    href="/contact"
                    className="text-center btn btn-primary block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-[#854CFF] to-[#B573F8]"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h6 className="text-sm font-semibold">Follow me on</h6>
              <div className="flex space-x-4">
                {aboutMeData.socialLinks.map((link: any) => (
                  <SocialIcons
                    key={link._key}
                    type={link.type}
                    url={link.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12"></div>

        <div className="text-lg leading-relaxed mt-8">
          <p className="text-grey-100">
            Hello and welcome to my portfolio!
            <br />
            I'm{" "}
            <Link
              href="https://www.linkedin.com/in/hassan-trabelsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hassan Trabelsi
            </Link>
            . I studied Computer Science and Engineering at{" "}
            <Link
              href="https://esprit.tn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ESPRIT
            </Link>{" "}
            in Tunis, Tunisia, As a Full Stack Developer I've had the privilege
            of contributing to diverse projects, both small and large. I pride
            myself on being self-motivated and always eager to embrace new
            challenges and opportunities. Beyond my professional work, I'm
            passionate about sport and actively engaging with various tech
            communities. I'm thrilled you're here, and I invite you to explore
            my work further.
          </p>
        </div>
      </section>
      {/* Experience Section */}
      <section className="custom-paddings inner-width">
        <div className="flex-between mb-16">
          <h2 className="heading2">Experiences</h2>
        </div>

        <div className="relative">
          <div className="space-y-16">
            {aboutMeData.experiences.map(
              (experience: Experience, index: number) => (
                <div key={experience.role} className="flex relative">
                  <div className="flex-none relative">
                    <Image
                      src={experience.companyLogo}
                      width={116}
                      height={116}
                      alt={`${experience.company} Logo`}
                      className="rounded-sm"
                    />
                    {/* Conditionally render the line connecting experiences */}
                    {index !== aboutMeData.experiences.length - 1 && (
                      <div className="absolute top-full left-1/2 w-1 bg-gray-400 h-12"></div>
                    )}
                  </div>

                  <div className="flex-grow ml-12 relative">
                    <h3 className="heading4">{experience.role}</h3>
                    <span className="body-medium text-primary">
                      {experience.company}
                    </span>

                    <div className="mt-2 flex items-center">
                      <span className="flex items-center px-4 py-2 border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
                        {experience.type}
                        <span
                          className={`ml-3 w-4 h-4 rounded-full ${
                            experience.currentPosition
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                      </span>
                    </div>

                    <p className="text-grey-100 body-regular mt-2">
                      {experience.timeframe}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="custom-paddings inner-width">
        <div className="flex-between mb-16">
          <h2 className="heading2">
            Tools, Languages &amp; Frameworks/Libraries
          </h2>
        </div>
        <div className="flex-center paddings inner-width frame w-full max-w-4xl flex-col px-0 py-16 xs:px-8 3xl:min-h-full 3xl:max-w-5xl">
          <div className="sm-box sm-box-1 bg-black-400"></div>
          <div className="sm-box sm-box-2 bg-black-400"></div>
          <div className="sm-box sm-box-3 bg-black-400"></div>
          <div className="sm-box sm-box-4 bg-black-400"></div>
          <div className="sm-box sm-box-5 bg-black-400"></div>
          <div className="sm-box sm-box-6 bg-black-400"></div>
          <div className="sm-box sm-box-7 bg-black-400"></div>
          <div className="sm-box sm-box-8 bg-black-400"></div>
          <article className="mt-8 mb-8 flex items-center justify-center text-center">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
              {aboutMeData.skills.map((skill: Skill) => (
                <div key={skill.technology} className="text-center">
                  <Image
                    src={skill.iconLink}
                    width={56}
                    height={56}
                    alt={skill.technology}
                    className={`mx-auto ${
                      skill.iconWhiteBackground
                        ? "bg-white rounded-full p-2"
                        : ""
                    }`}
                  />
                  <h6 className="mt-2">{skill.technology}</h6>
                </div>
              ))}
            </div>
          </article>
          {aboutMeData.skillsAssessmentPlatform && (
            <Link
              href={aboutMeData.skillsAssessmentPlatform}
              target="_blank"
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 text-white hover:bg-blue-700 flex-center mt-10 h-fit rounded-full bg-blue-500 px-6 py-4"
            >
              <span className="mr-2">🚀</span>
              Check Out My Skills!
            </Link>
          )}
        </div>
      </section>
      {/* Strengths Section */}
      <section className="custom-paddings inner-width">
        <div className="flex-between mb-16">
          <h2 className="heading2">
            Why Hire Me <span className="text-orange">?</span>
          </h2>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
            {aboutMeData.strengths.map((strength: Strength) => (
              <div key={strength.title} className="strengths-item text-center">
                <div className="strengths-item-image mx-auto">
                  <Image
                    src={strength.illustration}
                    width={200}
                    height={200}
                    alt={strength.title}
                  />
                </div>
                <div className="strengths-item-content mt-4">
                  <h3 className="text-lg font-semibold">{strength.title}</h3>
                  <p className="text-grey-100">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="custom-paddings inner-width">
        <div className="max-w-screen-lg mx-auto mt-10 p-4 sm:p-4 md:p-8 rounded-lg bg-blue-600 shadow-xl transition-transform transform">
          <div className="text-white space-y-4 sm:space-y-6 md:space-y-0 md:flex md:items-center md:justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
              Interested in working with me?
            </h1>

            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row space-x-0 sm:space-x-4 mt-4 md:mt-0">
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center px-6 py-3 bg-white bg-opacity-10 rounded hover:bg-opacity-20 transition-transform transform hover:scale-105 whitespace-nowrap"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3"
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                </svg>
                Contact Me
              </Link>
              <Link
                href="/work"
                className="flex-1 flex items-center justify-center px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-600 transition-transform transform hover:scale-105 whitespace-nowrap"
              >
                See More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
