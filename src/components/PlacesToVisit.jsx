import Chennai from "../assets/destinations/Chennai.webp";
import Madurai from "../assets/destinations/Madurai.webp";
import Ooty from "../assets/destinations/Ooty.webp";
import DescriptionCard from "./common/DescriptionCard";
import { Link } from "react-router-dom";

const PlacesToVisit = () => {

  const Destinations = [
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
  ];

  return (
    <section className="flex flex-col bg-white md:px-16 px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[1.15rem] md:text-2xl lg:text-3xl font-bold text-gray-800">
          Best Places to Visit in Tamilnadu
        </h2>
        <Link to="/destinations">
          <button className="btn btn-secondary md:block hidden">
            View More
          </button>
        </Link>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Destinations.map((destination, index) => (
          <DescriptionCard
            key={index}
            name={destination.name}
            src={destination.src}
            content={destination.content}
            route={destination.route}
            additionalClasses="md:w-full lg:w-full p-1"
          />
        ))}
      </article>
      <div className="flex items-center justify-center">
        <Link to="/destinations">
          <button className="btn btn-secondary md:text-sm text-xs py-2 md:px-6 px-16 text-nowrap md:hidden block md:mt-0 mt-6 mx-16 md:mx-0">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PlacesToVisit;
