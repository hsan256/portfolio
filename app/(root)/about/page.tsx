import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";

const page = () => {
  return (
    <>
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden text-white">
        <section className="career-paddings inner-width">
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:w-1/2 p-4 flex justify-center">
              <Image
                src="/avatar.png"
                height={300}
                width={300}
                className="h-auto w-70"
                alt="it's hassan"
              />
            </div>

            <div className="w-full sm:w-1/2 p-4 space-y-4">
              <div>
                <h1 className="text-5xl font-bold">Hassan Trabelsi</h1>
                <p className="text-lg mt-2 text-grey-100">
                  Full Stack Developer, writer, and a passionate learner.
                </p>
              </div>
              <h6 className="text-sm font-semibold">Email Me</h6>
              <div className="flex items-center">
                <Link href="mailto:hassan.trabelsi1999@gmail.com">
                  <span className="flex items-center px-4 py-2 border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
                    hassan.trabelsi1999@gmail.com
                  </span>
                </Link>
              </div>

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
                    <span className="text-twitter hover:text-twitter-dark text-3xl">
                      <AiFillLinkedin />
                    </span>
                  </Link>
                  <Link href="https://github.com/hsan256" target="_blank">
                    <span className="text-github hover:text-github-dark text-3xl">
                      <AiFillGithub />
                    </span>
                  </Link>
                  <Link
                    href="https://medium.com/@HassanTrabelsi"
                    target="_blank"
                  >
                    {" "}
                    <span className="text-medium hover:text-medium-dark text-3xl">
                      <AiFillMediumCircle />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8"></div>

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

        <section className="career-paddings inner-width">
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
                    Full-time: June 2022 - Present
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
                    Full-time: June 2022 - August 2022
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
                    Full-time: June 2021 - August 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="career-paddings inner-width">
          <div className="flex-between mb-16">
            <h2 className="heading2">
              Tools, Languages &amp; Frameworks/Libraries
            </h2>
          </div>
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Image
                    src="/assets/icons/technologies/react-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">REACT JS</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="/assets/icons/technologies/nextjs-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto bg-white rounded-full p-2"
                  />
                  <h6 className="mt-2">NEXT JS</h6>
                </div>
                <div className="text-center">
                  <Image
                    src="/assets/icons/technologies/nodejs-original.svg"
                    width={56}
                    height={56}
                    alt="REACT JS"
                    className="mx-auto"
                  />
                  <h6 className="mt-2">NODE JS</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
