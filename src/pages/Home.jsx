import ImageSlider from "../components/common/ImageSlider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import PongalFestival from "../assets/imageslider/pongal-festival.webp";
import ChithiraiFestivalMadurai from "../assets/imageslider/Chithirai-Festival-Madurai.webp";
import ThiruvalluvarStatue from "../assets/imageslider/thiruvalluvar.webp";
import Jallikattu from "../assets/imageslider/jallikattu.webp";
import Therukooth from "../assets/imageslider/therukooth.webp";
import TravelOptions from "../components/TravelOptions";
import TimeToVisit from "../components/TimeToVisit";
import PlacesToVisit from "../components/PlacesToVisit";
import TopAttractions from "../components/TopAttractions";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const homeImages = [
    {
      name: "Pongal Festival",
      src: PongalFestival,
    },
    {
      name: "Chithirai Festival Madurai",
      src: ChithiraiFestivalMadurai,
    },
    { name: "Jallikattu", src: Jallikattu },
    {
      name: "Thiruvalluvar Statue",
      src: ThiruvalluvarStatue,
    },
    { name: "Therukooth", src: Therukooth },
  ];

  return (
    <main className="min-h-screen w-full">
      <Helmet>
        <title>Home - Vazhipokkan Travel Guide</title>
        <meta
          name="description"
          content="Explore Tamil Nadu with Vazhipokkan - Discover its rich heritage, vibrant culture, temples, festivals, serene beaches, and scenic hill stations. Your guide to Tamil Nadu Tourism."
        />
        <meta
          name="keywords"
          content="Tamil Nadu Tourism, South India, Temples, Festivals, Tamil Nadu Travel Guide, Places to visit, Tamil culture, Tamil Nadu attractions"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* Meta OG tags */}
        <meta property="og:title" content="Home - Vazhipokkan Travel Guide" />
        <meta
          property="og:description"
          content="Explore Tamil Nadu with Vazhipokkan - Discover its rich heritage, vibrant culture, temples, festivals, serene beaches, and scenic hill stations. Your guide to Tamil Nadu Tourism."
        />
        <meta property="og:image" content="https://vazhipokkan.netlify.app/og-image.jpg" />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/" />
        <meta property="og:type" content="website"/>

        {/* Meta Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Home - Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Explore Tamil Nadu with Vazhipokkan - Discover its rich heritage, vibrant culture, temples, festivals, serene beaches, and scenic hill stations. Your guide to Tamil Nadu Tourism."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/og-image.jpg"
        />
        <meta property="twitter:url" content="https://vazhipokkan.netlify.app/" />

        {/* Meta Robots tag */}
        <meta name="robots" content="index, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/" />  
      </Helmet>

      <Navbar />
      <ImageSlider images={homeImages} autoPlay={true} Overlay={true} />
      <section className="text-center bg-slate-100 py-12">
        <h1 className="text-[1.6rem] md:text-[1.6rem] lg:text-[2rem] font-extrabold text-gray-800 mb-2 lg:mb-4">
          Welcome to <span className="text-orange-600">Vazhipokkan</span>
          <br className="md:hidden block" /> - Tamil Nadu Tourism
        </h1>
        <p className="md:text-[1.1rem] text-sm lg:text-[1.3rem] lg:leading-7 md:leading-6 leading-normal font-light text-gray-700 text-center md:px-38 px-8">
          Experience the invigorating charm of Tamil Nadu, the cultural capital
          of India. <br className="md:block hidden" /> Dive into its rich
          heritage and vibrant traditions with our Comprehensive guide.
        </p>
      </section>

      {/* About Tamil Nadu Tourism Section */}
      <section className="flex flex-col justify-start text-left bg-white md:px-16 px-8 py-12">
        <h2 className="text-[1.15rem] md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          About Tamil Nadu Tourism
        </h2>
        <article>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify">
            Welcome to Tamil Nadu! A land where the echoes of ancient dynasties
            like the Cholas, Pandyas, and Pallavas still resonate, and where
            breathtaking landscapes, revered temples, and vibrant wildlife
            create an unforgettable connection with this diverse region of
            India. Tamil Nadu is often regarded as the cultural heart of India,
            known for its rich heritage and deep-rooted traditions.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            Explore the spiritual aura of its countless temples, relax on serene
            beaches and in peaceful hill stations, and experience the vitality
            of its diverse wildlife sanctuaries and national parks. The state&apos;s
            vibrant festivals, traditional art forms, and bustling markets add
            to its unique charm. Whether you&apos;re seeking spiritual fulfillment,
            natural beauty, or cultural richness, Tamil Nadu offers an
            unparalleled journey through South India.
          </p>
          <p className="md:text-base text-sm text-gray-700 md:text-justify text-justify mt-4">
            With a wide array of experiences, from ancient heritage sites to
            tranquil beaches and scenic hill stations, Tamil Nadu stands out as
            one of India&apos;s top tourist destinations, promising something special
            at every turn.
          </p>
        </article>
        <div className="flex justify-start text-center mt-8">
          <Link to="/about">
            <button className="btn btn-secondary">
              View More
            </button>
          </Link>
        </div>
      </section>
      <PlacesToVisit />
      <TopAttractions />
      <TravelOptions />
      <TimeToVisit />
      {/* Disclaimer Section */}
      <section className="flex flex-col items-start bg-slate-100/65 md:px-14 px-8 py-12 text-center">
        <h3 className="md:text-3xl text-xl font-extrabold">
          #TamilnaduTourism
        </h3>
        <p className="text-gray-600  md:text-base text-sm md:text-left mt-4 text-pretty text-justify">
          Explore the world and discover the unique charm of Tamil Nadu with
          #Tamilnadu Tourism. This project is intended for educational purposes
          only. For more information about Tamilnadu, please visit:
          <a
            href="https://www.tamilnadutourism.tn.gov.in/"
            target="_blank"
            className="text-orange-600 hover:underline mx-2"
          >
            tamilnadutourism.tn.gov.in . <br className="md:hidden block" />
          </a>
          All images and content have been sourced from
          <a
            href="https://www.tamilnadutourism.tn.gov.in/"
            target="_blank"
            className="text-orange-600 hover:underline mx-2"
          >
            tamilnadutourism.tn.gov.in
          </a>
          in and carefully adapted for use on this site.
        </p>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
