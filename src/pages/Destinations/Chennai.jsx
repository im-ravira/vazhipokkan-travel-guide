import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Helmet } from "react-helmet-async";
import { FaPlane, FaTrain, FaBus } from "react-icons/fa";
import ChennaiImage from "../../assets/destinations/Chennai.webp";
import PlainCard from "../../components/common/PlainCard";
import MarinaBeach from "../../assets/chennai/marina.jpg";
import KapaleeshwararTemple from "../../assets/chennai/kapaleeshwarar-temple.jpg";
import FortStGeorgeMusem from "../../assets/chennai/fort-st.george-museum.jpg";
import GuindyNationalPark from "../../assets/chennai/guindy-national-park.jpg";
import ChennaiPoliceMuseum from "../../assets/attractions/police-museum.webp";
import PulicatLake from "../../assets/chennai/pulicat-lake.jpg";
import VGPMarineKingdom from "../../assets/chennai/vgp-marine-kingdom.jpg";
import VedanthangalBirdSanctuary from "../../assets/chennai/vedanthangal-bird-sanctuary.jpg";
import ArignarAnnaZoologicalPark from "../../assets/chennai/arignar-anna-zoological-park.jpg";
import StThomasCathedralBasilica from "../../assets/chennai/st.thomas-cathedral-basilica.jpg";
import DakshinachitraHeritageMuseum from "../../assets/chennai/dakshinachitra-heritage-museum.jpg";
import GovernmentMuseumChennai from "../../assets/chennai/government-museum-chennai.jpg";
import EdwardElliotsBeach from "../../assets/chennai/elliots-beach.webp";
import AdyarECOPark from "../../assets/chennai/adyar-eco-park.jpg";
import BrokenBridge from "../../assets/chennai/broken-bridge.jpg";
import IrukkamIsland from "../../assets/chennai/irukkam-island.jpg";
import MudaliarkuppamBoatHouse from "../../assets/chennai/mudaliarkuppam-boat-house.jpg";
import TirusulamHiddenLake from "../../assets/chennai/tirusulam-hidden-lake.jpg";
import EnnoreBeach from "../../assets/chennai/ennore.webp";
import KumizhiLake from "../../assets/chennai/kumizhi-lake.webp";

const ChennaiPage = () => {
  const mustVisitPlaces = [
    {
      name: "Marina Beach",
      src: MarinaBeach,
      content:
        "Marina Beach, the second-longest urban beach globally, is Chennai's pride. Known for its golden sands, vibrant local markets, and stunning sunrises, it offers a perfect mix of leisure and cultural experience. Visitors can enjoy seafood delicacies, kite flying, or just relax to the soothing sounds of waves along the Bay of Bengal.",
      location: "https://maps.app.goo.gl/UunYUwEvnr89StcD7",
    },
    {
      name: "Kapaleeshwarar Temple",
      src: KapaleeshwararTemple,
      content:
        "Kapaleeshwarar Temple in Mylapore, Chennai, is a stunning example of Dravidian architecture dedicated to Lord Shiva. Adorned with intricate carvings and colorful gopurams, the temple is a spiritual haven and cultural landmark. Visitors are drawn to its rich history, daily rituals, and vibrant festivals that reflect Tamil Nadu's religious heritage.",
      location: "https://maps.app.goo.gl/MeBgVKoXcViNfdLn8",
    },
    {
      name: "Fort St. George Museum",
      src: FortStGeorgeMusem,
      content:
        "Fort St. George, established in 1644 by the British East India Company, stands as a historical landmark in Chennai. The museum within the fort showcases colonial artifacts, weapons, and portraits, offering insights into India's colonial history. It's a must-visit for history enthusiasts and those keen to explore Chennai's past.",
      location: "https://maps.app.goo.gl/c8MGXKpXJxvmkuuE7",
    },
    {
      name: "Guindy National Park",
      src: GuindyNationalPark,
      content:
        "Guindy National Park, one of India's smallest national parks, is an oasis of greenery in Chennai. Home to diverse wildlife, including blackbucks, deer, and many bird species, it offers serene walking trails and a children's park. This park is perfect for nature lovers and families seeking a break from urban life.",
      location: "https://maps.app.goo.gl/nLToZQsM5GQbqpSX8",
    },
    {
      name: "Chennai Police Museum",
      src: ChennaiPoliceMuseum,
      content:
        "The Chennai Police Museum provides a fascinating glimpse into the evolution of law enforcement in Tamil Nadu. With exhibits of vintage uniforms, weapons, and crime records, it captures the history of policing. Located in a historic building, it appeals to history buffs and anyone curious about criminology.",
      location: "https://maps.app.goo.gl/nthhCsdV2mBpYNkT9",
    },
    {
      name: "Pulicat Lake",
      src: PulicatLake,
      content:
        "Pulicat Lake, located on the Tamil Nadu-Andhra Pradesh border, is India's second-largest brackish water lagoon. A paradise for birdwatchers, it attracts flamingos and migratory birds during winter. The tranquil waters, scenic surroundings, and opportunities for boating make it a perfect retreat for nature enthusiasts.",
      location: "https://maps.app.goo.gl/gN1sNDsRbEjY2vPV7",
    },
    {
      name: "VGP Marine Kingdom",
      src: VGPMarineKingdom,
      content:
        "VGP Marine Kingdom, India’s first underwater aquarium, offers a captivating experience with themed underwater tunnels and diverse marine life. Families and marine enthusiasts can marvel at exotic aquatic species while learning about ocean ecosystems, making it a fun and educational outing for all ages.",
      location: "https://maps.app.goo.gl/cHuFL32Zs4qt5Cs76",
    },
    {
      name: "Vedanthangal Bird Sanctuary",
      src: VedanthangalBirdSanctuary,
      content:
        "Vedanthangal Bird Sanctuary, near Chennai, is a renowned haven for migratory birds. Spanning over 74 acres, it hosts pelicans, herons, and flamingos in winter. This serene sanctuary, with its lush greenery and water bodies, offers nature lovers an ideal spot to enjoy birdwatching and photography.",
      location: "https://maps.app.goo.gl/LMcdvEMKiajccVU86",
    },
    {
      name: "Arignar Anna Zoological Park",
      src: ArignarAnnaZoologicalPark,
      content:
        "Arignar Anna Zoological Park, also known as Vandalur Zoo, is one of India's largest zoological parks. It houses diverse wildlife species in spacious enclosures mimicking natural habitats. Visitors can enjoy safari rides, nature trails, and educational exhibits, making it an excellent destination for families.",
      location: "https://maps.app.goo.gl/ehiAGYhzBirwPSd87",
    },
    {
      name: "St. Thomas Cathedral Basilica",
      src: StThomasCathedralBasilica,
      content:
        "St. Thomas Cathedral Basilica in Chennai is a revered site built over the tomb of St. Thomas, an apostle of Jesus. This Neo-Gothic structure boasts stunning architecture, serene interiors, and colorful stained glass windows. It is a spiritual and historical landmark for pilgrims and tourists alike.",
      location: "https://maps.app.goo.gl/y2C7obmmAbrhn2xCA",
    },
    {
      name: "Dakshinachitra Heritage Museum",
      src: DakshinachitraHeritageMuseum,
      content:
        "Dakshinachitra Heritage Museum, near Chennai, is a cultural treasure trove showcasing South India's traditional art, crafts, and architecture. Visitors can explore reconstructed houses, enjoy craft workshops, and experience live performances, offering a vibrant journey into Tamil Nadu's heritage.",
      location: "https://maps.app.goo.gl/UKVeZLa73FRdPDEdA",
    },
    {
      name: "Government Museum, Chennai",
      src: GovernmentMuseumChennai,
      content:
        "The Government Museum, established in 1851, is one of Chennai's cultural gems. It houses rare artifacts, South Indian bronzes, and an impressive art gallery. With sections dedicated to archaeology, zoology, and botany, it offers a comprehensive glimpse into India's heritage and natural history.",
      location: "https://maps.app.goo.gl/MqszGPw7ovKUFVvg6",
    },
    {
      name: "Edward Elliot's Beach",
      src: EdwardElliotsBeach,
      content:
        "Edward Elliot's Beach, located in Besant Nagar, is a serene coastal destination in Chennai. Known for its clean shores and peaceful ambiance, it is ideal for evening strolls. The Karl Schmidt Memorial and nearby eateries add to its charm, making it a favorite for families and couples.",
      location: "https://maps.app.goo.gl/Ze2wNrUocrb4NaCp9",
    },
    {
      name: "Mudaliarkuppam Boat House",
      src: MudaliarkuppamBoatHouse,
      content:
        "Mudaliarkuppam Boat House, located south of Chennai, is a tranquil spot for boating and water sports. Surrounded by scenic landscapes and lush greenery, it is an excellent destination for picnics and family outings. The calm waters and serene atmosphere make it a relaxing getaway.",
      location: "https://maps.app.goo.gl/57ZdqpPwrDRn7L3F9",
    },
  ];

  const underratedPlaces = [
    {
      name: "Adyar ECO Park",
      src: AdyarECOPark,
      content:
        "Adyar Eco Park, also known as Tholkappia Poonga, is a verdant ecological park in Chennai. It boasts rich biodiversity, including numerous plant and bird species. Perfect for nature walks and birdwatching, this serene park offers a peaceful escape from the urban hustle.",
      location: "https://maps.app.goo.gl/Ei9ckNV4MaxqgPfP7",
    },
    {
      name: "Broken Bridge",
      src: BrokenBridge,
      content:
        "Broken Bridge in Chennai is an offbeat spot known for its unique structure and scenic views. A favorite among photographers, it offers stunning sunset vistas over the Adyar River. The tranquil ambiance makes it a perfect getaway for those seeking solitude and picturesque landscapes.",
      location: "https://maps.app.goo.gl/nQT8Ryxkx5jTRTDo9",
    },
    {
      name: "Irukkam Island",
      src: IrukkamIsland,
      content:
        "Irukkam Island, located near Pulicat Lake, is a hidden gem for birdwatching and tranquility. Accessible by boat, the island features lush greenery and serene waters, making it an ideal destination for nature lovers and photographers seeking an untouched retreat.",
      location: "https://maps.app.goo.gl/9g7wHWp9crPV7Pnz9",
    },
    {
      name: "Tirusulam Hidden Lake",
      src: TirusulamHiddenLake,
      content:
        "Tirusulam Hidden Lake is a serene and lesser-known spot in Chennai, surrounded by rocky terrains and greenery. Ideal for nature enthusiasts, the lake offers a quiet escape for picnics and photography. Its untouched charm makes it a delightful retreat from the city.",
      location: "https://maps.app.goo.gl/gEKUmQacu3jjPALY9",
    },
    {
      name: "Ennore Beach",
      src: EnnoreBeach,
      content:
        "Ennore Beach, located in the northern part of Chennai, is a peaceful coastal stretch offering pristine sands and stunning ocean views. Less crowded than other beaches, it is perfect for long walks, sunset gazing, and enjoying the calming sound of waves.",
      location: "https://maps.app.goo.gl/5j7SG8sRefRsCLGcA",
    },
    {
      name: "Kumizhi Lake",
      src: KumizhiLake,
      content:
        "Kumizhi Lake, situated on the outskirts of Chennai, is a serene spot known for its natural beauty and biodiversity. Surrounded by lush greenery, the lake attracts migratory birds, making it an excellent destination for birdwatchers and nature enthusiasts.",
      location: "https://maps.app.goo.gl/2JHdz8fVjFauPeJJ7",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      <Helmet>
        <title>
          Chennai - The Gateway to South India | Vazhipokkan&apos;s Travel Guide
        </title>
        <meta
          name="description"
          content="Discover Chennai, the vibrant capital of Tamil Nadu. Explore its iconic Marina Beach, historic Fort St. George, rich cultural heritage, and bustling modern city life."
        />
        <meta
          name="keywords"
          content="Chennai, Marina Beach, Tamil Nadu Tourism, South India Travel, Chennai Travel Guide, Culture, Heritage, Modern City, Fort St. George, Kapaleeshwarar Temple"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="Chennai - The Gateway to South India | Vazhipokkan's Travel Guide"
        />
        <meta
          property="og:description"
          content="Discover Chennai, the vibrant capital of Tamil Nadu. Explore its iconic Marina Beach, historic Fort St. George, rich cultural heritage, and bustling modern city life."
        />
        <meta
          property="og:image"
          content="https://vazhipokkan.netlify.app/destinations/Chennai.webp"
        />
        <meta
          property="og:url"
          content="https://vazhipokkan.netlify.app/chennai"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chennai - The Gateway to South India | Vazhipokkan's Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Discover Chennai, the vibrant capital of Tamil Nadu. Explore its iconic Marina Beach, historic Fort St. George, rich cultural heritage, and bustling modern city life."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/destinations/Chennai.webp"
        />
        <meta
          property="twitter:url"
          content="https://vazhipokkan.netlify.app/chennai"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/chennai" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <img
          className="w-full h-[40vh] md:h-[60vh] lg:h-[100vh] object-cover"
          src={ChennaiImage}
          alt="Madurai"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 leading-loose">
          <h1 className="text-white text-center font-bold text-3xl md:text-5xl lg:text-6xl mt-28 md:mt-44 lg:mt-52">
            Welcome to{" "}
            <span className="text-orange-500 font-extrabold">Chennai</span>
          </h1>
          <p className="text-white text-xl md:text-3xl lg:text-4xl font-light mt-2 md:mt-4">
            The{" "}
            <span className="text-orange-500 font-normal">Vibrant Gateway</span>{" "}
            of Tamil Nadu
          </p>
        </div>
      </section>

      {/* About Chennai */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            About Chennai
          </h2>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify">
            Chennai, formerly known as{" "}
            <span className="text-orange-500">Madras</span>, is a bustling city
            that represents the spirit of{" "}
            <span className="text-orange-500">Tamil Nadu</span>. It is a blend
            of ancient traditions and modern attractions. The city boasts
            beautiful landmarks such as the renowned{" "}
            <span className="text-orange-500">Marina Beach</span>, the iconic{" "}
            <span className="text-orange-500">Kapaleeshwarar Temple</span>, and
            the historic{" "}
            <span className="text-orange-500">Fort St. George</span>. Chennai is
            the center of{" "}
            <span className="text-orange-500">Carnatic music</span> and
            classical dance, with the{" "}
            <span className="text-orange-500">Margazhi Music Festival</span>{" "}
            drawing visitors from around the world. The city's urban development
            goes hand-in-hand with its cultural heritage, making it a
            fascinating destination for travelers. Chennai’s legacy is deeply
            rooted in its <span className="text-orange-500">Tamil culture</span>
            , reflected in both its festivals and daily life.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Chennai’s landmarks tell the story of its past, from ancient temples
            to colonial structures. The{" "}
            <span className="text-orange-500">San Thome Basilica</span>, built
            on <span className="text-orange-500">St. Thomas</span>'s tomb, is a
            key attraction, alongside the{" "}
            <span className="text-orange-500">Government Museum</span>, which
            showcases artifacts from{" "}
            <span className="text-orange-500">Tamil Nadu's</span> past. Nature
            lovers can take a break from the urban rush by visiting the{" "}
            <span className="text-orange-500">Guindy National Park</span>,
            offering a peaceful escape. The nearby town of{" "}
            <span className="text-orange-500">Mahabalipuram</span>, famous for
            its <span className="text-orange-500">rock-cut temples</span> and
            coastline, is a <span className="text-orange-500">UNESCO</span>
            -listed site worth visiting. Whether exploring historical sites or
            enjoying modern amenities, Chennai offers a diverse range of
            experiences that showcase its rich culture.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Chennai also captivates visitors with its vibrant street life,
            traditional <span className="text-orange-500">cuisine</span>, and
            spiritual ambiance. The city offers a rich culinary experience where
            you can savor local favorites like{" "}
            <span className="text-orange-500">idli</span>,{" "}
            <span className="text-orange-500">dosa</span>, and the aromatic{" "}
            <span className="text-orange-500">filter coffee</span>, all served
            in bustling street food stalls and local eateries. The famous
            shopping district of{" "}
            <span className="text-orange-500">T. Nagar</span> is a treasure
            trove of <span className="text-orange-500">silk sarees</span> and
            intricate <span className="text-orange-500">jewelry</span>,
            attracting visitors seeking traditional attire and accessories. For
            those in search of spiritual peace, Chennai is dotted with historic{" "}
            <span className="text-orange-500">temples</span>, grand{" "}
            <span className="text-orange-500">churches</span>, and peaceful{" "}
            <span className="text-orange-500">mosques</span>, offering a serene
            escape from the bustling urban life. With its perfect blend of
            tradition, culture, and spirituality, Chennai offers a welcoming
            atmosphere where travelers can connect with both the local way of
            life and its rich heritage.
          </p>
        </div>
      </section>

      <section className="flex flex-col bg-white md:px-12 px-4 pb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          How to Reach Chennai
        </h2>
        <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* By Air */}

          <div className="bg-white flex flex-col items-start ">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <FaPlane className="text-orange-600 w-10 h-10" />
              <h3 className="md:text-xl text-base my-2 font-bold text-gray-800">
                By Air
              </h3>
            </div>
            <div>
              <div className="text-justify">
                <p className="text-sm md:text-base text-gray-700">
                  Chennai International Airport, located in Meenambakkam, is one
                  of India's major aviation hubs, approximately 21 km from the
                  city center.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                    It connects Chennai with all major Indian cities, including
                    Delhi, Mumbai, Bangalore, and Kolkata.
                  </li>
                  <li>
                    International flights to cities like Dubai, Singapore,
                    London, and New York are frequent and reliable.
                  </li>
                  <li>
                    Airlines such as Air India, Emirates, Indigo, and Singapore
                    Airlines operate here.
                  </li>
                  <li>
                    The airport is well-connected by taxis, app-based cabs, and
                    the Chennai Metro Rail for hassle-free transfers.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* By Train */}

          <div className="bg-white flex flex-col items-start ">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <FaTrain className="text-orange-600 w-10 h-10" />
              <h3 className="md:text-xl text-base my-2 font-bold text-gray-800">
                By Train
              </h3>
            </div>
            <div>
              <div className="text-justify">
                <p className="text-sm md:text-base text-gray-700">
                  Chennai is a major railway hub with multiple stations,
                  including Chennai Central, Chennai Egmore, and Tambaram.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                    Chennai Central connects the city to all major cities like
                    Delhi, Mumbai, Kolkata, and Hyderabad through superfast
                    trains.
                  </li>
                  <li>
                    Chennai Egmore serves regional and suburban routes within
                    Tamil Nadu and nearby states.
                  </li>
                  <li>
                    The stations feature modern facilities such as lounges, food
                    courts, and automated ticketing systems.
                  </li>
                  <li>
                    Local transport, including buses, autos, and cabs, is
                    readily available from the stations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* By Road */}

          <div className="bg-white flex flex-col items-start ">
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
              <FaBus className="text-orange-600 w-10 h-10" />
              <h3 className="md:text-xl text-base my-2 font-bold text-gray-800">
                By Road
              </h3>
            </div>
            <div>
              <div className="text-justify">
                <p className="text-sm md:text-base text-gray-700">
                  Chennai is well-connected by a robust road network, linking it
                  to major cities in Tamil Nadu and neighboring states.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                    National Highways NH-32, NH-48, NH-16, and NH-716 connect
                    Chennai to cities like Bangalore, Hyderabad, and Kolkata.
                  </li>
                  <li>
                    State highways ensure connectivity to smaller towns and
                    villages in Tamil Nadu.
                  </li>
                  <li>
                    Tamil Nadu State Transport Corporation and private bus
                    operators offer frequent services to nearby cities and
                    states.
                  </li>
                  <li>
                    The East Coast Road (ECR) to Puducherry offers scenic views,
                    making it popular for road trips.
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
          <br className="block md:hidden" /> and Around Chennai
        </h2>

        <article className="lg:mx-8 md:mx-6 mx-2 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-4">
            {mustVisitPlaces.map((mustVisitPlace, index) => (
              <PlainCard
                key={index}
                name={mustVisitPlace.name}
                src={mustVisitPlace.src}
                content={mustVisitPlace.content}
                location={mustVisitPlace.location}
                additionalClasses="w-full"
              />
            ))}
          </div>
        </article>
      </section>
      <section className="py-2 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pb-8">
          Discover the Less-Traveled
          <br className="block md:hidden" /> Paths of Chennai
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

export default ChennaiPage;
