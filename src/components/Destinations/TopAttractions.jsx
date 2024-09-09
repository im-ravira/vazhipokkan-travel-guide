import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DestinationCard from "./DescriptionCard";
import { Link } from "react-router-dom";

const TopAttractions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { label: "All", value: "All" },
    { label: "Hills", value: "Hills" },
    { label: "Beaches", value: "Beaches" },
    { label: "Wildlife", value: "Wildlife" },
    { label: "Waterfalls", value: "Waterfalls" },
    { label: "Museums", value: "Museums" },
    { label: "Forts", value: "Forts" },
    { label: "Lakes", value: "Lakes" },
    { label: "Pilgrims", value: "Pilgrim Centres" },
  ];

  const attractions = [
    {
        name: "Narthamalai",
        category: "Hills",
        src: "./src/assets/gallery/narthamalai.webp",
        route: "*",
      },
      {
        name: "Dhanush Kodi",
        category: "Beaches",
        src: "./src/assets/gallery/dhanushkodi.webp",
        route: "*",
      },
      {
        name: "Mudumalai Wildlife",
        category: "Wildlife",
        src: "./src/assets/gallery/mudumalai.webp",
        route: "*",
      },
      {
        name: "Hogenakkal Falls",
        category: "Waterfalls",
        src: "./src/assets/gallery/hogenakkal.webp",
        route: "*",
      },
      {
        name: "Gandhi Memorial Museum",
        category: "Museums",
        src: "./src/assets/gallery/gandhi-memorial-museum.webp",
        route: "*",
      },
      {
        name: "Thirumayam Fort, Pudukottai",
        category: "Forts",
        src: "./src/assets/gallery/thirumayam-fort-pudukottai.webp",
        route: "*",
      },
      {
        name: "Meenakshi Amman Temple",
        category: "Pilgrim Centres",
        src: "./src/assets/gallery/meenakshi-amman-temple.webp",
        route: "*",
      },
      {
        name: "Pykara Lake",
        category: "Lakes",
        src: "./src/assets/gallery/pykara-lake.webp",
        route: "*",
      },
      {
        name: "Panpoli Thirumalai Kovil",
        category: "Hills",
        src: "./src/assets/gallery/panpoli-thirumalai-kovil.webp",
        route: "*",
      },
      {
        name: "Ennore Beach",
        category: "Beaches",
        src: "./src/assets/gallery/ennore.webp",
        route: "*",
      },
      {
        name: "Anaimalai Tiger  Reserve",
        category: "Wildlife",
        src: "./src/assets/gallery/anaimalai-tiger-reserve.webp",
        route: "*",
      },
      {
        name: "Agathiyar Falls",
        category: "Waterfalls",
        src: "./src/assets/gallery/agathiyar-falls.webp",
        route: "*",
      },
      {
        name: "Government Museum, Vellore",
        category: "Museums",
        src: "./src/assets/gallery/government-museum-vellore.webp",
        route: "*",
      },
      {
        name: "Thiruchirapalli Rock Fort",
        category: "Forts",
        src: "./src/assets/gallery/tiruchirapalli-rock-fort.webp",
        route: "*",
      },
      {
        name: "Thanjavur Periya Kovil",
        category: "Pilgrim Centres",
        src: "./src/assets/gallery/thanjavur-periya-kovil.webp",
        route: "*",
      },
      {
        name: "Avalanche Lake",
        category: "Lakes",
        src: "./src/assets/gallery/avalanche-lake.webp",
        route: "*",
      },
      {
        name: "Nilgiri Hills",
        category: "Hills",
        src: "./src/assets/gallery/the-nilgiri-mountain-railway.webp",
        route: "*",
      },
      {
        name: "Kanya Kumari Beach",
        category: "Beaches",
        src: "./src/assets/gallery/kanyakumari.webp",
        route: "*",
      },
      {
        name: "Viralimalai Peacock Sanctuary",
        category: "Wildlife",
        src: "./src/assets/gallery/viralimalai-peacock-sanctuary.webp",
        route: "*",
      },
      {
        name: "Manimuthar Falls",
        category: "Waterfalls",
        src: "./src/assets/gallery/manimuthar-falls.webp",
        route: "*",
      },
      {
        name: "Victoria Hall",
        category: "Museums",
        src: "./src/assets/gallery/victoria-hall.webp",
        route: "*",
      },
      {
        name: "ranjankuudi Fort",
        category: "Forts",
        src: "./src/assets/gallery/ranjankudi-fort.webp",
        route: "*",
      },
      {
        name: "Palani Murugan Kovil",
        category: "Pilgrim Centres",
        src: "./src/assets/gallery/dhandayuthapani-swamy-temple-palani.webp",
        route: "*",
      },
      {
        name: "Ooty Lake",
        category: "Lakes",
        src: "./src/assets/gallery/ootty-lake.webp",
        route: "*",
      },
      {
        name: "Balamathi",
        category: "Hills",
        src: "./src/assets/gallery/balamathi.webp",
        route: "*",
      },
      {
        name: "Tharangambadi Beach",
        category: "Beaches",
        src: "./src/assets/gallery/tharangambadi.webp",
        route: "*",
      },
      {
        name: "Pulicat Lake Bird Sanctuary",
        category: "Wildlife",
        src: "./src/assets/gallery/pulicat-lake-bird-sanctuary.webp",
        route: "*",
      },
      {
        name: "Pykara Falls",
        category: "Waterfalls",
        src: "./src/assets/gallery/pykara-waterfalls.webp",
        route: "*",
      },
      {
        name: "Vivekananda House and Museum",
        category: "Museums",
        src: "./src/assets/gallery/vivekananda-museum.webp",
        route: "*",
      },
      {
        name: "Athiyaman Fort",
        category: "Forts",
        src: "./src/assets/gallery/athiyaman-fort.webp",
        route: "*",
      },
      {
        name: "Velankanni Courch",
        category: "Pilgrim Centres",
        src: "./src/assets/gallery/velankanni.webp",
        route: "*",
      },
      {
        name: "Sembakkam Lake",
        category: "Lakes",
        src: "./src/assets/gallery/sembakkam-lake.webp",
        route: "*",
      },
      {
        name: "Kolukkumalai",
        category: "Hills",
        src: "./src/assets/gallery/kolukkumalai.webp",
        route: "*",
      },
      {
        name: "Pondicherry Rock Beach",
        category: "Beaches",
        src: "./src/assets/gallery/pondicherry-rock-beach.webp",
        route: "*",
      },
      {
        name: "Kodaikanal Wildlife Sanctuary",
        category: "Wildlife",
        src: "./src/assets/gallery/kodaikanal-wildlife-sanctuary.webp",
        route: "*",
      },
      {
        name: "Courtallam Five Falls",
        category: "Waterfalls",
        src: "./src/assets/gallery/courtallam-five-falls.webp",
        route: "*",
      },
      {
        name: "Tamilnadu Police Museum",
        category: "Museums",
        src: "./src/assets/gallery/police-museum.webp",
        route: "*",
      },
      {
        name: "Dindigul Fort",
        category: "Forts",
        src: "./src/assets/gallery/dindigul-fort.webp",
        route: "*",
      },
      {
        name: "Rameswaram Temple",
        category: "Pilgrim Centres",
        src: "./src/assets/gallery/rameswaram-temple.webp",
        route: "*",
      },
      {
        name: "Veeranam Lake",
        category: "Lakes",
        src: "./src/assets/gallery/veeranam-lake.webp",
        route: "*",
      },
  ];

  const filteredAttractions = selectedCategory === "All"
    ? attractions
    : attractions.filter(attraction => attraction.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="md:px-8 px-6 py-24 min-h-screen">
        <h1 className="md:text-2xl text-xl font-extrabold text-center mb-4">Top Attractions in Tamil Nadu</h1>
        <p className="md:text-base text-xs  md:text-center text-left mb-8 md:px-6 px-2">Tamil Nadu boasts a mix of scenic hill stations, serene beaches, and ancient temples, offering something for every traveler. From wildlife sanctuaries to stunning waterfalls, the state's natural beauty and rich heritage make it a must-visit destination.</p>
        <div className="md:flex md:justify-center md:items-center mb-12 hidden">
          <div className="grid md:grid-cols-9 grid-cols-2 gap-0">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-1 md:px-6 py-1 border border-gray-300 lg:text-base md:text-sm text:xs ${
                  selectedCategory === category.value
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:hidden">
          <div className="flex flex-col gap-2 items-start">
            <button
              className="flex items-center justify-between bg-orange-600 w-full text-white px-4 py-2 mb-6 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span>Categories</span>
              {isMenuOpen ? (
                <FaCaretUp className="ml-2" />
              ) : (
                <FaCaretDown className="ml-2" />
              )}
            </button>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } bg-transparent font-semibold text-sm`}
            >
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setIsMenuOpen(false); // Close the menu when a category is selected
                  }}
                  className={`block md:mt-5 mt-3 w-full text-left ${
                    selectedCategory === category.value
                      ? "text-orange-600"
                      : "text-gray-800"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.length > 0 ? (
            filteredAttractions.map((attraction) => (
              <Link to={attraction.route} key={name}><DestinationCard
                key={attraction.name}
                name={attraction.name}
                src={attraction.src}
              /></Link>
            ))
          ) : (
            <p className="text-center text-gray-600">No attractions found in this category.</p>
          )}
        </div>
      </div>
      <div className="mb-12 text-center">
          <p className="md:text-sm text-xs text-gray-600">
            This site is for educational purposes. To <br className="md:hidden block" />view more imformations of
            TamilNadu, <br className="md:hidden block" />visit{" "}
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

export default TopAttractions;
