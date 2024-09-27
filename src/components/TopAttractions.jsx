import Hills from "../assets/gallery/the-nilgiri-mountain-railway.webp";
import Beachs from "../assets/gallery/dhanushkodi.webp";
import Wildlife from "../assets/gallery/mudumalai.webp";
import DescriptionCard from "./common/DescriptionCard";
import { Link } from "react-router-dom";

const TopAttractions = () => {

  const Attractions = [
    {
      name: "Hills",
      src: Hills,
      content:
        "Tamil Nadu's hills, like Ooty and Kodaikanal, boast lush landscapes and cool climates. They’re perfect for trekking, boating, and enjoying scenic views.",
    },
    {
      name: "Beachs",
      src: Beachs,
      content:
        "Tamil Nadu's beaches, such as Marina and Mahabalipuram, feature golden sands and vibrant coastal views. They are ideal for enjoying, and watching spectacular sunsets.",
    },
    {
      name: "Wildlife",
      src: Wildlife,
      content:
        "Tamil Nadu's wildlife sanctuaries, such as Mudumalai and Anamalai, showcase diverse wildlife, including elephants and tigers, offering an intimate nature experience.",
    },
  ];

  return (
    <section className="flex flex-col bg-white md:px-16 px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[1.15rem] md:text-2xl lg:text-3xl font-bold text-gray-800">
          Top Attractions in Tamilnadu
        </h2>
        <button className="bg-orange-600 text-white text-sm font-bold py-2 px-6  rounded-full hover:bg-orange-700 transition duration-300 md:block hidden">
          View More
        </button>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2">
        {Attractions.map((attraction, index) => (
          <DescriptionCard
            key={index}
            name={attraction.name}
            src={attraction.src}
            content={attraction.content}
            additionalClasses="md:w-full lg:w-full p-0"
          />
        ))}
      </article>
      <div className="flex items-center justify-center">
        <Link to="/attractions">
          <button className="bg-orange-600 text-white text-nowrap md:text-sm text-xs font-bold py-2 md:px-6 px-16 rounded-full hover:bg-orange-700 transition duration-300 md:hidden block md:mt-0 mt-6 mx-16 md:mx-0">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopAttractions;
