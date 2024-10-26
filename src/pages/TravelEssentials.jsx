import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Traveler from "../assets/hiking.webp";
import { Helmet } from 'react-helmet-async';

const TravelEssentials = () => {
  return (
    <main className="min-h-screen w-full">
      <Helmet>
        <title>Your Trip Guide  - Vazhipokkan Travel Guide</title>
        <meta
          name="description"
          content="Discover essential travel information, tips, and how to reach Tamil Nadu for an unforgettable trip."
        />
        <meta
          name="keywords"
          content="Tamil Nadu Tourism, South India, Tamil Nadu Travel Guide,Tamil Nadu Gallery, Tamil Nadu Wonders, Tourist Attractions, History, Culture, Hills, Beaches, waterfalls, forts, Temples, Wildlife, travel, travel tips, tourism"
        />
        <meta name="author" content="Vazhipokkan" />

        {/* Meta OG tags */}
        <meta property="og:title" content="Your Trip Guide - Vazhipokkan Travel Guide" />
        <meta
          property="og:description"
          content="Discover essential travel information, tips, and how to reach Tamil Nadu for an unforgettable trip."
        />
        <meta property="og:image" content="https://vazhipokkan.netlify.app/travel-essentials/hiking.jpg" />
        <meta property="og:url" content="https://vazhipokkan.netlify.app/travel-essentials" />
        <meta property="og:type" content="website"/>

        {/* Meta Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Your Trip Guide - Vazhipokkan Travel Guide"
        />
        <meta
          name="twitter:description"
          content="Discover essential travel information, tips, and how to reach Tamil Nadu for an unforgettable trip."
        />
        <meta
          name="twitter:image"
          content="https://vazhipokkan.netlify.app/travel-essentials/hiking.jpg"
        />
        <meta property="twitter:url" content="https://vazhipokkan.netlify.app/travel-essentials" />

        {/* Meta Robots tag */}
        <meta name="robots" content="index, follow" />

        {/* Cononical url */}
        <link rel="canonical" href="https://vazhipokkan.netlify.app/travel-essentials" />  
      </Helmet>
      <Navbar />
      <article className="flex flex-col items-center justify-center">
        <img
          className="w-full h-[40vh] md:h-[60vh] lg:h-screen object-cover relative"
          src={Traveler}
          alt=""
        />
        <div className="absolute flex flex-col items-center justify-center text-white">
          <h1 className="text-[2.3rem] md:text-[3.5rem] lg:text-7xl mb-2 md:mb-4 lg:mb-6 text-center w-full font-extrabold">
            Your Trip Guide
          </h1>
          <p className="md:text-xl text-base lg:text-2xl px-2 max-w-xl text-center">
            Prepare your trip to Tamil Nadu with all the Crucial information on
            travel options, tips, and guide.
          </p>
        </div>
      </article>

      {/* Travel Essentials Section */}
      <section className="md:px-16 px-8">
        <h1 className="text-[1.4rem] md:text-[1.9rem] lg:text-[2.3rem] font-extrabold  text-center text-grar-800 mt-12 mb-8">
          Travel Essentials
        </h1>

        {/* How to Reach Tamil Nadu Section */}
        <section className="mb-8">
          <h2 className="lg:text-[1.8rem] md:text-2xl text-xl font-bold text-gray-800 mb-8">
            How to Reach Tamil Nadu
          </h2>

          {/* Airports */}
          <article className="mb-8">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Airports:
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Tamil Nadu boasts a well-connected air network, with seven
              civilian airports serving major cities.
            </p>
            <ul className="lg:text-base md:text-base text-sm list-disc pl-5 mt-2 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Chennai International Airport:</strong> The largest and
                busiest airport in Tamil Nadu, an aviation hub in South Asia
                with flights to major international cities.
              </li>
              <li>
                <strong>Coimbatore International Airport:</strong>{" "}
                Well-connected to cities like Chennai, Bengaluru, and nearby
                tourist spots like Munnar and Ooty. Serves areas such as
                Tiruppur and Pollachi.
              </li>
              <li>
                <strong>Tiruchirapalli (Trichy) International Airport:</strong>{" "}
                Tamil Nadu’s smallest international airport, providing access to
                districts like Namakkal, Thanjavur, and Pudukkottai.
              </li>
              <li>
                <strong>Madurai International Airport:</strong> Located near
                State Highway 37, well connected to Madurai railway station and
                serves nearby regions.
              </li>
              <li>
                Additionally, domestic airports in Salem, Tuticorin, and
                Puducherry complement the state's air travel infrastructure.
              </li>
            </ul>
          </article>

          {/* Railways */}
          <article className="mb-8">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Railways:
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Tamil Nadu is part of the Southern Railway network, connecting it
              to Kerala, Karnataka, Andhra Pradesh, and Puducherry. Chennai is a
              major hub with direct express trains to many cities.
            </p>
            <ul className="lg:text-base md:text-base text-sm list-disc pl-5 mt-2 space-y-2 text-gray-700">
              <li>
                <strong>
                  Puratchi Thalaivar Dr. M.G. Ramachandran Central Railway
                  Station:
                </strong>{" "}
                Serves the northern routes.
              </li>
              <li>
                <strong>Chennai Egmore:</strong> Caters to southern
                destinations.
              </li>
              <li>
                Major railway junctions include Coimbatore, Madurai, Salem,
                Erode, Nagercoil, and Tiruchirapalli.
              </li>
            </ul>
            <p className="lg:text-base md:text-base text-sm text-gray-700 mt-2">
              Special highlights: <strong>Nilgiri Mountain Railway</strong>, a
              UNESCO World Heritage Site, and the <strong>Pamban Bridge</strong>
              , an engineering marvel connecting Rameswaram to mainland India.
            </p>
          </article>

          {/* Public Transport */}
          <article className="mb-4">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Public Transport:
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Tamil Nadu has a robust public transportation system with the
              Tamil Nadu State Transport Corporation (TNSTC) serving intra and
              interstate routes.
            </p>
            <ul className="lg:text-base md:text-base text-sm list-disc pl-5 mt-2 space-y-2 text-gray-700">
              <li>
                <strong>TNSTC:</strong> Operates city routes and inter-city
                buses.
              </li>
              <li>
                <strong>SETC:</strong> Offers semi-deluxe, ultra-deluxe, and
                air-conditioned buses for long-distance travel.
              </li>
              <li>
                Private operators also supplement public bus services in certain
                areas.
              </li>
            </ul>
          </article>

          {/* Taxi Services */}
          <article className="mb-8">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Taxi Services:
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Tamil Nadu’s extensive road network connects urban and rural
              areas. Taxis are widely available across the state, and the Golden
              Quadrilateral project links it to major cities like New Delhi,
              Mumbai, and Kolkata.
            </p>
          </article>
          <hr className="border-gray-400" />
        </section>

        {/* Best Time to Visit Tamil Nadu Section */}
        <section className="mb-8">
          <h2 className="lg:text-[1.8rem] md:text-2xl text-xl font-bold text-gray-800 mb-8">
            Best Time to Visit
          </h2>

          {/* Winter */}
          <article className="mb-8">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Winter (November to March):
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Winter is considered the best time to visit Tamil Nadu, with
              pleasant weather and temperatures ranging from 21°C to 30°C. This
              season is ideal for exploring attractions across the state. Key
              festivals like Pongal, Tamil New Year, and the Carnatic Music
              Festival also take place during this time, attracting large
              numbers of tourists. Advance booking for accommodation and travel
              is recommended.
            </p>
          </article>

          {/* Summer */}
          <article className="mb-8">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Summer (Mid-March to Late June):
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Summer in Tamil Nadu can be hot and humid, with temperatures
              soaring up to 45°C. However, coastal areas experience cooler
              evenings due to sea breezes. Hill stations like Ooty and
              Kodaikanal offer relief from the heat, making them great summer
              destinations. When visiting other parts of the state, pack light
              clothes and essential summer gear like sunglasses, sunscreen, and
              plenty of water.
            </p>
          </article>

          {/* Monsoon */}
          <article className="mb-8">
            <h3 className="lg:text-[1.rem] md:text-xl text-lg font-bold text-gray-700 mb-4">
              Monsoon (Late June to October):
            </h3>
            <p className="lg:text-base md:text-base text-sm text-gray-700 leading-7">
              Monsoons bring moderate rainfall and cooler temperatures, ranging
              from 24°C to 30°C. Hill stations come alive during this season,
              offering lush greenery and scenic beauty. The Velankanni Festival,
              celebrated in August and September, attracts many visitors. While
              monsoon is a pleasant time to explore, it’s advisable to check
              weather conditions and carry rain gear like umbrellas or
              raincoats.
            </p>
          </article>
        </section>
        <hr className="border-gray-400" />
      </section>

      {/* Travel Tips Section */}
      <section className="md:px-16 px-8">
        <div className="mb-8">
          <h2 className="text-[1.4rem] md:text-[1.9rem] lg:text-[2.3rem] text-center font-extrabold text-gray-800 mt-12 mb-8">
            Travel Tips
          </h2>
          <ul className="lg:text-base md:text-base text-sm text-pretty list-disc list-inside text-gray-700 space-y-2">
            <li>
              Familiarize yourself with local customs, traditions, and dress
              codes, especially in smaller towns and pilgrimage sites. Some
              religious places may require you to cover your head or go
              barefoot.
            </li>
            <li>
              Always check weather conditions before visiting coastal areas or
              hill stations.
            </li>
            <li>
              Dress modestly, especially at religious and traditional sites.
              Research local customs to avoid unintentional disrespect.
            </li>
            <li>
              Carry your Covid-19 documents (RTPCR report and vaccination
              certificate) and follow all Covid-19 protocols, including
              maintaining social distancing and carrying PPE kits, masks, and
              sanitizer. Be aware of containment zones.
            </li>
            <li>
              E-registration is mandatory for intra and interstate travel in
              Tamil Nadu.
            </li>
            <li>
              Pack comfortable clothes, and be cautious about accepting food or
              drinks from strangers.
            </li>
            <li>
              Secure accommodations in advance to avoid last-minute hassle,
              especially during peak seasons or festivals.
            </li>
            <li>
              Stick to bottled or boiled water and dispose of bottles
              responsibly. Avoid food and drinks offered by strangers.
            </li>
            <li>
              Government handicraft shops offer fixed prices and certified
              quality. Ensure credit/debit card transactions are handled in your
              presence and always get an invoice.
            </li>
            <li>
              Check visiting hours and closed days for museums, monuments, and
              other attractions. Smoking and drinking alcohol are prohibited in
              public places.
            </li>
            <li>
              Hire only government-trained and authorized guides with proper
              photo ID for sightseeing tours.
            </li>
            <li>
              For safety, avoid accepting lifts from strangers or visiting
              isolated places alone, especially at night. In hotels, verify
              visitors before opening your door and use safety latches.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TravelEssentials;
