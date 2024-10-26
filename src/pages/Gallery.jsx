import { useState } from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/common/ImageSlider";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Footer from "../components/Footer";
import MarinaBeach from "../assets/imageslider/marina.webp";
import BragadeeshwararTemple from "../assets/imageslider/Bragadeeshwarar-temple.webp";
import HogenakkalFalls from "../assets/attractions/Hogenakkal.webp";
import MukurthiNationalPark from "../assets/imageslider/Mukurthi-national-park.webp";
import OotyHills from "../assets/imageslider/Ooty.webp";
import PictureResources from "../components/common/PictureResources";
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const galleryImages = [
    { name: "Marina Beach", src: MarinaBeach, },
    {
      name: "Bragadeeshwarar Temple",
      src: BragadeeshwararTemple,
    },
    {
      name: "Hogenakkal Falls",
      src: HogenakkalFalls,
    },
    {
      name: "Mukurthi National Park",
      src: MukurthiNationalPark,
    },
    { name: "Ooty Hills", src: OotyHills, },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const images = PictureResources();
  

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

  const filteredImages =
    selectedCategory === "All Categories"
      ? images
      : images.filter((image) => image.category === selectedCategory);


  return (
    <main className="min-h-screen w-full">
      <Helmet>
        <title>Gallery - Vazhipokkan Travel Guide</title>
        <meta
          name="description"
          content="Explore a gallery of Tamil Nadu's beautiful destinations, including beaches, temples, waterfalls, and wildlife sanctuaries."
        />
        <meta
          name="keywords"
          content="Tamil Nadu Tourism, South India, Tamil Nadu Travel Guide,Tamil Nadu Gallery, Tamil Nadu Wonders, Tourist Attractions, Hills, Beaches, waterfalls, forts, Temples, Wildlife"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* Meta OG tags */}
        <meta property="og:title" content="Gallery - Vazhipokkan Travel Guide" />
        <meta
          property="og:description"
          content="Explore a gallery of Tamil Nadu's beautiful destinations, including beaches, temples, waterfalls, and wildlife sanctuaries."
        />
        <meta property="og:image" content="https://vazhipokkan.netlify.app/gallery/hokenakal-waterfalls.jpg" />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/gallery" />
        <meta property="og:type" content="website"/>

        {/* Meta Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gallery - Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Explore a gallery of Tamil Nadu's beautiful destinations, including beaches, temples, waterfalls, and wildlife sanctuaries."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/gallery/hokenakal-waterfalls.jpg"
        />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/gallery" />

        {/* Meta Robots tag */}
        <meta name="robots" content="index, noimageindex, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/gallery" />  
      </Helmet>
      <Navbar />
      <ImageSlider images={galleryImages} autoPlay={true} />
      <section className="md:px-8 px-4 py-12">
        <h1 className="text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] font-extrabold text-center mb-8">
          A Glimpse of <br className="md:hidden block" /> Tamil Nadu's Wonders
        </h1>
        <p className="text-xs md:text-base lg:text-lg md:text-center text-justify mb-12">
          Explore the beauty and diversity of Tamilnadu through our curated
          gallery. Discover stunning Scenery, historic monuments,
          wildlife, and more. Whether planning your next adventure or simply
          admiring the state's wonders, there's something for everyone in our
          gallery.
        </p>
        <section className="flex flex-col gap-4 lg:flex-row">
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
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">
                    {image.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12 text-center">
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
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
