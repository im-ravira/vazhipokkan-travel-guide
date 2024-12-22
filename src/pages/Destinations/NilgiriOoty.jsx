import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Helmet } from "react-helmet-async";
import { FaPlane, FaTrain, FaBus } from "react-icons/fa";
import NilgiriImage from "../../assets/nilgiri/Ooty.webp";
import PlainCard from "../../components/common/PlainCard";
import DoddabettaPeak from "../../assets/nilgiri/doddabetta-peak.jpg";
import NilgiriMountainRailway from "../../assets/attractions/the-nilgiri-mountain-railway.webp";
import MudumalaiTigerReserve from "../../assets/attractions/mudumalai.webp";
import NeedleRockViewPoint from "../../assets/nilgiri/needle-rock-view-point.jpg";
import KodanadViewPoint from "../../assets/nilgiri/kodanad-view-point.jpg";
import CatherineWaterfalls from "../../assets/nilgiri/catherine-waterfalls.jpg";
import UpperBhavaniReservoir from "../../assets/nilgiri/upper-bhavani-lake.jpg";
import LambsRock from "../../assets/nilgiri/lambs-rock-coonoor.jpg";
import LadyCanningsSeat from "../../assets/nilgiri/lady-cannings-seat-coonoor.jpg";
import DroogFort from "../../assets/nilgiri/droog-fort-coonoor.jpg";
import BotanicalGarden from "../../assets/nilgiri/government-botanical-garden.jpg";
import RoseGarden from "../../assets/nilgiri/government-rose-garden.jpg";
import BoatHouse from "../../assets/nilgiri/tamilnadu-tourism-boat-house.jpg";
import AvalancheLake from "../../assets/nilgiri/avalanche-lake.jpg";
import EmeraldLake from "../../assets/nilgiri/emerald-lake.jpg";
import PykaraWaterfalls from "../../assets/nilgiri/pykara-waterfalls.jpg";
import StStephensChurch from "../../assets/nilgiri/st.stephen's-church.jpg";
import BlackThunder from "../../assets/nilgiri/blackthunder-water-theme-park.jpg";
import MystiqueVille from "../../assets/nilgiri/mystique-ville-kalhatti-falls.jpg";
import KamarajSagarDam from "../../assets/nilgiri/kamaraj-sagar-dam.jpg";
import LawFallsCoonoor from "../../assets/nilgiri/law-falls-coonoor.jpg";
import CarinHillForest from "../../assets/nilgiri/carin-hill-forest.jpg";
import SundattyFalls from "../../assets/nilgiri/sundatty-falls.jpg";
import RangaswamyPeak from "../../assets/nilgiri/rangaswamy-peak-terk.jpg";
import SholurViewPoint from "../../assets/nilgiri/sholur-view-point.jpg";
import GalaxyWaterfalls from "../../assets/nilgiri/galaxy-valley-waterfalls.jpg";
import UylattiFalls from "../../assets/nilgiri/uylatti-falls-ooty.jpg";

const NilgiriOotyPage = () => {
  const nilgiriMustVisitPlaces = [
    {
      name: "Doddabetta Peak",
      src: DoddabettaPeak,
      content:
        "Doddabetta, the highest peak in the Nilgiris, offers panoramic views of lush valleys and misty skies. A must-visit for nature lovers and photographers, it features tranquil settings, vibrant flora, and breathtaking vistas, making it ideal for hiking and enjoying nature’s serenity.",
      location: "https://maps.app.goo.gl/yiYXYmAuBfkVBxLy6",
    },
    {
      name: "Nilgiri Mountain Railway Line",
      src: NilgiriMountainRailway,
      content:
        "A UNESCO World Heritage Site, the Nilgiri Mountain Railway is famous for its scenic rides through dense forests, rolling hills, and tea plantations. This iconic railway offers a nostalgic experience for travelers and showcases the charm of Nilgiri’s breathtaking landscapes.",
      location: "https://maps.app.goo.gl/L4F4hMA8qiVWVB15A",
    },
    {
      name: "Mudumalai Tiger Reserve",
      src: MudumalaiTigerReserve,
      content:
        "Mudumalai Tiger Reserve is a wildlife sanctuary home to diverse species like tigers, elephants, and exotic birds. Offering thrilling safaris, dense greenery, and serene settings, it’s a paradise for wildlife enthusiasts and nature lovers seeking adventure and peace.",
      location: "https://maps.app.goo.gl/E6agGReun42Hw7Qj6",
    },
    {
      name: "Needle Rock View Point",
      src: NeedleRockViewPoint,
      content:
        "Needle Rock View Point provides stunning 360-degree views of Nilgiri’s lush hills and valleys. Its needle-shaped rock formation is a natural marvel. Perfect for photography, trekking, and peaceful retreats, this spot is a true gem for nature enthusiasts.",
      location: "https://maps.app.goo.gl/PjvqtRyPMTszmX5n6",
    },
    {
      name: "Kodanad View Point",
      src: KodanadViewPoint,
      content:
        "Kodanad View Point offers captivating views of Nilgiri Hills, valleys, and the Moyar River. Surrounded by lush greenery, it’s a perfect spot for photography, picnics, or simply enjoying the tranquility of nature. A hidden gem for travelers seeking scenic beauty.",
      location: "https://maps.app.goo.gl/rcTQjHrzXtCvrFvw8",
    },
    {
      name: "Catherine Waterfalls",
      src: CatherineWaterfalls,
      content:
        "Catherine Waterfalls, nestled in the lush Nilgiris, is a refreshing retreat for nature lovers. Surrounded by dense greenery and offering a serene ambiance, it’s ideal for hiking, photography, or relaxing amidst the soothing sounds of cascading water.",
      location: "https://maps.app.goo.gl/erU1RNqxHiNYe6wz8",
    },
    {
      name: "Upper Bhavani Reservoir",
      src: UpperBhavaniReservoir,
      content:
        "Upper Bhavani Reservoir, with its pristine blue-green waters, offers a serene escape amidst nature. Surrounded by verdant landscapes, this tranquil spot is perfect for picnics, birdwatching, and peaceful moments, providing a refreshing retreat in the Nilgiris.",
      location: "https://maps.app.goo.gl/vidGwH45QsTJ8uMU9",
    },
    {
      name: "Lamb’s Rock",
      src: LambsRock,
      content:
        "Lamb’s Rock is a popular viewpoint in Coonoor, offering spectacular views of the Coimbatore plains and lush tea estates. A favorite among photographers and nature lovers, it’s an excellent spot for enjoying scenic walks and peaceful moments.",
      location: "https://maps.app.goo.gl/et8tJjuhvfqtkXw37",
    },
    {
      name: "Lady Canning’s Seat",
      src: LadyCanningsSeat,
      content:
        "Lady Canning’s Seat is a tranquil viewpoint named after Lady Charlotte Canning. It offers breathtaking views of the Nilgiri Hills and serene surroundings, making it a perfect spot for scenic photography and quiet reflection amidst nature’s charm.",
      location: "https://maps.app.goo.gl/vzmiRVd6DyqFU5h69",
    },
    {
      name: "Droog Fort, Coonoor",
      src: DroogFort,
      content:
        "Droog Fort, once a stronghold of Tipu Sultan, is a historic landmark surrounded by lush greenery. A great trekking spot, it offers panoramic views and a slice of history amidst natural beauty. Ideal for history buffs and adventurers alike.",
      location: "https://maps.app.goo.gl/atQe6QeuU7wAu9938",
    },
  ];

  const ootyMustVisitPlaces = [
    {
      name: "Government Botanical Garden",
      src: BotanicalGarden,
      content:
        "A sprawling garden in Ooty with diverse plant species, offering a perfect retreat for nature lovers. Famous for its annual flower show and terraced layout, it’s a must-visit spot to enjoy vibrant blooms and lush greenery.",
      location: "https://maps.app.goo.gl/tYSt3796T7aLmASe6",
    },
    {
      name: "Government Rose Garden",
      src: RoseGarden,
      content:
        "Asia’s largest rose garden, showcasing thousands of rose varieties in a stunning terraced setting. Its vibrant colors, delightful fragrance, and panoramic views make it a paradise for flower enthusiasts and photographers.",
      location: "https://maps.app.goo.gl/3x9pVqkBZkJRhd5J6",
    },
    {
      name: "Tamil Nadu Tourism Boat House, Ooty",
      src: BoatHouse,
      content:
        "Located by Ooty Lake, the Boat House offers scenic boating experiences in serene waters. A popular attraction for families and couples, it features paddleboats, rowboats, and a tranquil ambiance amidst picturesque surroundings.",
      location: "https://maps.app.goo.gl/ytg1m1VbpjBRopmN6",
    },
    {
      name: "Avalanche Lake",
      src: AvalancheLake,
      content:
        "A peaceful lake surrounded by dense forests and rolling hills, Avalanche Lake is perfect for nature walks, fishing, and camping. Its pristine beauty and serene atmosphere make it a hidden gem for nature lovers.",
      location: "https://maps.app.goo.gl/4ccjUhWtecQExuPd6",
    },
    {
      name: "Emerald Lake",
      src: EmeraldLake,
      content:
        "Nestled in the Silent Valley region, Emerald Lake is known for its calm waters, stunning sunsets, and serene vibes. A quiet retreat away from the crowds, it’s ideal for picnics, birdwatching, and peaceful moments in nature.",
      location: "https://maps.app.goo.gl/eDTnELMoHb1wS4by8",
    },
    {
      name: "Pykara Waterfalls",
      src: PykaraWaterfalls,
      content:
        "A majestic waterfall near Ooty, surrounded by lush greenery and rolling hills. Pykara Waterfalls is a favorite spot for nature lovers, offering refreshing views, scenic trails, and a tranquil escape from bustling city life.",
      location: "https://maps.app.goo.gl/LjtwnkUUmA1rrXZk6",
    },
    {
      name: "C.S.I St. Stephen’s Church",
      src: StStephensChurch,
      content:
        "One of the oldest churches in Ooty, C.S.I St. Stephen’s Church boasts stunning colonial-era architecture and peaceful interiors. A serene spiritual retreat, it offers historical charm and a tranquil ambiance for visitors.",
      location: "https://maps.app.goo.gl/4Qh7VQ9c99X9qPeT7",
    },
    {
      name: "Black Thunder - Water Theme Park",
      src: BlackThunder,
      content:
        "Located near Ooty, Black Thunder is a thrilling water theme park featuring exciting rides, wave pools, and adventure activities. Suitable for all age groups, it’s a fun destination for families and friends looking for entertainment.",
      location: "https://maps.app.goo.gl/XSYSpwpm9PEeuau8A",
    },
    {
      name: "Mystique Ville, Kalhatti Falls",
      src: MystiqueVille,
      content:
        "Mystique Ville is a serene retreat near the scenic Kalhatti Falls. Surrounded by lush greenery and tranquil views, it’s a paradise for nature enthusiasts and travelers seeking relaxation amidst natural beauty.",
      location: "https://maps.app.goo.gl/QN1xXipmQPbUbW6M6",
    },
    {
      name: "Kamaraj Sagar Dam",
      src: KamarajSagarDam,
      content:
        "A peaceful spot near Ooty, Kamaraj Sagar Dam is perfect for picnics and birdwatching. Surrounded by verdant landscapes, the dam offers a tranquil ambiance for visitors to unwind and connect with nature’s beauty.",
      location: "https://maps.app.goo.gl/VeWENmAMobr4nJR4A",
    },
  ];

  const underratedPlaces = [
    {
      name: "Law Falls Coonoor",
      src: LawFallsCoonoor,
      content:
        "A serene waterfall near Coonoor, surrounded by lush greenery. Law Falls offers a refreshing retreat for nature lovers and a tranquil spot for picnics and photography. Its cascading waters make it a hidden treasure worth exploring.",
      location: "https://maps.app.goo.gl/FaUeaXELwzXCfVtw5",
    },
    {
      name: "Carin Hill Forest",
      src: CarinHillForest,
      content:
        "A hidden gem in the Nilgiris, Carin Hill Forest offers dense woods and breathtaking scenery. Ideal for trekking, birdwatching, and exploring unspoiled nature, it’s a peaceful retreat for outdoor enthusiasts.",
      location: "https://maps.app.goo.gl/ubrsM5jqfMgtBsxMA",
    },
    {
      name: "Sundatty Falls",
      src: SundattyFalls,
      content:
        "Tucked away in the Nilgiri Hills, Sundatty Falls captivates visitors with its untouched beauty. Its serene environment, crystal-clear waters, and tranquil surroundings make it an ideal escape for nature lovers.",
      location: "https://maps.app.goo.gl/GqScjAaHiAx4iqZL9",
    },
    {
      name: "Rangaswamy Peak",
      src: RangaswamyPeak,
      content:
        "A towering granite cliff near Kotagiri, Rangaswamy Peak offers breathtaking views of the Nilgiri Hills. Popular among trekkers and adventurers, its challenging trails and stunning vistas make it a must-visit spot.",
      location: "https://maps.app.goo.gl/Fti319oSpafWXknA6",
    },
    {
      name: "Sholur View Point",
      src: SholurViewPoint,
      content:
        "A quiet vantage point near Ooty, Sholur View Point offers stunning views of valleys and tea plantations. Perfect for sunrise and sunset photography, it’s an idyllic spot for those seeking serenity in the Nilgiris.",
      location: "https://maps.app.goo.gl/7hppHCorSuMKEMB57",
    },
    {
      name: "Galaxy Waterfalls",
      src: GalaxyWaterfalls,
      content:
        "A serene and lesser-explored waterfall in the Nilgiris, Galaxy Waterfalls features gentle cascades and tranquil surroundings. It’s an ideal getaway for nature lovers and anyone seeking peace and relaxation.",
      location: "https://maps.app.goo.gl/yjKHXWjHLY9SmYU76",
    },
    {
      name: "Uylatti Falls",
      src: UylattiFalls,
      content:
        "A hidden treasure in the Nilgiris, Uylatti Falls is known for its unspoiled beauty and soothing ambiance. Ideal for hiking and unwinding, this peaceful spot is perfect for those looking to escape the crowds.",
      location: "https://maps.app.goo.gl/ALnF1dNdXR24qzuF7",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      <Helmet>
        <title>
          Nilgiri - The Enchanting Highlands of Tamil Nadu | Vazhipokkan&apos;s
          Travel Guide
        </title>
        <meta
          name="description"
          content="Discover the enchanting Nilgiris and Ooty, home toஔ lush green hills, serene lakes, vibrant gardens, cascading waterfalls, and the iconic Nilgiri Mountain Railway. A perfect getaway for nature lovers and adventurers alike."
        />
        <meta
          name="keywords"
          content="Nilgiris, Ooty, Tamil Nadu Tourism, Hill Stations, Scenic Views, Nature, Tea Plantations, Ooty Lake, Botanical Garden, Rose Garden, Nilgiri Mountain Railway, South India Travel"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="Nilgiri - The Enchanting Highlands of Tamil Nadu | Vazhipokkan's Travel Guide"
        />
        <meta
          property="og:description"
          content="Discover the enchanting Nilgiris and Ooty, home toஔ lush green hills, serene lakes, vibrant gardens, cascading waterfalls, and the iconic Nilgiri Mountain Railway. A perfect getaway for nature lovers and adventurers alike."
        />
        <meta
          property="og:image"
          content="https://vazhipokkan.netlify.app/destinations/Ooty.webp"
        />
        <meta
          property="og:url"
          content="https://vazhipokkan.netlify.app/nilgiri-ooty"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nilgiri - The Enchanting Highlands of Tamil Nadu | Vazhipokkan's Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Discover the enchanting Nilgiris and Ooty, home toஔ lush green hills, serene lakes, vibrant gardens, cascading waterfalls, and the iconic Nilgiri Mountain Railway. A perfect getaway for nature lovers and adventurers alike."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/destinations/Ooty.webp"
        />
        <meta
          property="twitter:url"
          content="https://vazhipokkan.netlify.app/nilgiri-ooty"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vazhipokkan.netlify.app/nilgiri-ooty"
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <img
          className="w-full h-[40vh] md:h-[60vh] lg:h-[100vh] object-cover"
          src={NilgiriImage}
          alt="Madurai"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 leading-loose">
          <h1 className="text-white text-center font-bold text-3xl md:text-5xl lg:text-6xl mt-28 md:mt-44 lg:mt-52 max-sm:leading-9 max-sm:hidden">
            Welcome to{" "}
            <span className="text-orange-500 font-extrabold">Nilgiri</span> &{" "}
            <span className="text-orange-500 font-extrabold">Ooty</span>
          </h1>
          <h1 className="text-white text-center font-bold text-3xl md:text-5xl lg:text-6xl mt-28 md:mt-44 lg:mt-52 max-sm:leading-9 md:hidden">
            The <span className="text-orange-500 font-extrabold">Nilgiri</span>{" "}
            & <span className="text-orange-500 font-extrabold">Ooty</span>
          </h1>
          <p className="text-white text-xl md:text-3xl lg:text-4xl font-light mt-2 md:mt-4 text-center max-sm:hidden">
            The{" "}
            <span className="text-orange-500 font-normal">
              Enchanting Highlands
            </span>{" "}
            of Tamil Nadu
          </p>
          <p className="text-white text-xl md:text-3xl lg:text-4xl font-light mt-2 md:mt-4 text-center md:hidden">
            The{" "}
            <span className="text-orange-500 font-normal">Scenic Retreat</span>{" "}
            of Tamil Nadu
          </p>
        </div>
      </section>

      {/* About Nilgiri */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            About Nilgiri
          </h2>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify">
            The Nilgiri Hills, also known as the{" "}
            <span className="text-orange-500">Blue Mountains</span>, are a
            mesmerizing region of Tamil Nadu, celebrated for their natural
            beauty, cool climate, and cultural richness. At the heart of the
            Nilgiris is <span className="text-orange-500">Ooty</span>, often
            referred to as the{" "}
            <span className="text-orange-500">'Queen of Hill Stations'</span>, a
            favorite destination for its misty landscapes, verdant tea estates,
            and colonial-era charm. Popular attractions include the serene{" "}
            <span className="text-orange-500">Ooty Lake</span>, where visitors
            can enjoy boating amidst lush greenery, and the vibrant{" "}
            <span className="text-orange-500">Botanical Gardens</span>, home to
            a wide variety of exotic plants and flowers. Another highlight is{" "}
            <span className="text-orange-500">Doddabetta Peak</span>, the
            highest point in Tamil Nadu, offering sweeping panoramic views of
            the surrounding hills. The Nilgiris promise an unforgettable
            experience for every visitor.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            The Nilgiris are a nature lover's paradise, offering a range of
            activities from scenic walks to thrilling adventures. The{" "}
            <span className="text-orange-500">Nilgiri Mountain Railway</span>, a
            UNESCO World Heritage site, is a must-see attraction, renowned for
            its charming toy train rides through tunnels, over bridges, and
            along rolling hills covered in mist. Nearby, the picturesque town of{" "}
            <span className="text-orange-500">Coonoor</span> invites travelers
            with its lush tea gardens, tranquil atmosphere, and stunning{" "}
            <span className="text-orange-500">Sim’s Park</span>. Wildlife
            enthusiasts will relish exploring the{" "}
            <span className="text-orange-500">Mudumalai National Park</span>,
            home to tigers, elephants, and other diverse species. Together,
            these attractions make the Nilgiris an irresistible destination.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Beyond its natural beauty, the Nilgiris offer a rich cultural
            experience. The region's local cuisine is a treat for food lovers,
            with specialties like{" "}
            <span className="text-orange-500">varkey</span>, a flaky biscuit
            unique to the hills, and the globally acclaimed{" "}
            <span className="text-orange-500">Nilgiri tea</span>, which boasts a
            distinctive flavor and aroma. Festivals in the Nilgiris showcase the
            vibrant traditions of Tamil Nadu, with celebrations blending tribal
            and regional cultures. Whether trekking along verdant trails,
            sipping tea amidst sprawling plantations, or marveling at the area's
            historic landmarks, the Nilgiris offer a tranquil retreat that
            seamlessly merges natural splendor with cultural depth. Every corner
            has a story to tell and beauty to admire.
          </p>
        </div>
      </section>

      <section className="flex flex-col bg-white md:px-12 px-4 pb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          How to Reach Nilgiri
        </h2>
        <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* By Air */}
          <div className="bg-white flex flex-col items-start">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <FaPlane className="text-orange-600 w-10 h-10" />
              <h3 className="md:text-xl text-base my-2 font-bold text-gray-800">
                By Air
              </h3>
            </div>
            <div>
              <div className="text-justify">
                <p className="text-sm md:text-base text-gray-700">
                  The nearest airport to Nilgiri is Coimbatore International
                  Airport, located about 85 km away. It serves as a gateway for
                  travelers visiting the Nilgiris.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                    The airport offers direct flights to major cities like
                    Chennai, Bangalore, Mumbai, and Delhi.
                  </li>
                  <li>
                    International flights to destinations such as Dubai,
                    Singapore, and Colombo are also available.
                  </li>
                  <li>
                    Airlines like Air India, Indigo, SpiceJet, and Singapore
                    Airlines operate here frequently.
                  </li>
                  <li>
                    From the airport, taxis and private cabs ensure a smooth
                    journey to popular destinations like Ooty.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* By Train */}
          <div className="bg-white flex flex-col items-start">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <FaTrain className="text-orange-600 w-10 h-10" />
              <h3 className="md:text-xl text-base my-2 font-bold text-gray-800">
                By Train
              </h3>
            </div>
            <div>
              <div className="text-justify">
                <p className="text-sm md:text-base text-gray-700">
                  The Nilgiris are well-connected by train, with Mettupalayam
                  Railway Station serving as the primary railhead.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                    Major trains like the Nilgiri Express connect Mettupalayam
                    to Chennai and Coimbatore.
                  </li>
                  <li>
                    From Mettupalayam, the Nilgiri Mountain Railway, a UNESCO
                    World Heritage toy train, takes you to Ooty.
                  </li>
                  <li>
                    The scenic ride offers breathtaking views, passing through
                    tunnels, forests, and bridges.
                  </li>
                  <li>
                    Local transport, including cabs and buses, is available at
                    the station for onward journeys to other parts of the
                    Nilgiris.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* By Road */}
          <div className="bg-white flex flex-col items-start">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <FaBus className="text-orange-600 w-10 h-10" />
              <h3 className="md:text-xl text-base my-2 font-bold text-gray-800">
                By Road
              </h3>
            </div>
            <div>
              <div className="text-justify">
                <p className="text-sm md:text-base text-gray-700">
                  Nilgiri is accessible by an extensive road network, connecting
                  it to major cities in Tamil Nadu and Karnataka.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                    National Highways like NH-181 and NH-67 link Nilgiri to
                    Coimbatore, Mysore, and Bangalore.
                  </li>
                  <li>
                    State highways provide routes to nearby towns such as
                    Gudalur and Kotagiri.
                  </li>
                  <li>
                    Regular buses by Tamil Nadu State Transport Corporation and
                    private operators connect Ooty to major cities.
                  </li>
                  <li>
                    Scenic routes like the one through Bandipur Forest offer a
                    mesmerizing drive for road trip enthusiasts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Key Attractions */}
      <section className="py-2 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pb-8">
          Must-Visit Attractions in
          <br className="block md:hidden" /> and Around Nilgiri
        </h2>

        <article className="lg:mx-8 md:mx-6 mx-2 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4">
            {nilgiriMustVisitPlaces.map((nilgiriMustVisitPlace, index) => (
              <PlainCard
                key={index}
                name={nilgiriMustVisitPlace.name}
                src={nilgiriMustVisitPlace.src}
                content={nilgiriMustVisitPlace.content}
                location={nilgiriMustVisitPlace.location}
                additionalClasses="w-full"
              />
            ))}
          </div>
        </article>
      </section>
      <section className="py-2 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pb-8">
          Must-Visit Attractions in
          <br className="block md:hidden" /> and Around Ooty
        </h2>

        <article className="lg:mx-8 md:mx-6 mx-2 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4">
            {ootyMustVisitPlaces.map((ootyMustVisitPlace, index) => (
              <PlainCard
                key={index}
                name={ootyMustVisitPlace.name}
                src={ootyMustVisitPlace.src}
                content={ootyMustVisitPlace.content}
                location={ootyMustVisitPlace.location}
                additionalClasses="w-full"
              />
            ))}
          </div>
        </article>
      </section>
      <section className="py-2 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pb-8">
          Discover the Less-Traveled
          <br className="block md:hidden" /> Paths of Nilgiri & Ooty
        </h2>

        <article className="lg:mx-8 md:mx-6 mx-2 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4">
            {underratedPlaces.map((underratedPlaces, index) => (
              <PlainCard
                key={index}
                name={underratedPlaces.name}
                src={underratedPlaces.src}
                content={underratedPlaces.content}
                location={underratedPlaces.location}
                additionalClasses="w-full"
              />
            ))}
          </div>
        </article>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default NilgiriOotyPage;
