import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/common/DescriptionCard";
import Chennai from "../assets/destinations/Chennai.webp";
import Madurai from "../assets/destinations/Madurai.webp";
import Ooty from "../assets/destinations/Ooty.webp";
import Kodaikanal from "../assets/destinations/Kodaikanal.webp";
import Kancheepuram from "../assets/destinations/Kancheepuram.webp";
import Kanyakumari from "../assets/destinations/Kanyakumari.webp";
import Mahabalipuram from "../assets/destinations/Mahabalipuram.webp";
import Thanjavur from "../assets/destinations/Thanjavur.webp";
import MahabalipuramTemple from "../assets/mamallapuram-shore-temple.webp";
import { Helmet } from 'react-helmet-async';

const Destinations = () => {
  const destinations = [
    {
      name: "Chennai",
      src: Chennai,
      content:
        "Chennai, capital of Tamil Nadu is a cultural hub of South India. It houses some of the most beautiful heritage monuments, pristine beaches, churches, theme parks and universities..",
      route: "*",
    },
    {
      name: "Madurai",
      src: Madurai,
      content:
        "It is the oldest city of Tamil Nadu which is very popular for its iconic temple of Meenakshi sundareshwarar. Devotees from all over the world come to seek divine blessings. ",
      route: "*",
    },
    {
      name: "Ooty",
      src: Ooty,
      content:
        "The hill town of Ooty is an exquisite hill station to visit in Tamil Nadu. It houses natural wonders like Doddabetta and highest peak of Nilgiri – Ootacamund. It is also known as Switzerland of India.",
      route: "*",
    },
    {
      name: "Kodaikanal",
      src: Kodaikanal,
      content:
        "Kodaikanal is a serene hill station known for its lush greenery, misty weather, and scenic spots like the Kodaikanal Lake and Coaker's Walk. It is often referred to as the 'Princess of Hill Stations'.",
      route: "*",
    },
    {
      name: "Kancheepuram",
      src: Kancheepuram,
      content:
        "Kancheepuram, also known as the 'City of Thousand Temples', is famous for its magnificent temples and traditional silk sarees. It holds a significant place in South Indian history and culture.",
      route: "*",
    },
    {
      name: "Kanyakumari",
      src: Kanyakumari,
      content:
        "Kanniakumari, the southernmost tip of India, is where the Indian Ocean, Bay of Bengal, and Arabian Sea meet. It's famous for sunrise, sunset views, and the Vivekananda Rock Memorial.",
      route: "*",
    },
    {
      name: "Mahabalipuram",
      src: Mahabalipuram,
      content:
        "Mahabalipuram is a coastal town famous for its UNESCO World Heritage-listed monuments, rock-cut temples, and sculptures, including the Shore Temple and the Descent of the Ganges.",
      route: "*",
    },
    {
      name: "Thanjavur",
      src: Thanjavur,
      content:
        "Thanjavur is renowned for the grand Brihadeeswarar Temple, a UNESCO World Heritage site. The city is also known for its Tanjore paintings and classical music heritage.",
      route: "*",
    },
  ];

  return (
    <main className="min-h-screen w-full">
      <Helmet>
        <title>Top Destinations in Tamil Nadu - Vazhipokkan Travel Guide</title>
        <meta
          name="description"
          content="Discover the top destinations in Tamil Nadu, including cities with ancient temples, stunning beaches, hill stations, and UNESCO World Heritage sites."
        />
        <meta
          name="keywords"
          content="Tamil Nadu Tourism, South India, Tamil Nadu Travel Guide,Tamil Nadu Gallery, Tamil Nadu Wonders, Tourist Attractions, History, Culture, Hills, Beaches, waterfalls, forts, Temples, Wildlife"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* Meta OG tags */}
        <meta property="og:title" content="Top Destinations in Tamil Nadu - Vazhipokkan Travel Guide" />
        <meta
          property="og:description"
          content="Discover the top destinations in Tamil Nadu, including cities with ancient temples, stunning beaches, hill stations, and UNESCO World Heritage sites."
        />
        <meta property="og:image" content="https://vazhipokkan.netlify.app/destinations/mamallapuram-temple.jpg" />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/destinations" />
        <meta property="og:type" content="website"/>

        {/* Meta Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Destinations in Tamil Nadu - Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Discover the top destinations in Tamil Nadu, including cities with ancient temples, stunning beaches, hill stations, and UNESCO World Heritage sites."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/destinations/mamallapuram-temple.jpg"
        />
        <meta property="twitter:url" content="https://vazhipokkan.netlify.app/destinations" />

        {/* Meta Robots tag */}
        <meta name="robots" content="index, noimageindex, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/destinations" />  
      </Helmet>
      <Navbar />
      <article className="flex flex-col items-center justify-center relative">
        <img
          className="w-full h-[40vh] md:h-[60vh] lg:h-screen object-cover"
          src={MahabalipuramTemple}
          alt=""
        />
        <div className="absolute flex flex-col bottom-6 md:bottom-10 lg:bottom-12 left-6 md:left-10 lg:left-12 items-center justify-center text-white">
          <h1 className="text-[1.2rem] md:text-[2rem] lg:text-4xl mb-2 md:mb-4 lg:mb-6 text-center w-full font-extrabold">
            Top Destinations
          </h1>
        </div>
      </article>
      <div className="text-center md:px-12 px-8 py-12">
        <h2 className="text-[1.2rem] md:text-[1.5rem] lg:text-[2.2rem] font-extrabold text-gray-800 mb-4">
          Explore Tamilnadu's Top Destinations
        </h2>
        <p className="text-sm md:text-base lg:text-lg lg:leading-7 text-gray-700 md:text-center text-justify md:px-24 px-0">
          Tamil Nadu's cities blend modernity with tradition, featuring stunning
          temples, bustling markets, and rich cultural heritage. Each city
          offers a unique experience, from spiritual landmarks to vibrant
          culinary scenes.
        </p>
      </div>
      <section className="lg:mx-12 md:mx-10 mx-8 my-8">
        <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              src={destination.src}
              content={destination.content}
              route={destination.route}
              additionalClasses="w-full"
            />
          ))}
        </article>
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

export default Destinations;
