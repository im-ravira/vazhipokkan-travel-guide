import { FaCloudRain, FaSnowflake, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const TimeToVisit = () => {

  const bestTimeToVisit = [
    {
      name: "Summer in Tamil Nadu",
      icon: <FaSun className="text-yellow-500 w-6 h-6" />,
      content:
        "The summer in Tamil Nadu starts from March and ends in May. The temperature may rise up to 40°C. However, the hill stations in Tamil Nadu during summer are the best places to visit to escape the heat of plains.",
    },
    {
      name: "Monsoon in Tamil Nadu",
      icon: <FaCloudRain className="text-blue-500 w-6 h-6" />,
      content:
        "Monsoon starts from June and ends in September. The weather will be humid due to heavy downpours. It is not a favorable time to visit Tamil Nadu. The temperature ranges between 24ºC and 30ºC.",
    },
    {
      name: "Winter in Tamil Nadu",
      icon: <FaSnowflake className="text-blue-300 w-6 h-6" />,
      content:
        "Winter in Tamil Nadu starts from October and ends in February. This season is very favorable to visit for sightseeing and having an amazing beach holiday. The temperature ranges from 21ºC to 30ºC.",
    },
  ];

  return (
    <section className="flex flex-col bg-white md:px-16 px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[1.15rem] md:text-2xl lg:text-3xl font-bold text-gray-800">
          Best Time to Visit Tamil Nadu
        </h2>
        <Link to="/travel-essentials">
          <button className="btn btn-secondary md:block hidden">
            View More
          </button>
        </Link>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-3 justify-items-start gap-6">
        {bestTimeToVisit.map((season, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white border border-gray-200 p-8 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center gap-3">
              {season.icon}
              <h3 className="md:text-lg text-base font-bold text-gray-800 mt-4 mb-2">
                {season.name}
              </h3>
            </div>
            <p className="text-gray-700 md:text-base text-sm max-sm:text-justify text-left">
              {season.content}
            </p>
          </div>
        ))}
      </article>
      <div className="flex items-center justify-center">
        <Link to="/travel-essentials">
          <button className="btn btn-secondary md:text-sm text-xs py-2 md:px-6 px-16 text-nowrap md:hidden block md:mt-0 mt-6 mx-16 md:mx-0">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TimeToVisit;
