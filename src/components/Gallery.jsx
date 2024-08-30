import React, { useState } from "react";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "All Categories",
    "Hills",
    "Beaches",
    "Wildlife",
    "Waterfalls",
    "Museums",
    "Forts",
    "Pilgrim Centres",
    "Lakes",
  ];

  const images = [
    {
      name: "Narthamalai",
      category: "Hills",
      src: "./src/assets/gallery/narthamalai.webp",
    },
    {
      name: "Dhanush Kodi",
      category: "Beaches",
      src: "./src/assets/gallery/dhanushkodi.webp",
    },
    {
      name: "Mudumalai Wildlife",
      category: "Wildlife",
      src: "./src/assets/gallery/mudumalai.webp",
    },
    {
      name: "Hogenakkal Falls",
      category: "Waterfalls",
      src: "./src/assets/gallery/hogenakkal.webp",
    },
    {
      name: "Gandhi Memorial Museum",
      category: "Museums",
      src: "./src/assets/gallery/gandhi-memorial-museum.webp",
    },
    {
      name: "Thirumayam Fort, Pudukottai",
      category: "Forts",
      src: "./src/assets/gallery/thirumayam-fort-pudukottai.webp",
    },
    {
      name: "Meenakshi Amman Temple",
      category: "Pilgrim Centres",
      src: "./src/assets/gallery/meenakshi-amman-temple.webp",
    },
    {
        name: "Pykara Lake",
        category: "Lakes",
        src: "./src/assets/gallery/pykara-waterfalls.webp",
      },
    {
      name: "Panpoli Thirumalai Kovil",
      category: "Hills",
      src: "./src/assets/gallery/panpoli-thirumalai-kovil.webp",
    },
    {
      name: "Ennore Beach",
      category: "Beaches",
      src: "./src/assets/gallery/ennore.webp",
    },
    {
      name: "Anaimalai Tiger  Reserve",
      category: "Wildlife",
      src: "./src/assets/gallery/anaimalai-tiger-reserve.webp",
    },
    {
      name: "Agathiyar Falls",
      category: "Waterfalls",
      src: "./src/assets/gallery/agathiyar-falls.webp",
    },
    {
      name: "Government Museum, Vellore",
      category: "Museums",
      src: "./src/assets/gallery/government-museum-vellore.webp",
    },
    {
      name: "Thiruchirapalli Rock Fort",
      category: "Forts",
      src: "./src/assets/gallery/tiruchirapalli-rock-fort.webp",
    },
    {
      name: "Thanjavur Periya Kovil",
      category: "Pilgrim Centres",
      src: "./src/assets/gallery/thanjavur-periya-kovil.webp",
    },
    {
        name: "Hogenakkal",
        category: "Lakes",
        src: "./src/assets/gallery/hogenakkal.webp",
      },
    {
      name: "Nilgiri Hills",
      category: "Hills",
      src: "./src/assets/gallery/the-nilgiri-mountain-railway.webp",
    },
    {
      name: "Kanya Kumari Beach",
      category: "Beaches",
      src: "./src/assets/gallery/kanyakumari.webp",
    },
    {
      name: "Viralimalai Peacock Sanctuary",
      category: "Wildlife",
      src: "./src/assets/gallery/viralimalai-peacock-sanctuary.webp",
    },
    {
      name: "Manimuthar Falls",
      category: "Waterfalls",
      src: "./src/assets/gallery/manimuthar-falls.webp",
    },
    {
      name: "Victoria Hall",
      category: "Museums",
      src: "./src/assets/gallery/victoria-hall.webp",
    },
    {
      name: "ranjankuudi Fort",
      category: "Forts",
      src: "./src/assets/gallery/ranjankudi-fort.webp",
    },
    {
      name: "Palani Murugan Kovil",
      category: "Pilgrim Centres",
      src: "./src/assets/gallery/dhandayuthapani-swamy-temple-palani.webp",
    },
    
  ];

  const filteredImages =
    selectedCategory === "All Categories"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <>
      <Navbar />
      <ImageSlider />
      <div className="container md:px-12 px-8 py-12">
        <h1 className="md:text-2xl text-xl font-bold text-center mb-8">
          A Glimpse of Tamil Nadu's Wonders
        </h1>
        <p className="md:text-base text-sm md:text-center text-justify mb-12">
          Explore the beauty and diversity of Tamil Nadu through our curated
          gallery. Discover stunning landscapes, historic monuments, vibrant
          wildlife, and more. Whether planning your next adventure or simply
          admiring the state's wonders, there's something for everyone in our
          gallery.
        </p>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-2 items-start">
            <button
              className="flex items-center justify-between bg-orange-600 w-full text-white px-4 py-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span>Categories</span>
              {isMenuOpen ? (
                <FaCaretDown className="ml-2" />
              ) : (
                <FaCaretUp className="ml-2" />
              )}
            </button>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } bg-transparent font-semibold text-sm`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block md:mt-5 mt-3 w-full text-left ${
                    selectedCategory === category
                      ? "text-orange-600"
                      : "text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div key={image.name} className="relative group">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-56 object-cover rounded shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    {image.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
