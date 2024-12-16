import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { Helmet } from "react-helmet-async";
import { FaPlane, FaTrain, FaBus } from "react-icons/fa";
import MaduraiImage from "../../assets/destinations/Madurai.webp";
import PlainCard from "../../components/common/PlainCard";
import MeenakshiTemple from "../../assets/Madurai/meenakshi-temple.jpg";
import AlagarkovilTempleShrine from "../../assets/Madurai/alagarkoil-temple-shrine.jpg";
import Thirupparankunram from "../../assets/Madurai/tirupparankunram.jpg";
import ThirumalaiNayakarMahal from "../../assets/Madurai/thirumalai-nayakar-mahal.jpg";
import GandhiMuseum from "../../assets/Madurai/gandhi-museum-madurai.jpg";
import VillacherryPotteryVillage from "../../assets/Madurai/villacherry-pottery-village.jpg";
import StMarysCathedralChurch from "../../assets/Madurai/st-marys-cathedral-church.jpg";
import KeelakuyilkudiSamanarHills from "../../assets/Madurai/keelakuyilkudi-samanar-hills.jpg";
import VandiyurMariammanTeppakulam from "../../assets/Madurai/vandiyur-mariamman-teppakulam.jpg";
import KutladampattiFalls from "../../assets/Madurai/kutladampatti-falls.jpg";
import Kuruvithurai from "../../assets/Madurai/kuruvithurai.jpg";
import KuttupattiFalls from "../../assets/Madurai/kuttupatti-falls.jpg";
import MadakulamKabalieshwariTemple from "../../assets/Madurai/madakulam-kabhalieshwari-temple.jpg";
import AllanganallurFalls from "../../assets/Madurai/allanganallur-falls-kalvelipatti.jpg";

const MaduraiPage = () => {
  const mustVisitPlaces = [
    {
      name: "Meenakshi Temple",
      src: MeenakshiTemple,
      content:
        "Meenakshi Temple, located in Madurai, is an architectural marvel dedicated to Goddess Meenakshi and Lord Sundareswarar. Renowned for its stunning gopurams, intricate sculptures, and vibrant festivals, this historic temple is a must-visit for its spiritual ambiance and cultural significance, attracting millions of devotees and tourists annually.",
      location:
        "https://maps.app.goo.gl/mqDCBMvbmVmnFED69",
    },
    {
      name: "Alagarkovil Temple Shrine",
      src: AlagarkovilTempleShrine,
      content:
        "Alagarkovil Temple Shrine, nestled in the Alagar Hills near Madurai, is dedicated to Lord Vishnu as Kallazhagar. Known for its serene environment and intricate stone carvings, the temple is a blend of spirituality and nature. It plays a significant role in the Chithirai Festival when the deity visits the Vaigai River, a mesmerizing event celebrated with devotion.",
      location:
        "https://maps.app.goo.gl/k63YoVcHKnJ8Fpnw6",
    },
    {
      name: "Thirupparankunram",
      src: Thirupparankunram,
      content:
        "Thirupparankunram is one of the six sacred abodes of Lord Murugan, located near Madurai. This ancient rock-cut temple is celebrated for its unique architecture, housing deities carved into the hills. It is a place of immense spiritual significance, attracting devotees and history enthusiasts alike for its divine aura and rich cultural heritage.",
      location:
        "https://maps.app.goo.gl/pFXZJYXDxwqhYRKN8",
    },
    {
      name: "Thirumalai Nayakar Mahal",
      src: ThirumalaiNayakarMahal,
      content:
        "Thirumalai Nayakar Mahal, located in Madurai, is an iconic palace built in 1636 by King Thirumalai Nayak. This Indo-Saracenic marvel is known for its grandiose architecture, featuring towering pillars, elaborate stucco work, and an enchanting courtyard. It reflects the grandeur of Tamil history and is a must-visit for its evening sound-and-light show depicting the Silappathikaram.",
      location:
        "https://maps.app.goo.gl/Buz1CEXps3ANXUh56",
    },
    {
      name: "Gandhi Museum",
      src: GandhiMuseum,
      content:
        "The Gandhi Museum in Madurai is a tribute to Mahatma Gandhi and India's freedom struggle. Housed in a historic building, the museum showcases artifacts, photographs, and letters, including the blood-stained cloth Gandhi wore during his assassination. It offers an insightful journey through history, inspiring visitors with stories of courage, resilience, and non-violence.",
      location:
        "https://maps.app.goo.gl/ZcynSkmba5S3AAuD9",
    },
    {
      name: "Villacherry Pottery Village",
      src: VillacherryPotteryVillage,
      content:
        "Villacherry Pottery Village, located near Madurai, is a delightful destination for art and craft enthusiasts. This vibrant village is renowned for its traditional pottery-making techniques passed down through generations. Visitors can witness artisans at work, learn the craft, and even try their hand at creating pottery, offering a unique cultural and hands-on experience.",
      location:
        "https://maps.app.goo.gl/2jnx2RN1Tri4qWmJA",
    },
    {
      name: "St Marys Cathedral Church",
      src: StMarysCathedralChurch,
      content:
        "St. Mary's Cathedral Church in Madurai is a beautiful Neo-Gothic church built in 1841. Known for its stunning stained-glass windows and serene atmosphere, the church is a significant religious landmark for Christians in the region. Its peaceful environment and architectural charm make it a must-visit for spiritual seekers and history enthusiasts alike.",
      location:
        "https://maps.app.goo.gl/fTWSNWWHvZgw55an9",
    },
    {
      name: "Keelakuyilkudi Samanar Hills",
      src: KeelakuyilkudiSamanarHills,
      content:
        "Keelakuyilkudi Samanar Hills near Madurai is an ancient Jain site with centuries-old rock-cut caves and inscriptions. This serene location offers a glimpse into Tamil Nadu's Jain heritage and provides breathtaking views of the surrounding landscapes. It is a peaceful retreat for history buffs, trekkers, and anyone seeking tranquility amidst nature.",
      location:
        "https://maps.app.goo.gl/NYLSbpZzsnAxis4s5",
    },
    {
      name: "Vandiyur Mariamman Teppakulam",
      src: VandiyurMariammanTeppakulam,
      content:
        "Vandiyur Mariamman Teppakulam, a large temple tank in Madurai, is dedicated to Goddess Mariamman. Known for its floating temple and scenic beauty, it hosts the grand Float Festival during Thai month (January-February). This cultural event features elaborately decorated deities on a raft, illuminating the water with vibrant colors and lights, attracting visitors from afar.",
      location:
        "https://maps.app.goo.gl/mSgzXPmbrQHwussm8",
    },
  ];

  const underratedPlaces = [
    {
      name: "Kutladampatti Falls",
      src: KutladampattiFalls,
      content:
        "Nestled amidst lush greenery, Kutladampatti Falls is a serene retreat near Madurai. The cascading waters create a refreshing ambiance, perfect for nature enthusiasts. Visitors can trek through scenic trails to reach the falls and enjoy the tranquil surroundings, making it a must-visit for those seeking peace and natural beauty.",
      location: "https://maps.app.goo.gl/s4RcbEWZyoc5Kpa9A",
    },
    {
      name: "Kuruvithurai Sithathipuram Falls",
      src: Kuruvithurai,
      content:
        "Kuruvithurai Sithathipuram Falls near Madurai, Tamil Nadu, is a hidden gem surrounded by lush greenery. Seasonal and vibrant during monsoons, it’s ideal for nature lovers. Close to the historic Vaidyanatha Swamy Temple, this serene spot blends spirituality and natural beauty, offering a peaceful retreat.",
      location: "https://maps.app.goo.gl/tHpvP3TsMuVoqSAm8",
    },
    {
      name: "Kuttupatti Falls",
      src: KuttupattiFalls,
      content:
        "Kuttupatti Falls, a hidden gem near Madurai, captivates visitors with its unspoiled beauty. Ideal for a day trip, the falls are surrounded by dense foliage and rocky terrains. It’s a perfect spot for trekking and photography, offering a serene environment for nature lovers seeking a less-crowded destination.",
      location: "https://maps.app.goo.gl/dvGRBdyCtT2NLAjP7",
    },
    {
      name: "Madakulam Kabalieshwari Hills",
      src: MadakulamKabalieshwariTemple,
      content:
        "The Madakulam Kabalieshwari Temple, dedicated to Goddess Durga, is a spiritual oasis near Madurai. Known for its intricate architecture and tranquil surroundings, the temple offers a serene ambiance for prayer and meditation. Visitors can enjoy the peaceful environment and the captivating views of the nearby Madakulam hills.",
      location: "https://maps.app.goo.gl/mLMP45y6qopmmMKz9",
    },
    {
      name: "Allanganallur Falls",
      src: AllanganallurFalls,
      content:
        "Allanganallur Falls is a picturesque waterfall that attracts visitors with its scenic beauty and soothing vibes. Located near the famous Allanganallur Jallikattu grounds, it’s an ideal spot for picnics and relaxation. Surrounded by nature, the falls provide a peaceful escape from the city’s hustle and bustle.",
      location: "https://maps.app.goo.gl/1Zg4BXQCpQ2HWg2X8",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      <Helmet>
        <title>Madurai - The Temple City | Vazhipokkan&apos;s Travel Guide</title>
        <meta
          name="description"
          content="Explore Madurai, the cultural and historical gem of Tamil Nadu. Discover the iconic Meenakshi Temple, local traditions, and unique experiences in this ancient city."
        />
        <meta
          name="keywords"
          content="Madurai, Meenakshi Temple, Tamil Nadu Tourism, South India Travel, Madurai Travel Guide, Culture, Heritage, History"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="Madurai - The Temple City | Vazhipokkan Travel Guide"
        />
        <meta
          property="og:description"
          content="Explore Madurai, the cultural and historical gem of Tamil Nadu. Discover the iconic Meenakshi Temple, local traditions, and unique experiences in this ancient city."
        />
        <meta
          property="og:image"
          content="https://vazhipokkan.netlify.app/destinations/Madurai.webp"
        />
        <meta
          property="og:url"
          content="https://vazhipokkan.netlify.app/madurai"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Madurai - The Temple City | Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Explore Madurai, the cultural and historical gem of Tamil Nadu. Discover the iconic Meenakshi Temple, local traditions, and unique experiences in this ancient city."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/destinations/Madurai.webp"
        />
        <meta
          property="twitter:url"
          content="https://vazhipokkan.netlify.app/madurai"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/madurai" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <img
          className="w-full h-[40vh] md:h-[60vh] lg:h-[100vh] object-cover"
          src={MaduraiImage}
          alt="Madurai"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 leading-loose">
          <h1 className="text-white text-center font-bold text-3xl md:text-5xl lg:text-6xl mt-28 md:mt-44 lg:mt-52">
            Welcome to{" "}
            <span className="text-orange-500 font-extrabold">Madurai</span>
          </h1>
          <p className="text-white text-xl md:text-3xl lg:text-4xl font-light mt-2 md:mt-4">
            The{" "}
            <span className="text-orange-500 font-normal">
              Cultural Capital
            </span>{" "}
            of Tamil Nadu
          </p>
        </div>
      </section>

      {/* About Madurai */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            About Madurai
          </h2>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify">
            Madurai is a city that pulsates with life, tradition, and the
            essence of Tamil culture. Known locally as the &quot;
            <span className="text-orange-500">City That Never Sleeps</span>,&quot; it
            offers a vibrant blend of{" "}
            <span className="text-orange-500">history</span> and{" "}
            <span className="text-orange-500">modernity</span>, making it a
            must-visit destination in Tamil Nadu. As you step into Madurai,
            prepare to be greeted by an explosion of{" "}
            <span className="text-orange-500">colors</span> and the enchanting
            sounds of <span className="text-orange-500">temple bells</span> that
            echo through its lively streets. The city is a harmonious
            amalgamation of the old and the new. Ancient temples and
            architectural marvels dominate the skyline, standing in peaceful
            coexistence with modern developments.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Despite its deep-rooted{" "}
            <span className="text-orange-500">history</span>, Madurai has
            embraced urban progress while remaining a beacon of Tamil{" "}
            <span className="text-orange-500">heritage</span>. With a history
            dating back to the{" "}
            <span className="text-orange-500">3rd century BCE</span>, Madurai
            has been chronicled in the accounts of{" "}
            <span className="text-orange-500">Arab</span>,{" "}
            <span className="text-orange-500">Roman</span>, and{" "}
            <span className="text-orange-500">Greek</span> travelers, including{" "}
            <span className="text-orange-500">Megasthenes</span>. Once ruled by
            the <span className="text-orange-500">Pandya</span> dynasty, the
            city has evolved into a cultural hub that celebrates Tamil
            traditions through <span className="text-orange-500">Sangams</span>{" "}
            (literary assemblies). Today, it draws thousands of visitors
            throughout the year, all seeking to immerse themselves in its
            timeless charm.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Madurai offers a myriad of experiences for travelers. The iconic{" "}
            <span className="text-orange-500">Meenakshi Amman Temple</span>,
            dedicated to{" "}
            <span className="text-orange-500">Goddess Meenakshi</span>{" "}
            (legendary queen of the{" "}
            <span className="text-orange-500">Pandyan Empire</span>), is an
            architectural masterpiece in the{" "}
            <span className="text-orange-500">Dravidian style</span> and a
            spiritual sanctuary that leaves visitors in awe. Other notable
            attractions include the{" "}
            <span className="text-orange-500">Koodal Azhagar Temple</span>,{" "}
            <span className="text-orange-500">Alagar Koil</span>,{" "}
            <span className="text-orange-500">Tirumalai Nayak Palace</span>,{" "}
            <span className="text-orange-500">Vaigai Dam</span>,{" "}
            <span className="text-orange-500">Gandhi Museum</span>, and{" "}
            <span className="text-orange-500">St. Mary&apos;s Cathedral Church</span>
            . Beyond these landmarks, the city&apos;s{" "}
            <span className="text-orange-500">pottery village</span> and
            bustling streets invite you to discover its soulful essence at every
            turn. Whether you&apos;re seeking{" "}
            <span className="text-orange-500">divine blessings</span>, exploring{" "}
            <span className="text-orange-500">historical treasures</span>, or
            simply losing yourself in the charm of its streets, Madurai is a
            city that promises a memorable journey.
          </p>
        </div>
      </section>

      <section className="flex flex-col bg-white md:px-12 px-4 pb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          How to Reach Madurai
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
                Madurai Airport, located at Avaniyapuram, approximately 12–13 km from the city center, offers excellent connectivity.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                  Domestic flights connect daily to Delhi, Mumbai, Chennai, Kolkata, and other major cities.
                  </li>
                  <li>
                  International flights operate to Colombo, Dubai, and Singapore.
                  </li>
                  <li>
                  Airlines servicing Madurai include Air India, Indigo, SpiceJet, and SriLankan Airlines.
                  </li>
                  <li>
                  Taxis and cabs are readily available outside the airport for a hassle-free transfer to the city.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BY Train */}

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
                Madurai Junction is a major railway hub, situated just 3 km from the city center, ensuring seamless rail connectivity.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>
                  Direct train services connect Madurai with major cities like Delhi, Mumbai, Kolkata, and Chennai.
                  </li>
                  <li>
                  It also offers excellent frequency of regional trains to nearby towns and pilgrimage centers.
                  </li>
                  <li>
                  The station features modern amenities like waiting lounges, food stalls, and assistance.
                  </li>
                  <li>
                  Taxis and cabs are available at the station for convenient onward travel to your destination.
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
                Madurai is well-connected by an extensive network of national and state highways, making it highly accessible.
                </p>
                <ul className="list-disc list-inside text-left text-pretty text-sm md:text-base text-gray-700 mt-1">
                  <li>National Highways: NH-7, NH-45B, NH-208, and NH-49.</li>
                  <li>
                  State Highways: SH-33, SH-72, SH-72A, SH-73, and SH-73A.
                  </li>
                  <li>
                  Bus services include frequent Tamil Nadu State Transport Corporation buses and private intercity and interstate options.
                  </li>
                  <li>
                  The scenic routes to Madurai offer an enjoyable experience for road trips and drives.
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
          Must-Visit Attractions in<br className="block md:hidden" /> and Around Madurai
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
          Discover the Less-Traveled<br className="block md:hidden" /> Paths of Madurai
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

export default MaduraiPage;
