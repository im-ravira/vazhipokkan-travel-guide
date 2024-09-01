import React from "react";
import {
  FaBus,
  FaCloudRain,
  FaPlane,
  FaSnowflake,
  FaSun,
  FaTrain,
} from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

const Home = () => {
  const homeImages = [
    {
      name: "Pongal Festival",
      src: "./src/assets/imageslider/pongal-festival.webp",
    },
    {
      name: "Chithirai Festival Madurai",
      src: "./src/assets/imageslider/Chithirai-Festival-Madurai.webp",
    },
    { name: "Jallikattu", src: "./src/assets/imageslider/jallikattu.webp" },
    {
      name: "Thiruvalluvar Steel Statue, Coimbutore",
      src: "./src/assets/imageslider/thiruvalluvar.webp",
    },
    { name: "Therukooth", src: "./src/assets/imageslider/therukooth.webp" },
  ];

  const travelOptions = [
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

  const placesToVisit = [
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
    <>
      <Navbar />
      <ImageSlider images={homeImages} autoPlay={true} Overlay={true} />
      <div className="text-center text-left bg-slate-100 md:px-12 px-8 py-12">
        <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-orange-600">Vazhi Pokkan</span>
          <br className="md:hidden" /> - Tamil Nadu Tourism
        </h2>
        <p className="md:text-base text-sm text-gray-700 md:text-center text-justify md:px-64 px-3">
          Experience the invigorating charm of Tamil Nadu, the cultural capital
          of India. Dive into its rich heritage and vibrant traditions with our
          detailed guide.
        </p>
      </div>

      {/* About Tamil Nadu Tourism Section */}
      <div className="flex flex-col justify-start text-left bg-white md:px-16 px-8 py-12">
        <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-6">
          About Tamil Nadu Tourism
        </h2>
        <div>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify">
            Welcome to Tamil Nadu! The land where the tales and influence of
            Cholas, Pandyas, and Pallavas can still be seen and the beauty
            landscape, sacred temples, and imposing wildlife make you feel
            instantly connected with this tourist destination in India. It is
            not wrong to say if we call Tamil Nadu the heart of Incredible
            India. It is one of the top places to visit in India due to its rich
            culture and heritage.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            There is an essence of spirituality through plethora of scenic
            temples, a touch of serenity through its soothing beaches and hill
            stations, an aura of wilderness and vitality through its amazing
            Wildlife Sanctuaries and National Parks, a sense of joy through its
            various festivals and art forms, a spirit of authenticity through
            its delectable cuisines and liveliness in its colorful markets. Yes,
            this bliss of South India is one of a kind. Come here and you will
            realize you are in a land of where each mile reveals something of
            great universal value. In terms of tourism, it has too much to offer
            that you will fall short of vitality to explore.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Tourists here have a variety of experiences to relish. Be it
            heritage monuments, calm beaches, mesmerizing Hill stations or the
            scenic temples, Tamil Nadu is a colorful palette rich culture and
            beauty. Which is the reason Tamil Nadu being the most popular
            tourist destination in India.
          </p>
        </div>

        {/* View More Button */}
        <div className="flex justify-start text-center mt-8">
          <button className="bg-orange-600 text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
            View More
          </button>
        </div>
      </div>

      {/* Best Places to Visit in Tamil Nadu Section */}
      <div className="flex flex-col bg-white md:px-16 px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="md:text-2xl text-xl font-bold text-gray-800">
            Best Places to Visit in Tamil Nadu
          </h2>
          <button className="bg-orange-600 text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
            View More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placesToVisit.map((place, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-md"
            >
              <img
                src={place.src}
                alt={place.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-700 text-sm">{place.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Reach Tamil Nadu Section */}
      <div className="flex flex-col bg-white md:px-16 px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="md:text-2xl text-xl font-bold text-gray-800">
            How to Reach Tamil Nadu?
          </h2>
          <button className="bg-orange-600 text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
            View More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {travelOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-start"
            >
              <div className="flex flex-row items-center gap-3">
                {option.icon}
                <h3 className="text-lg mt-4 font-bold text-gray-800 mb-2">
                  {option.name}
                </h3>
              </div>
              <p className="text-gray-700 text-left text-sm">
                {option.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Time to Visit Tamil Nadu Section */}
      <div className="flex flex-col bg-white md:px-16 px-8 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="md:text-2xl text-xl font-bold text-gray-800">
            Best Time to Visit Tamil Nadu
          </h2>
          <button className="bg-orange-600 text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
            View More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestTimeToVisit.map((season, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white border border-gray-200 p-4 rounded-lg shadow-md"
            >
              <div className="flex flex-row items-center gap-3">
                {season.icon}
                <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                  {season.name}
                </h3>
              </div>
              <p className="text-gray-700 text-sm text-left">
                {season.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Disclaimer Section */}
      <div className="flex flex-col items-start bg-slate-100 md:px-14 px-8 py-12 text-center">
        <h3 className="text-2xl font-bold">
          #TamilnaduTourism
        </h3>
        <p className="text-gray-600 text-base text-left mt-4">
          Explore the world and discover the unique charm of Tamil Nadu with
          #TamilnaduTourism. This project is intended for educational purposes
          only. For more information, please visit:
          <a
            href="https://www.tamilnadutourism.tn.gov.in"
            className="text-orange-600 hover:underline ml-1"
          >
            www.tamilnadutourism.tn.gov.in
          </a>
          . All images and content have been sourced from
          <a
            href="https://www.tamilnadutourism.tn.gov.in"
            className="text-orange-600 hover:underline ml-1"
          >
            www.tamilnadutourism.tn.gov.in 
          </a> 
          &nbsp;and modified to avoid copyright issues.
        </p>
      </div>
    </>
  );
};

export default Home;
