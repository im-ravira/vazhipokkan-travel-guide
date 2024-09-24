import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/common/DescriptionCard";
import { Link } from "react-router-dom";
import Chennai from "../assets/destinations/Chennai.webp";
import Madurai from "../assets/destinations/Madurai.webp";
import Ooty from "../assets/destinations/Ooty.webp";
import Kodaikanal from "../assets/destinations/Kodaikanal.webp";
import Kancheepuram from "../assets/destinations/Kancheepuram.webp";
import Kanyakumari from "../assets/destinations/Kanyakumari.webp";
import Mahabalipuram from "../assets/destinations/Mahabalipuram.webp";
import Thanjavur from "../assets/destinations/Thanjavur.webp";

const Destinations = () => {
  const destinations = [
    {
      name: "Chennai",
      src: Chennai,
      content:
        "Chennai, capital of Tamil Nadu is a cultural hub of South India. It houses some of the most beautiful heritage monuments, pristine beaches, churches, theme parks and universities..",
      route: "*",
    },
    {
      name: "Madurai",
      src: Madurai,
      content:
        "It is the oldest city of Tamil Nadu which is very popular for its iconic temple of Meenakshi sundareshwarar. Devotees from all over the world come to seek divine blessings. ",
      route: "*",
    },
    {
      name: "Ooty",
      src: Ooty,
      content:
        "The hill town of Ooty is an exquisite hill station to visit in Tamil Nadu. It houses natural wonders like Doddabetta and highest peak of Nilgiri – Ootacamund. It is also known as Switzerland of India.",
      route: "*",
    },
    {
      name: "Kodaikanal",
      src: Kodaikanal,
      content:
        "Kodaikanal is a serene hill station known for its lush greenery, misty weather, and scenic spots like the Kodaikanal Lake and Coaker's Walk. It is often referred to as the 'Princess of Hill Stations'.",
      route: "*",
    },
    {
      name: "Kancheepuram",
      src: Kancheepuram,
      content:
        "Kancheepuram, also known as the 'City of Thousand Temples', is famous for its magnificent temples and traditional silk sarees. It holds a significant place in South Indian history and culture.",
      route: "*",
    },
    {
      name: "Kanyakumari",
      src: Kanyakumari,
      content:
        "Kanniakumari, the southernmost tip of India, is where the Indian Ocean, Bay of Bengal, and Arabian Sea meet. It's famous for sunrise, sunset views, and the Vivekananda Rock Memorial.",
      route: "*",
    },
    {
      name: "Mahabalipuram",
      src: Mahabalipuram,
      content:
        "Mahabalipuram is a coastal town famous for its UNESCO World Heritage-listed monuments, rock-cut temples, and sculptures, including the Shore Temple and the Descent of the Ganges.",
      route: "*",
    },
    {
      name: "Thanjavur",
      src: Thanjavur,
      content:
        "Thanjavur is renowned for the grand Brihadeeswarar Temple, a UNESCO World Heritage site. The city is also known for its Tanjore paintings and classical music heritage.",
      route: "*",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center bg-hite md:px-12 px-8 py-24">
        <h2 className="md:text-2xl text-xl font-extrabold text-gray-800 mb-6">
          Discover the Wonders of Tamil Nadu
        </h2>
        <p className="text-gray-600 md:text-base text-sm mb-12">
          Explore the most beautiful destinations in Tamil Nadu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {destinations.map((destination, index) => (
            <Link to={destination.route} key={index}>
              {" "}
              <DestinationCard
                key={index}
                name={destination.name}
                src={destination.src}
                content={destination.content}
                additionalClasses="w-full p-4"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-12 text-center">
        <p className="md:text-sm text-xs text-gray-600">
          This site is for educational purposes. To{" "}
          <br className="md:hidden block" />
          view more imformations of TamilNadu,{" "}
          <br className="md:hidden block" />
          visit{" "}
          <a
            href="https://www.tamilnadutourism.tn.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.tamilnadutourism.tn.gov.in
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
