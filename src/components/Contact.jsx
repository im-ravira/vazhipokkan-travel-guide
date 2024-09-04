import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full pt-28 pb-14 px-4">
        <div className="flex lg:flex-row flex-col gap-6 items-center justify-center">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8 w-full max-w-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
              Thanks For Looking!
            </h1>
            <p className="text-gray-600 mb-4">
              I'm Ravikumar, the front-end developer behind this website. As a
              newcomer to the field, I’ve been diving into web development with
              a lot of enthusiasm and a desire to learn and grow. This project,
              the Vazhipokkan Tamil Nadu travel guide website, is a great
              opportunity for me to apply my skills and showcase my passion for
              creating engaging and user-friendly web experiences.
            </p>
            <p className="text-gray-600 mb-4">
              Working on this site has been an exciting journey, allowing me to
              explore the rich culture of Tamil Nadu and bring it to life
              through design and functionality. I’m eager to continue learning
              and improving my craft as I contribute to future projects.
            </p>
            <p className="text-gray-600 mb-6">
              Feel free to reach out if you have any questions or feedback,
              &nbsp; I’d really like to hear from you!
            </p>
          </div>

          <form className="w-full max-w-lg bg-white border border-gray-300 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-start">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors duration-300"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
