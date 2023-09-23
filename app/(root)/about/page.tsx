import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import EmailButton from "@/components/EmailButton";

const page = () => {
  return (
    <>
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden text-white">
        {/* Hero Section */}
        <section className="custom-paddings inner-width">
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:w-1/2 p-4 flex justify-center">
              <Image
                src="/avatar.png"
                height={391}
                width={391}
                className="h-auto w-70"
                alt="it's hassan"
              />
            </div>

            <div className="w-full sm:w-1/2 p-4 space-y-4">
              <div>
                <h1 className="text-5xl font-bold">Hassan TRABELSI</h1>
                <p className="text-lg mt-2 text-gradient_yellow-orange">
                  Full Stack Developer, writer, and a passionate learner.
                </p>
              </div>
              <h6 className="text-sm font-semibold">Email Me</h6>

              <EmailButton />

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
                  <Link
                    href="https://www.linkedin.com/in/hassan-trabelsi/"
                    target="_blank"
                  >
                    <span className="text-twitter hover:text-[#0072b1] text-3xl">
                      <AiFillLinkedin />
                    </span>
                  </Link>
                  <Link href="https://github.com/hsan256" target="_blank">
                    <span className="text-github hover:text-gray-400 text-3xl">
                      <AiFillGithub />
                    </span>
                  </Link>
                  <Link
                    href="https://medium.com/@HassanTrabelsi"
                    target="_blank"
                  >
                    {" "}
                    <span className="text-medium hover:text-gray-400 text-3xl">
                      <AiFillMediumCircle />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12"></div>

          <div className="text-lg leading-relaxed mt-8">
            <p className="text-grey-100">
              Hello and welcome to my portfolio!
              <br />
              My name is{" "}
              <Link
                href="https://www.linkedin.com/in/hassan-trabelsi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Hassan Trabelsi
              </Link>
              . As a Full Stack Developer with a degree in Computer Science and
              Engineering from{" "}
              <Link
                href="https://esprit.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ESPRIT
              </Link>{" "}
              in Tunis, Tunisia, I've had the privilege of contributing to
              diverse projects, both small and large. I pride myself on being
              self-motivated and always eager to embrace new challenges and
              opportunities. Beyond my professional work, I'm passionate about
              sport and actively engaging with various tech communities. I'm
              thrilled you're here, and I invite you to explore my work further.
            </p>
          </div>
        </section>
        {/* Experience Section */}
        <section className="custom-paddings inner-width">
          <div className="flex-between mb-16">
            <h2 className="heading2">Experience</h2>
          </div>

          <div className="relative">
            <div className="space-y-16">
              <div className="flex relative">
                <div className="flex-none relative">
                  <Image
                    src="/wemiam_logo.jpg"
                    width={116}
                    height={116}
                    alt="Company 1 Logo"
                    className="rounded-sm"
                  />
                  {/* Line connecting experiences */}
                  <div className="absolute top-full left-1/2 w-1 bg-gray-400 h-12"></div>
                </div>
                <div className="flex-grow ml-12 relative">
                  <h3 className="heading4">Software Engineer</h3>
                  <span className="body-medium text-primary">WeMiam</span>

                  <div className="mt-2 flex items-center">
                    <span className="flex items-center px-4 py-2 border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
                      Full-time
                      <span className="ml-3 w-4 h-4 bg-green-500 rounded-full"></span>
                    </span>
                  </div>

                  <p className="text-grey-100 body-regular mt-2">
                    June 2022 - Present
                  </p>
                </div>
              </div>

              <div className="flex relative">
                <div className="flex-none relative">
                  <Image
                    src="/kripton_logo.png"
                    width={116}
                    height={116}
                    alt="Company 2 Logo"
                    className="rounded-sm"
                  />
                  <div className="absolute top-full left-1/2 w-1 bg-gray-400 h-12"></div>
                </div>

                <div className="flex-grow ml-12 relative">
                  <h3 className="heading4">Intern</h3>
                  <span className="body-medium text-primary">Kripton</span>

                  <div className="mt-2 flex items-center">
                    <span className="flex items-center px-4 py-2 border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
                      Internship
                      <span className="ml-3 w-4 h-4 bg-red-500 rounded-full"></span>
                    </span>
                  </div>

                  <p className="text-grey-100 body-regular mt-2">
                    June 2022 - August 2022
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-none relative">
                  <Image
                    src="/st2i_logo.jpg"
                    width={116}
                    height={116}
                    alt="Company 3 Logo"
                    className="rounded-sm"
                  />
                </div>

                <div className="flex-grow ml-12 relative">
                  <h3 className="heading4">Intern</h3>
                  <span className="body-medium text-primary">ST2I</span>

                  <div className="mt-2 flex items-center">
                    <span className="flex items-center px-4 py-2 border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
                      Internship
                      <span className="ml-3 w-4 h-4 bg-red-500 rounded-full"></span>
                    </span>
                  </div>

                  <p className="text-grey-100 body-regular mt-2">
                    June 2021 - August 2021
                  </p>
                </div>
              </div>
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
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">REACT JS</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto bg-white rounded-full p-2"
                  />
                  <h6 className="mt-2">NEXT JS</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">ANGULAR</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">NODE JS</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto bg-white rounded-full p-2"
                  />
                  <h6 className="mt-2">EXPRESS JS</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">MONGODB</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">JAVASCRIPT</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">JAVA</h6>
                </div>
              </div>
            </article>
            {/* <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 flex-center mt-10 h-fit rounded-full bg-[#2190ff] px-6 py-4" type="button" aria-haspopup="dialog" aria-expanded="" aria-controls="radix-:r9:" data-state="closed">
			<p className="text-[14px] font-semibold leading-[16px] text-white">TAKE THE QUIZ</p></button> */}
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
              <div className="strengths-item text-center">
                <div className="strengths-item-image mx-auto">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    width={200}
                    height={200}
                    alt="REACT JS"
                  />
                </div>
                <div className="strengths-item-content mt-4">
                  <h3 className="text-lg font-semibold">Communicative</h3>
                  <p className="text-grey-100">
                    I balance talking and listening ensuring effective
                    communication.
                  </p>
                </div>
              </div>
              {/* ... Repeat for the other strengths ... */}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="custom-paddings inner-width">
          <div className="max-w-screen-lg mx-auto mt-10 p-4 sm:p-8 rounded-lg bg-blue-600 shadow-xl transition-transform transform">
            <div className="text-white space-y-4 sm:space-y-6 md:space-y-0 md:flex md:items-center md:justify-between">
              <h1 className="text-xl sm:text-3xl font-bold text-center sm:text-left">
                Interested in working with me?
              </h1>

              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-white bg-opacity-10 rounded hover:bg-opacity-20 transition-transform transform hover:scale-105 whitespace-nowrap"
                >
                  <svg
                    className="h-6 w-6 mr-3"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>{" "}
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
    </>
  );
};

export default page;
