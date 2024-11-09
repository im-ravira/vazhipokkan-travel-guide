import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';

const MapPage = () => {
  return (
    <main className="min-h-screen w-full">
      <Helmet>
        <title>Map - Vazhipokkan Travel Guide</title>
        <meta
          name="description"
          content="Explore key locations and top attractions in Tamil Nadu with our interactive map. Discover popular tourist spots and plan your visit with ease."
        />
        <meta
          name="keywords"
          content="Tamil Nadu Tourism, South India, Tamil Nadu Travel Guide,Tamil Nadu Gallery, Tamil Nadu Wonders, Tourist Attractions, History, Culture, Hills, Beaches, waterfalls, forts, Temples, Wildlife"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* Meta OG tags */}
        <meta property="og:title" content="Map - Vazhipokkan Travel Guide" />
        <meta
          property="og:description"
          content="Explore key locations and top attractions in Tamil Nadu with our interactive map. Discover popular tourist spots and plan your visit with ease."
        />
        <meta property="og:image" content="https://vazhipokkan.netlify.app/map/map.jpg" />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/map" />
        <meta property="og:type" content="website"/>

        {/* Meta Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Map - Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Explore key locations and top attractions in Tamil Nadu with our interactive map. Discover popular tourist spots and plan your visit with ease."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/map/map.jpg"
        />
        <meta property="twitter:url" content="https://vazhipokkan.netlify.app/map" />

        {/* Meta Robots tag */}
        <meta name="robots" content="index, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/map" />  
      </Helmet>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-between">
        <article className="pt-24 pb-4">
          <h1 className="text-[1.2rem] md:text-[1.5rem] lg:text-[3rem] font-extrabold text-center text-gray-800 mb-4">
            Explore Tamil Nadu - Map
          </h1>
          <p className="md:text-base text-sm lg:text-xl text-gray-700 text-center md:pb-8 pb-6 px-8">
            Discover key locations and attractions in Tamil Nadu with our
            interactive map.
          </p>
        </article>

        <article className="md:px-8 px-4 mb-8 mt-4">
          <p className="text-orange-400 md:text-sm text-xs md:block hidden mb-2">
            Note: use Ctrl + Scroll to Zoom in or Zoom out for the map.
          </p>
          <iframe
            title="Tamilnadu Map"
            className="w-full h-[30rem] border border-gray-400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377640.386569627!2d77.5942211672758!3d10.534317766354398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1656157826620!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="text-orange-400 md:text-sm text-xs md:hidden block mt-2">
            Note: use Ctrl + Scroll for Zoom in or Zoom out.
          </p>
        </article>
        <Footer />
      </section>
    </main>
  );
};

export default MapPage;
