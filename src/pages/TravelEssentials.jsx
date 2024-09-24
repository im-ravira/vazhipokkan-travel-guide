import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TravelEssentials = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />

      <div className="min-h-screen">
        <div className="flex flex-col h-64 items-center justify-center">
          <h1 className="md:text-2xl text-xl w-full font-extrabold text-center text-gray-800 md:pt-8 pt-6 pb-4 bg-slate-100">
            Your Trip Guide
          </h1>
          <p className="md:text-base text-sm w-full text-gray-700 mx-12 text-center md:pb-8 pb-6 px-8 bg-slate-100">
            Prepare your trip to Tamil Nadu with all the essential information
            on travel options, tips, and guide.
          </p>
        </div>

        {/* Travel Essentials Section */}
        <div className="md:px-16 px-8">
          <h1 className="md:text-2xl text-xl font-extrabold text-center text-grar-800 mb-4">
            Travel Essentials
          </h1>

          {/* How to Reach Tamil Nadu Section */}
          <div className="mb-8">
            <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-4">
              How to Reach Tamil Nadu
            </h2>

            {/* Airports */}
            <div className="mb-4">
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">Airports:</h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Tamil Nadu boasts a well-connected air network, with seven
                civilian airports serving major cities.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 mb-4">
                <li>
                  <strong>Chennai International Airport:</strong> The largest
                  and busiest airport in Tamil Nadu, an aviation hub in South
                  Asia with flights to major international cities.
                </li>
                <li>
                  <strong>Coimbatore International Airport:</strong>{" "}
                  Well-connected to cities like Chennai, Bengaluru, and nearby
                  tourist spots like Munnar and Ooty. Serves areas such as
                  Tiruppur and Pollachi.
                </li>
                <li>
                  <strong>
                    Tiruchirapalli (Trichy) International Airport:
                  </strong>{" "}
                  Tamil Nadu’s smallest international airport, providing access
                  to districts like Namakkal, Thanjavur, and Pudukkottai.
                </li>
                <li>
                  <strong>Madurai International Airport:</strong> Located near
                  State Highway 37, well connected to Madurai railway station
                  and serves nearby regions.
                </li>
                <li>
                  Additionally, domestic airports in Salem, Tuticorin, and
                  Puducherry complement the state's air travel infrastructure.
                </li>
              </ul>
            </div>

            {/* Railways */}
            <div className="mb-4">
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">Railways:</h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Tamil Nadu is part of the Southern Railway network, connecting
                it to Kerala, Karnataka, Andhra Pradesh, and Puducherry. Chennai
                is a major hub with direct express trains to many cities.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
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
              <p className="md:text-base text-sm text-gray-700 mt-2">
                Special highlights: <strong>Nilgiri Mountain Railway</strong>, a
                UNESCO World Heritage Site, and the{" "}
                <strong>Pamban Bridge</strong>, an engineering marvel connecting
                Rameswaram to mainland India.
              </p>
            </div>

            {/* Public Transport */}
            <div className="mb-4"> 
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                Public Transport:
              </h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Tamil Nadu has a robust public transportation system with the
                Tamil Nadu State Transport Corporation (TNSTC) serving intra and
                interstate routes.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>
                  <strong>TNSTC:</strong> Operates city routes and inter-city
                  buses.
                </li>
                <li>
                  <strong>SETC:</strong> Offers semi-deluxe, ultra-deluxe, and
                  air-conditioned buses for long-distance travel.
                </li>
                <li>
                  Private operators also supplement public bus services in
                  certain areas.
                </li>
              </ul>
            </div>

            {/* Taxi Services */}
            <div className="mb-4">
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">Taxi Services:</h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Tamil Nadu’s extensive road network connects urban and rural
                areas. Taxis are widely available across the state, and the
                Golden Quadrilateral project links it to major cities like New
                Delhi, Mumbai, and Kolkata.
              </p>
            </div>
            <hr />
          </div>

          {/* Best Time to Visit Tamil Nadu Section */}
          <div className="mb-8">
            <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-4">
              Best Time to Visit
            </h2>

            {/* Winter */}
            <div className="mb-4">
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                Winter (November to March):
              </h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Winter is considered the best time to visit Tamil Nadu, with
                pleasant weather and temperatures ranging from 21°C to 30°C.
                This season is ideal for exploring attractions across the state.
                Key festivals like Pongal, Tamil New Year, and the Carnatic
                Music Festival also take place during this time, attracting
                large numbers of tourists. Advance booking for accommodation and
                travel is recommended.
              </p>
            </div>

            {/* Summer */}
            <div className="mb-4">
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                Summer (Mid-March to Late June):
              </h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Summer in Tamil Nadu can be hot and humid, with temperatures
                soaring up to 45°C. However, coastal areas experience cooler
                evenings due to sea breezes. Hill stations like Ooty and
                Kodaikanal offer relief from the heat, making them great summer
                destinations. When visiting other parts of the state, pack light
                clothes and essential summer gear like sunglasses, sunscreen,
                and plenty of water.
              </p>
            </div>

            {/* Monsoon */}
            <div className="mb-4">
              <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                Monsoon (Late June to October):
              </h3>
              <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                Monsoons bring moderate rainfall and cooler temperatures,
                ranging from 24°C to 30°C. Hill stations come alive during this
                season, offering lush greenery and scenic beauty. The Velankanni
                Festival, celebrated in August and September, attracts many
                visitors. While monsoon is a pleasant time to explore, it’s
                advisable to check weather conditions and carry rain gear like
                umbrellas or raincoats.
              </p>
            </div>
          </div>
          <hr />
        </div>

        {/* Travel Tips Section */}
        <div className="md:px-16 px-8">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-extrabold text-gray-800 my-6">
              Travel Tips
            </h2>
            <ul className=" text-pretty list-disc list-inside text-gray-700 leading-8">
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
                Pack comfortable clothes, and be cautious about accepting food
                or drinks from strangers.
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
                quality. Ensure credit/debit card transactions are handled in
                your presence and always get an invoice.
              </li>
              <li>
                Check visiting hours and closed days for museums, monuments, and
                other attractions. Smoking and drinking alcohol are prohibited
                in public places.
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TravelEssentials;
