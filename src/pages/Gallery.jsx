import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/common/ImageSlider";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Footer from "../components/Footer";
import MarinaBeach from "../assets/imageslider/marina.webp";
import BragadeeshwararTemple from "../assets/imageslider/Bragadeeshwarar-temple.webp";
import MukurthiNationalPark from "../assets/imageslider/Mukurthi-national-park.webp";
import OotyHills from "../assets/imageslider/Ooty.webp";
import Narthamalai from "../assets/gallery/narthamalai.webp";
import DhanushKodi from "../assets/gallery/dhanushkodi.webp";
import MudumalaiWildlife from "../assets/gallery/mudumalai.webp";
import HogenakkalFalls from "../assets/gallery/hogenakkal.webp";
import GandhiMemorialMuseum from "../assets/gallery/gandhi-memorial-museum.webp";
import ThirumayamFort from "../assets/gallery/thirumayam-fort-pudukottai.webp";
import MeenakshiAmmanTemple from "../assets/gallery/meenakshi-amman-temple.webp";
import PykaraLake from "../assets/gallery/pykara-lake.webp";
import PanpoliThirumalaiKovil from "../assets/gallery/panpoli-thirumalai-kovil.webp";
import EnnoreBeach from "../assets/gallery/ennore.webp";
import AnaimalaiTigerReserve from "../assets/gallery/anaimalai-tiger-reserve.webp";
import AgathiyarFalls from "../assets/gallery/agathiyar-falls.webp";
import GovernmentMuseumVellore from "../assets/gallery/government-museum-vellore.webp";
import ThiruchirapalliRockFort from "../assets/gallery/tiruchirapalli-rock-fort.webp";
import ThanjavurPeriyaKovil from "../assets/gallery/thanjavur-periya-kovil.webp";
import AvalancheLake from "../assets/gallery/avalanche-lake.webp";
import NilgiriHills from "../assets/gallery/the-nilgiri-mountain-railway.webp";
import KanyakumariBeach from "../assets/gallery/thiruvalluvar.webp";
import ViralimalaiPeacockSanctuary from "../assets/gallery/viralimalai-peacock-sanctuary.webp";
import ManimutharFalls from "../assets/gallery/manimuthar-falls.webp";
import VictoriaHall from "../assets/gallery/victoria-hall.webp";
import RanjankuudiFort from "../assets/gallery/ranjankudi-fort.webp";
import PalaniMuruganKovil from "../assets/gallery/dhandayuthapani-swamy-temple-palani.webp";
import OotyLake from "../assets/gallery/ootty-lake.webp";
import Balamathi from "../assets/gallery/balamathi.webp";
import TharangambadiBeach from "../assets/gallery/tharangambadi.webp";
import PulicatLakeBirdSanctuary from "../assets/gallery/pulicat-lake-bird-sanctuary.webp";
import PykaraFalls from "../assets/gallery/pykara-waterfalls.webp";
import VivekanandaHouseandMuseum from "../assets/gallery/vivekananda-museum.webp";
import AthiyamanFort from "../assets/gallery/athiyaman-fort.webp";
import VelankanniCourch from "../assets/gallery/velankanni.webp";
import SembakkamLake from "../assets/gallery/sembakkam-lake.webp";
import Kolukkumalai from "../assets/gallery/kolukkumalai.webp";
import PondicherryRockBeach from "../assets/gallery/pondicherry-rock-beach.webp";
import KodaikanalwildlifeSanctuary from "../assets/gallery/kodaikanal-wildlife-sanctuary.webp";
import CourtallamFiveFalls from "../assets/gallery/courtallam-five-falls.webp";
import TamilnaduPoliceMuseum from "../assets/gallery/police-museum.webp";
import DindigulFort from "../assets/gallery/dindigul-fort.webp";
import RameswaramTemple from "../assets/gallery/rameswaram-temple.webp";
import VeeranamLake from "../assets/gallery/veeranam-lake.webp";

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
      src: Narthamalai,
      route: "*",
    },
    {
      name: "Dhanush Kodi",
      category: "Beaches",
      src: DhanushKodi,
      route: "*",
    },
    {
      name: "Mudumalai Wildlife",
      category: "Wildlife",
      src: MudumalaiWildlife,
      route: "*",
    },
    {
      name: "Hogenakkal Falls",
      category: "Waterfalls",
      src: HogenakkalFalls,
      route: "*",
    },
    {
      name: "Gandhi Memorial Museum",
      category: "Museums",
      src: GandhiMemorialMuseum,
      route: "*",
    },
    {
      name: "Thirumayam Fort, Pudukottai",
      category: "Forts",
      src: ThirumayamFort,
      route: "*",
    },
    {
      name: "Meenakshi Amman Temple",
      category: "Pilgrim Centres",
      src: MeenakshiAmmanTemple,
      route: "*",
    },
    {
      name: "Pykara Lake",
      category: "Lakes",
      src: PykaraLake,
      route: "*",
    },
    {
      name: "Panpoli Thirumalai Kovil",
      category: "Hills",
      src: PanpoliThirumalaiKovil,
      route: "*",
    },
    {
      name: "Ennore Beach",
      category: "Beaches",
      src: EnnoreBeach,
      route: "*",
    },
    {
      name: "Anaimalai Tiger Reserve",
      category: "Wildlife",
      src: AnaimalaiTigerReserve,
      route: "*",
    },
    {
      name: "Agathiyar Falls",
      category: "Waterfalls",
      src: AgathiyarFalls,
      route: "*",
    },
    {
      name: "Government Museum, Vellore",
      category: "Museums",
      src: GovernmentMuseumVellore,
      route: "*",
    },
    {
      name: "Thiruchirapalli Rock Fort",
      category: "Forts",
      src: ThiruchirapalliRockFort,
      route: "*",
    },
    {
      name: "Thanjavur Periya Kovil",
      category: "Pilgrim Centres",
      src: ThanjavurPeriyaKovil,
      route: "*",
    },
    {
      name: "Avalanche Lake",
      category: "Lakes",
      src: AvalancheLake,
      route: "*",
    },
    {
      name: "Nilgiri Hills",
      category: "Hills",
      src: NilgiriHills,
      route: "*",
    },
    {
      name: "Kanyakumari Beach",
      category: "Beaches",
      src: KanyakumariBeach,
      route: "*",
    },
    {
      name: "Viralimalai Peacock Sanctuary",
      category: "Wildlife",
      src: ViralimalaiPeacockSanctuary,
      route: "*",
    },
    {
      name: "Manimuthar Falls",
      category: "Waterfalls",
      src: ManimutharFalls,
      route: "*",
    },
    {
      name: "Victoria Hall",
      category: "Museums",
      src: VictoriaHall,
      route: "*",
    },
    {
      name: "Ranjankuudi Fort",
      category: "Forts",
      src: RanjankuudiFort,
      route: "*",
    },
    {
      name: "Palani Murugan Kovil",
      category: "Pilgrim Centres",
      src: PalaniMuruganKovil,
      route: "*",
    },
    {
      name: "Ooty Lake",
      category: "Lakes",
      src: OotyLake,
      route: "*",
    },
    {
      name: "Balamathi",
      category: "Hills",
      src: Balamathi,
      route: "*",
    },
    {
      name: "Tharangambadi Beach",
      category: "Beaches",
      src: TharangambadiBeach,
      route: "*",
    },
    {
      name: "Pulicat Lake Bird Sanctuary",
      category: "Wildlife",
      src: PulicatLakeBirdSanctuary,
      route: "*",
    },
    {
      name: "Pykara Falls",
      category: "Waterfalls",
      src: PykaraFalls,
      route: "*",
    },
    {
      name: "Vivekananda House and Museum",
      category: "Museums",
      src: VivekanandaHouseandMuseum,
      route: "*",
    },
    {
      name: "Athiyaman Fort",
      category: "Forts",
      src: AthiyamanFort,
      route: "*",
    },
    {
      name: "Velankanni Courch",
      category: "Pilgrim Centres",
      src: VelankanniCourch,
      route: "*",
    },
    {
      name: "Sembakkam Lake",
      category: "Lakes",
      src: SembakkamLake,
      route: "*",
    },
    {
      name: "Kolukkumalai",
      category: "Hills",
      src: Kolukkumalai,
      route: "*",
    },
    {
      name: "Pondicherry Rock Beach",
      category: "Beaches",
      src: PondicherryRockBeach,
      route: "*",
    },
    {
      name: "Kodaikanal wildlife Sanctuary",
      category: "Wildlife",
      src: KodaikanalwildlifeSanctuary,
      route: "*",
    },
    {
      name: "Courtallam Five Falls",
      category: "Waterfalls",
      src: CourtallamFiveFalls,
      route: "*",
    },
    {
      name: "Tamilnadu Police Museum",
      category: "Museums",
      src: TamilnaduPoliceMuseum,
      route: "*",
    },
    {
      name: "Dindigul Fort",
      category: "Forts",
      src: DindigulFort,
      route: "*",
    },
    {
      name: "Rameswaram Temple",
      category: "Pilgrim Centres",
      src: RameswaramTemple,
      route: "*",
    },
    {
      name: "Veeranam Lake",
      category: "Lakes",
      src: VeeranamLake,
      route: "*",
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
