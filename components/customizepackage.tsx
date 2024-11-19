import { LayoutGridDemo } from "./gridLayoutdemo";

export default function CustomizePackages() {
  return (
    <>
      <div>
        <div className=" bg-blue-600 rounded-3xl shadow-lg pt-8 px-8">
          <div className="flex gap-4 flex-row">
            <div className="w-1/2 p-4">
              <div className="flex flex-wrap gap-8">
                <div className="flex-1 p-8 bg-neutral-100 rounded-3xl">
                  <h2 className="font-title text-4xl mb-6 text-primary font-bold">
                    Contact us
                  </h2>
                  <p className="text-md mb-6">
                    Have a question or feedback in mind? Connect
                    with the service providers or get in touch with us
                    directly.
                  </p>
                  <form className="space-y-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px]">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full rounded-md border-neutral-300 p-2 border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Name"
                        />
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border-neutral-300 p-2 border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-md border-neutral-300 p-2 border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows= {5}
                        className="w-full rounded-md border-neutral-300 p-2 border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Share your thoughts..."
                      />
                    </div>
                    <div className="w-full">
                      <button className="bg-primary text-neutral-50 rounded-full px-6 py-3">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-1/2 rounded-md overflow-hidden">
              <LayoutGridDemo/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}