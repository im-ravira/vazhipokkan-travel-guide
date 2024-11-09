import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/common/DescriptionCard";
import NilgiriMountain from "../assets/the-nilgiri-mountain.webp";
import PictureResources from "../components/common/PictureResources";
import { Helmet } from 'react-helmet-async';

const TopAttractionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const attractions = PictureResources();

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


  const filteredAttractions =
    selectedCategory === "All"
      ? attractions
      : attractions.filter(
          (attraction) => attraction.category === selectedCategory
        );

  return (
    <main className="min-h-screen w-full">
      <Helmet>
        <title>Top Attractions in Tamil Nadu - Vazhipokkan Travel Guide</title>
        <meta
          name="description"
          content="Explore the top attractions in Tamil Nadu, including serene hill stations, beautiful beaches, wildlife sanctuaries, and ancient temples."
        />
        <meta
          name="keywords"
          content="Tamil Nadu Tourism, South India, Tamil Nadu Travel Guide,Tamil Nadu Gallery, Tamil Nadu Wonders, Tourist Attractions, History, Culture, Hills, Beaches, waterfalls, forts, Temples, Wildlife"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* Meta OG tags */}
        <meta property="og:title" content="Top Attractions in Tamil Nadu - Vazhipokkan Travel Guide" />
        <meta
          property="og:description"
          content="Explore the top attractions in Tamil Nadu, including serene hill stations, beautiful beaches, wildlife sanctuaries, and ancient temples."
        />
        <meta property="og:image" content="https://vazhipokkan.netlify.app/attractions/nilagiri-mountain.jpg" />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/attractions" />
        <meta property="og:type" content="website"/>

        {/* Meta Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Attractions in Tamil Nadu - Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Explore the top attractions in Tamil Nadu, including serene hill stations, beautiful beaches, wildlife sanctuaries, and ancient temples."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/attractions/nilagiri-mountain.jpg"
        />
        <meta property="twitter:url" content="https://vazhipokkan.netlify.app/attractions" />

        {/* Meta Robots tag */}
        <meta name="robots" content="index, noimageindex, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/attractions" />  
      </Helmet>
      <Navbar />
      <article className="flex flex-col items-center justify-center relative">
        <img
          className="w-full h-[40vh] md:h-[60vh] lg:h-screen object-cover"
          src={NilgiriMountain}
          alt="Nilgiri Mountain"
        />
        <div className="absolute flex flex-col bottom-6 md:bottom-10 lg:bottom-12 left-6 md:left-10 lg:left-12 items-center justify-center text-white">
          <h1 className="text-[1.2rem] md:text-[2rem] lg:text-4xl mb-2 md:mb-4 lg:mb-6 text-center w-full font-extrabold">
            Top Attractions
          </h1>
        </div>
      </article>
      <div className="text-center md:px-12 px-8 py-16">
        <h2 className="text-[1.2rem] md:text-[1.5rem] lg:text-[2.2rem] font-extrabold text-gray-800 mb-4">
          Top Attractions in Tamil Nadu
        </h2>
        <p className="text-sm md:text-base lg:text-lg lg:leading-7 text-gray-700 md:text-center text-justify md:px-18 px-0">
          Tamil Nadu boasts a mix of scenic hill stations, serene beaches, and
          ancient temples, offering something for every traveler. From wildlife
          sanctuaries to stunning waterfalls, the state&apos;s natural beauty and
          rich heritage make it a must-visit destination.
        </p>
      </div>
      <section className="md:px-8 px-6 min-h-screen">
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

        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.length > 0 ? (
            filteredAttractions.map((attraction) => (
                <DestinationCard
                  key={attraction.name}
                  name={attraction.name}
                  src={attraction.src}
                  route={attraction.route}
                />
            ))
          ) : (
            <p className="text-center text-gray-600">
              No attractions found in this category.
            </p>
          )}
        </section>
      </section>
      <section className="my-12 text-center">
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
      </section>
      <Footer />
    </main>
  );
};

export default TopAttractionsPage;
