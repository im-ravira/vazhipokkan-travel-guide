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
        "Chennai, capital of Tamil Nadu is a cultural hub of South India. It houses some of the most beautiful heritage monuments, pristine beaches, churches, theme parks and universities..",
    },
    {
      name: "Madurai",
      src: "./src/assets/destinations/Madurai.webp",
      content:
        "It is the oldest city of Tamil Nadu which is very popular for its iconic temple of Meenakshi sundareshwarar. Devotees from all over the world come to seek divine blessings. ",
    },
    {
      name: "Ooty",
      src: "./src/assets/destinations/Ooty.webp",
      content:
        "The hill town of Ooty is an exquisite hill station to visit in Tamil Nadu. It houses natural wonders like Doddabetta and highest peak of Nilgiri – Ootacamund. It is also known as Switzerland of India.",
    },
    {
      name: "Chennai",
      src: "./src/assets/destinations/Chennai.webp",
      content:
        "Chennai, capital of Tamil Nadu is a cultural hub of South India. It houses some of the most beautiful heritage monuments, pristine beaches, churches, theme parks and universities..",
    },
    {
      name: "Madurai",
      src: "./src/assets/destinations/Madurai.webp",
      content:
        "It is the oldest city of Tamil Nadu which is very popular for its iconic temple of Meenakshi sundareshwarar. Devotees from all over the world come to seek divine blessings. ",
    },
    {
      name: "Ooty",
      src: "./src/assets/destinations/Ooty.webp",
      content:
        "The hill town of Ooty is an exquisite hill station to visit in Tamil Nadu. It houses natural wonders like Doddabetta and highest peak of Nilgiri – Ootacamund. It is also known as Switzerland of India.",
    },
    {
      name: "Chennai",
      src: "./src/assets/destinations/Chennai.webp",
      content:
        "Chennai, capital of Tamil Nadu is a cultural hub of South India. It houses some of the most beautiful heritage monuments, pristine beaches, churches, theme parks and universities..",
    },
    {
      name: "Madurai",
      src: "./src/assets/destinations/Madurai.webp",
      content:
        "It is the oldest city of Tamil Nadu which is very popular for its iconic temple of Meenakshi sundareshwarar. Devotees from all over the world come to seek divine blessings. ",
    },
    {
      name: "Ooty",
      src: "./src/assets/destinations/Ooty.webp",
      content:
        "The hill town of Ooty is an exquisite hill station to visit in Tamil Nadu. It houses natural wonders like Doddabetta and highest peak of Nilgiri – Ootacamund. It is also known as Switzerland of India.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center bg-hite md:px-12 px-8 py-24">
        <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6">
          Discover the Wonders of Tamil Nadu
        </h2>
        <p className="text-gray-600 md:text-base text-sm font-medium mb-12">
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
