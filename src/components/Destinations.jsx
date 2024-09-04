import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DestinationCard from "./DestinationCard";

const Destinations = () => {
  const destinations = [
    {
      name: "Chennai",
      src: "./src/assets/destinations/Chennai.webp",
      content:
        "Chennai, capital of Tamil Nadu is a cultural hub of South India...",
    },
    {
      name: "Madurai",
      src: "./src/assets/destinations/Madurai.webp",
      content: "It is the oldest city of Tamil Nadu...",
    },
    {
      name: "Ooty",
      src: "./src/assets/destinations/Ooty.webp",
      content: "The hill town of Ooty is an exquisite hill station...",
    },
    // Add more destinations here
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center bg-slate-100 md:px-12 px-8 py-12">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">
          Discover the Wonders of Tamil Nadu
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Explore the most beautiful destinations in Tamil Nadu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              src={destination.src}
              content={destination.content}
              additionalClasses="w-full p-4"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
