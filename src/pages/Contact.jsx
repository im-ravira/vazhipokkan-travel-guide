import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <main className="min-h-screen w-full">
        <Helmet>
        <title>Contact Us - Vazhipokkan Travel Guide</title>
        <meta name="description" content="Get in touch with us for questions, feedback, or inquiries regarding Tamil Nadu travel. We’re here to assist you!" />
        <meta name="keywords" content="contact, Tamil Nadu travel, feedback, inquiries" />

        {/* Meta Robots tag */}
        <meta name="robots" content="noindex, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/map" />
      </Helmet>
      <Navbar />
      <section className="w-full pt-24">
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <h1 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] font-extrabold text-center px-4">
            Get In Touch
          </h1>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <p className="text-sm md:text-base lg:text-lg text-center mb-6 mx-2 md:mx-12 lg:mx-60">Feel free to reach out with any questions, feedback, or inquiries. We're here to assist you and ensure you have the best experience as you explore Tamil Nadu.</p>
        <div className="flex lg:flex-row flex-col gap-6 items-center justify-center mb-8">
          <article className="bg-white p-6 w-full md:max-w-[40rem] lg:max-w-[32rem] lg:space-y-10 transform hover:scale-105 transition-transform duration-300 text-justify">
            <h1 className="text-[1.15rem] md:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6">
              Thanks For Looking!
            </h1>
            <p className="text-gray-600 mb-4">
              I'm{" "}
              <a
                href="https://www.linkedin.com/in/imravira/"
                target="blank"
                className="text-blue-500"
              >
                Ravikumar
              </a>
              , the front-end developer behind this website. As a newcomer to
              the field, I’ve been diving into web development with a lot of
              enthusiasm and a desire to learn and grow. This project, the
              Vazhipokkan Tamil Nadu travel guide website, is a great
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
          </article>

          <form className="w-full md:max-w-[40rem] lg:max-w-[32rem] bg-white p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-[1.15rem] md:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6">
              Contact Form
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
                className="btn btn-primary focus:bg-blue-500 focus:ring-blue-400"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
