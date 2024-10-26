import { FaPlane, FaTrain, FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";

const TravelOptions = () => {
  const TravelModes = [
    {
      name: "By Air",
      icon: <FaPlane className="text-orange-600 w-6 h-6" />,
      content:
        "There are a total of 9 airports in Tamil Nadu, both domestic and international, connected to major cities through frequent flights.",
    },
    {
      name: "By Train",
      icon: <FaTrain className="text-orange-600 w-6 h-6" />,
      content:
        "All the major cities of Tamil Nadu have good train connectivity with major cities across India, making it an affordable travel option.",
    },
    {
      name: "By Road",
      icon: <FaBus className="text-orange-600 w-6 h-6" />,
      content:
        "Tamil Nadu has good road connectivity with national highways and plenty of bus options from nearby states and cities.",
    },
  ];

  return (
    <section className="flex flex-col bg-white md:px-16 px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[1.15rem] md:text-2xl lg:text-3xl font-bold text-gray-800">
          How to Reach Tamil Nadu?
        </h2>
        <Link to="/travel-essentials">
          <button className="btn btn-secondary md:block hidden">
            View More
          </button>
        </Link>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {TravelModes.map((option, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-10 rounded-lg shadow-md flex flex-col items-start"
          >
            <div className="flex flex-row items-center gap-3">
              {option.icon}
              <h3 className="md:text-lg text-base mt-4 font-bold text-gray-800 mb-2">
                {option.name}
              </h3>
            </div>
            <p className="text-gray-700 text-left md:text-base text-sm max-sm:text-justify text-pretty">
              {option.content}
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

export default TravelOptions;
