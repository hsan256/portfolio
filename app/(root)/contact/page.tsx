import Link from "next/link";

function Page() {
  const link = "https://calendly.com/";
  
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden text-white">
      <section className="pt-24 inner-width">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gradient_yellow-orange mb-8 sm:text-3xl">
            I'd love to hear from you
          </h1>
          <p>
            Just a quick chat? - DM me on LinkedIn{" "}
            <Link
              href="https://www.linkedin.com/in/hassan-trabelsi/"
              target="_blank"
            >
              <span className="text-blue-400 hover:underline">
                /in/hassan-trabelsi/
              </span>
            </Link>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex-1 flex flex-col justify-center mb-8 sm:mb-0">
            {" "}
            <h2 className="text-2xl text-center mb-4">
              Simply leave a message
            </h2>
            <form noValidate className="space-y-6">
              <div className="relative">
                <input
                  name="name"
                  required
                  type="text"
                  id="nameInput"
                  className="w-full px-4 py-2 bg-opacity-10 border rounded-md placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="relative">
                <input
                  name="email"
                  required
                  type="email"
                  id="emailInput"
                  className="w-full px-4 py-2 bg-opacity-10 border rounded-md placeholder-gray-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  id="messageTextarea"
                  className="w-full px-4 py-2 h-36 bg-opacity-10 border rounded-md placeholder-gray-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="px-4 md:w-1/6 flex items-center justify-center mb-8 sm:mb-0">
            {" "}
            <h2 className="text-2xl font-semibold">Or</h2>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl text-center mb-4 sm:text-2xl">
              Schedule a Google Meet with me!
            </h3>
            <div className="relative h-96 sm:h-64">
              {" "}
              <iframe
                className="w-full h-full"
                src={link}
                title="Calendly Scheduling Page"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
