import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ImageSlider from "./ImageSlider";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Footer from "../Footer";

const Gallery = () => {
  const galleryImages = [
    { name: "Marina Beach", src: "./src/assets/imageslider/marina.webp" },
    {
      name: "Bragadeeshwarar Temple",
      src: "./src/assets/imageslider/Bragadeeshwarar-temple.webp",
    },
    { name: "Hogenakkal Falls", src: "./src/assets/imageslider/Hogenakkal.webp" },
    {
      name: "Mukurthi National Park",
      src: "./src/assets/imageslider/Mukurthi-national-park.webp",
    },
    { name: "Ooty Hills", src: "./src/assets/imageslider/Ooty.webp" },
  ];
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
      src: "./src/assets/gallery/pykara-lake.webp",
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
      name: "Avalanche Lake",
      category: "Lakes",
      src: "./src/assets/gallery/avalanche-lake.webp",
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
    {
      name: "Ooty Lake",
      category: "Lakes",
      src: "./src/assets/gallery/ootty-lake.webp",
    },
    {
      name: "Balamathi",
      category: "Hills",
      src: "./src/assets/gallery/balamathi.webp",
    },
    {
      name: "Tharangambadi Beach",
      category: "Beaches",
      src: "./src/assets/gallery/tharangambadi.webp",
    },
    {
      name: "Pulicat Lake Bird Sanctuary",
      category: "Wildlife",
      src: "./src/assets/gallery/pulicat-lake-bird-sanctuary.webp",
    },
    {
      name: "Pykara Falls",
      category: "Waterfalls",
      src: "./src/assets/gallery/pykara-waterfalls.webp",
    },
    {
      name: "Vivekananda House and Museum",
      category: "Museums",
      src: "./src/assets/gallery/vivekananda-museum.webp",
    },
    {
      name: "Athiyaman Fort",
      category: "Forts",
      src: "./src/assets/gallery/athiyaman-fort.webp",
    },
    {
      name: "Velankanni Courch",
      category: "Pilgrim Centres",
      src: "./src/assets/gallery/velankanni.webp",
    },
    {
      name: "Sembakkam Lake",
      category: "Lakes",
      src: "./src/assets/gallery/sembakkam-lake.webp",
    },
    {
      name: "Kolukkumalai",
      category: "Hills",
      src: "./src/assets/gallery/kolukkumalai.webp",
    },
    {
      name: "Pondicherry Rock Beach",
      category: "Beaches",
      src: "./src/assets/gallery/pondicherry-rock-beach.webp",
    },
    {
      name: "Kodaikanal Wildlife Sanctuary",
      category: "Wildlife",
      src: "./src/assets/gallery/kodaikanal-wildlife-sanctuary.webp",
    },
    {
      name: "Courtallam Five Falls",
      category: "Waterfalls",
      src: "./src/assets/gallery/courtallam-five-falls.webp",
    },
    {
      name: "Tamilnadu Police Museum",
      category: "Museums",
      src: "./src/assets/gallery/police-museum.webp",
    },
    {
      name: "Dindigul Fort",
      category: "Forts",
      src: "./src/assets/gallery/dindigul-fort.webp",
    },
    {
      name: "Rameswaram Temple",
      category: "Pilgrim Centres",
      src: "./src/assets/gallery/rameswaram-temple.webp",
    },
    {
      name: "Veeranam Lake",
      category: "Lakes",
      src: "./src/assets/gallery/veeranam-lake.webp",
    },
  ];

  const filteredImages =
    selectedCategory === "All Categories"
      ? images
      : images.filter((image) => image.category === selectedCategory);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <Navbar />
      <ImageSlider images={galleryImages} autoPlay={true} />
      <div className="md:px-8 px-6 py-12">
        <h1 className="md:text-2xl text-xl font-extrabold text-center mb-8">
          A Glimpse of <br className="md:hidden block" /> Tamil Nadu's Wonders
        </h1>
        <p className="md:text-base text-sm md:text-center text-justify mb-12">
          Explore the beauty and diversity of Tamil Nadu through our curated
          gallery. Discover stunning landscapes, historic monuments, vibrant
          wildlife, and more. Whether planning your next adventure or simply
          admiring the state's wonders, there's something for everyone in our
          gallery.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row">
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
        <div className="mt-12 text-center">
          <p className="md:text-sm text-xs text-gray-600">
            This site is for educational purposes. To view more images of Tamil
            Nadu, visit{" "}
            <a
              href="https://www.tamilnadutourism.tn.gov.in/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              www.tamilnadutourism.tn.gov.in
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
