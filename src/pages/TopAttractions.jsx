import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/common/DescriptionCard";
import { Link } from "react-router-dom";
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

  const filteredAttractions =
    selectedCategory === "All"
      ? attractions
      : attractions.filter(
          (attraction) => attraction.category === selectedCategory
        );

  return (
    <>
      <Navbar />
      <div className="md:px-8 px-6 py-24 min-h-screen">
        <h1 className="md:text-2xl text-xl font-extrabold text-center mb-4">
          Top Attractions in Tamil Nadu
        </h1>
        <p className="md:text-base text-xs  md:text-center text-left mb-8 md:px-6 px-2">
          Tamil Nadu boasts a mix of scenic hill stations, serene beaches, and
          ancient temples, offering something for every traveler. From wildlife
          sanctuaries to stunning waterfalls, the state's natural beauty and
          rich heritage make it a must-visit destination.
        </p>
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
              <Link to={attraction.route} key={name}>
                <DestinationCard
                  key={attraction.name}
                  name={attraction.name}
                  src={attraction.src}
                />
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No attractions found in this category.
            </p>
          )}
        </div>
      </div>
      <div className="mb-12 text-center">
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
      </div>
      <Footer />
    </>
  );
};

export default TopAttractions;
