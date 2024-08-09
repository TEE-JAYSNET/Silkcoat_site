import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-12">
          Have questions? We're here to help! Get in touch with us.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <form className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
