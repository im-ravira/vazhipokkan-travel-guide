import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MapPage = () => {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <section className="min-h-screen flex flex-col justify-between">
        <article className="pt-24 pb-4">
          <h1 className="text-[1.2rem] md:text-[1.5rem] lg:text-[3rem] font-extrabold text-center text-gray-800 mb-4">
            Explore Tamil Nadu - Map
          </h1>
          <p className="md:text-base text-sm lg:text-xl text-gray-700 text-center md:pb-8 pb-6 px-8">
            Discover key locations and attractions in Tamil Nadu with our
            interactive map.
          </p>
        </article>

        <article className="md:px-8 px-4 mb-8 mt-4">
          <p className="text-orange-400 md:text-sm text-xs md:block hidden mb-2">
            Note: use Ctrl + Scroll to Zoom in or Zoom out for the map.
          </p>
          <iframe
            title="Tamilnadu Map"
            className="w-full h-[30rem] border border-gray-400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377640.386569627!2d77.5942211672758!3d10.534317766354398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1656157826620!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="text-orange-400 md:text-sm text-xs md:hidden block mt-2">
            Note: use Ctrl + Scroll for Zoom in or Zoom out.
          </p>
        </article>
        <Footer />
      </section>
    </main>
  );
};

export default MapPage;
