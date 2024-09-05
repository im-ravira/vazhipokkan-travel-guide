import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CoverImage from "../assets/gallery/valluvar.webp";

const About = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Navbar />
      <div>
        <img className="w-full md:h-screen h-80" src={CoverImage} alt="" />
      </div>
      <div className="bg-white md:px-16 px-8 py-12 text-gray-800">
        <h2 className="md:text-2xl text-xl text-center font-bold mb-6">
          About Tamil Nadu Tourism
        </h2>
        <div className="mb-12">
          <h3 className="md:text-2xl text-xl font-semibold mb-4">
            Welcome to Tamil Nadu!
          </h3>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            A land where the echoes of ancient dynasties like the Cholas,
            Pandyas, and Pallavas still resonate, and where breathtaking
            landscapes, revered temples, and vibrant wildlife create an
            unforgettable connection with this diverse region of India. Tamil
            Nadu is often regarded as the cultural heart of India, known for its
            rich heritage and deep-rooted traditions.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Explore the spiritual aura of its countless temples, relax on serene
            beaches and in peaceful hill stations, and experience the vitality
            of its diverse wildlife sanctuaries and national parks. The state's
            vibrant festivals, traditional art forms, and bustling markets add
            to its unique charm. Whether you're seeking spiritual fulfillment,
            natural beauty, or cultural richness, Tamil Nadu offers an
            unparalleled journey through South India.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base">
            With a wide array of experiences, from ancient heritage sites to
            tranquil beaches and scenic hill stations, Tamil Nadu stands out as
            one of India's top tourist destinations, promising something special
            at every turn.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="md:text-2xl text-xl font-semibold mb-4">
            Tamil Nadu - Pilgrimage Paradise
          </h3>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Tamil Nadu is renowned for its numerous tourist attractions, with
            pilgrimage sites standing out as some of the most significant. The
            state is home to many ancient temples, showcasing exquisite
            Dravidian architecture that has captivated visitors from around the
            world for centuries. Some of these temples are recognized as UNESCO
            World Heritage Sites, making Tamil Nadu a prime destination for
            those seeking spiritual enlightenment.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            The state is rich with sacred temples such as the Sri
            Ranganathaswamy Temple, Ekambareswarar Temple, Jambukeswarar Temple,
            Kailasanathar Temple, Thillai Nataraja Temple, Annamalaiyar Temple,
            and many more, each with a history that spans between 800 to 2,000
            years. These architectural marvels are legacies of the Chola, Chera,
            Pandya, Pallava, Nayaka, and Vijayanagara dynasties.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            The tradition of temple building in Tamil Nadu began with the
            Pallavas in the 7th century AD. They introduced beautifully carved
            stone temples that continue to enhance the cultural landscape of the
            state. The Kailasanathar Temple and the Shore Temple are iconic
            examples of Pallava craftsmanship.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            The Cholas, who ruled from the 9th century AD, further enriched
            temple architecture by adding grand towers and expansive halls. The
            Great Living Chola Temples, now a UNESCO World Heritage Site, are
            must-visit landmarks that highlight Tamil Nadu’s rich architectural
            heritage. Later, the Vijayanagar and Nayaka rulers introduced
            intricate arches, pillars, and winding paths around these sacred
            sites.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base">
            Among the most revered pilgrimage destinations in Tamil Nadu are the
            Meenakshi Amman Temple, Adi Kumbeswarar Temple, Brihadeeswarar
            Temple, Ramanathaswamy Temple, the group of Chola Temples, the
            temples of Mahabalipuram, and the Srivilliputhur Andal Temple. Each
            of these sites offers a unique glimpse into the spiritual and
            architectural legacy of the region.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="md:text-2xl text-xl  font-semibold mb-4">
            Natural Beauty of Tamil Nadu
          </h3>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Tamil Nadu is a haven for nature enthusiasts and those seeking
            tranquility. The state is home to some of the most picturesque hill
            stations, such as Ooty and Kodaikanal, offering a refreshing retreat
            during the hot summer months.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Popular hill stations like Yercaud, Yelagiri, Kodaikanal, Coonoor,
            Kotagiri, Velliangiri Hills, and Kolli Hills draw visitors
            throughout the year. Tamil Nadu also boasts stunning beaches that
            provide the perfect setting for a relaxing beach vacation. Whether
            it’s a peaceful stroll along the shore, capturing breathtaking
            sunsets, listening to the calming waves, enjoying water sports, or
            savoring fresh seafood, the beaches of Tamil Nadu offer simple yet
            profound pleasures.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Top family-friendly beaches in Tamil Nadu include Covelong, Marina,
            Mahabalipuram, Rameshwaram, Auro, Elliot, and Kanyakumari. These
            coastal spots are also popular among honeymooners looking for a
            romantic getaway.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Tamil Nadu is not just about hills and beaches; it also features
            pristine lakes and waterfalls. Pulicat Lake, the largest saltwater
            lake in India, is a must-visit, offering rich biodiversity and
            spectacular sunset views. The state’s waterfalls, set amidst serene
            natural surroundings, provide a perfect escape from the hustle and
            bustle of city life, rejuvenating the mind, body, and soul. Visiting
            these beautiful lakes and waterfalls in Tamil Nadu is an experience
            not to be missed.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="md:text-2xl text-xl  font-semibold mb-4">
            Culture and Heritage - Discover the Ancient Past of Tamil Nadu
          </h3>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            Tamil Nadu is a destination rich in culture and heritage, offering a
            multitude of experiences that allow visitors to delve deep into its
            fascinating history. The state is not just an inviting tourist spot,
            but a place where every corner promises memorable encounters. A
            cultural tour in Tamil Nadu is incomplete without savoring its
            diverse cuisine, which extends beyond the well-known idli, dosa, and
            sambar to include delicious seafood, rice dishes, and a variety of
            vegetarian delights.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            For history enthusiasts, Tamil Nadu is home to numerous museums that
            provide a glimpse into India’s ancient past and the state’s rich
            cultural heritage. With 25 museums, observatories, and art
            galleries, there’s plenty to explore. Notable museums include the
            Gandhi Museum, Dakshinachitra Museum, India Seashell Museum,
            Kanyakumari Wax Museum, Chennai Rail Museum, Fort Museum, and the
            Click Art Museum, all offering unique insights into the region’s
            history and culture.
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base mb-4">
            The vibrant festivals of Tamil Nadu, such as the Mamallapuram Dance
            Festival, Thaipusam, Meenakshi Kalyanam, and Pongal, offer an
            immersive cultural experience. These festivals, along with UNESCO
            World Heritage Sites like the Nilgiri Mountain Railway, the
            monuments of Mahabalipuram, and the Chola temples at Thanjavur,
            Darasuram, and Gangaikondacholapuram, are must-visit destinations
            that showcase the rich cultural heritage of Tamil Nadu.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="md:text-2xl text-xl  font-semibold text-gray-800 mb-6">
            Most Visited Attractions & Tourist Places in Tamil Nadu
          </h3>
          <ul className="space-y-4 text-gray-700 text-sm md:text-base list-inside">
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Chennai-</span>
               
                As the capital of Tamil Nadu, Chennai is a vibrant blend of
                modernity and tradition. It offers a variety of attractions,
                including heritage monuments, churches, museums, pristine
                beaches, theme parks, and cafes.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Ooty-</span>
               
                Nestled in the Nilgiris, Ooty is renowned for its stunning
                landscapes, lush green hills, and enchanted forests.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Madurai-</span>
               
                Known for its ancient temples, including the Meenakshi
                Sundareshwarar Temple.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Kodaikanal-</span>
               
                Celebrated for its breathtaking landscapes, including the rare
                Neelakurinji flowers.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Rameshwaram-</span>
               A spiritual haven known for the Shri Ramanathaswamy Temple.</p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Kanchipuram-</span>
               
                Famous for its stunning temples and Kanchipuram silk sarees.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Coimbatore-</span>
               
                Known as the ‘Manchester of South India’ and for its
                high-quality textiles and proximity to the Western Ghats.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Vellore-</span>
               
                Known for its rich cultural heritage influenced by various
                dynasties.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Kanyakumari-</span>
               
                Famous for its breathtaking sunrise and sunset views over the
                ocean.
              </p>
            </li>
            <li className="flex items-start">
              <p className="md:text-base text-sm text-justify"><span className="md:text-base text-sm font-bold">Mahabalipuram-</span>
               
                Known for its UNESCO World Heritage Sites and unique seashell
                jewelry.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="md:text-2xl text-xl font-semibold mb-4">
            Quick Facts About Tamil Nadu
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-800 text-left md:text-base text-sm">
                  <th className="py-2 px-4 border-b">Fact</th>
                  <th className="py-2 px-4 border-b">Details</th>
                </tr>
              </thead>
              <tbody className="md:text-base text-sm">
                <tr>
                  <td className="py-2 px-4 border-b">Region</td>
                  <td className="py-2 px-4 border-b">South India</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Capital</td>
                  <td className="py-2 px-4 border-b">Chennai</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Coordinates</td>
                  <td className="py-2 px-4 border-b">11.1271° N, 78.6569° E</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Population</td>
                  <td className="py-2 px-4 border-b">
                    72.14 million (as per the 2011 Census)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Geographical Area</td>
                  <td className="py-2 px-4 border-b">130,058 sq.km.</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Total Districts</td>
                  <td className="py-2 px-4 border-b">38</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Religions</td>
                  <td className="py-2 px-4 border-b">
                    Hinduism, Christianity, Islam, Jainism, Buddhism
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Major Tribes</td>
                  <td className="py-2 px-4 border-b">
                    Toda, Kota, Kurumbas, Irula, Paniyan, Kattunayakan
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Languages Spoken</td>
                  <td className="py-2 px-4 border-b">
                    Tamil, English, Hindi, Telugu, Kannada, Malayalam
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">State Animal</td>
                  <td className="py-2 px-4 border-b">Nilgiri Tahr</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">State Bird</td>
                  <td className="py-2 px-4 border-b">
                    Emerald Dove (Chalcophaps indica)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">State Tree</td>
                  <td className="py-2 px-4 border-b">
                    Palmyrah (Borassus flabellifer)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Major Cities</td>
                  <td className="py-2 px-4 border-b">
                    Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, Erode,
                    Vellore, Thoothukudi, Thanjavur, Kodaikanal, Rameswaram,
                    Mahabalipuram, Kanchipuram, Kanyakumari, Tuticorin,
                    Chidambaram, Theni
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Major Tourist Attractions
                  </td>
                  <td className="py-2 px-4 border-b">
                    Forts, Palaces, National Parks, Wildlife Sanctuaries, Tiger
                    Reserves, Temples, Lakes, Waterfalls, Museums
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">
                    Popular Gifts and Souvenirs
                  </td>
                  <td className="py-2 px-4 border-b">
                    Silk Sarees, Woodcraft, Musical Instruments, Jewelry,
                    Sculptures, Statues, Paintings, Textiles
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="md:text-base text-sm text-gray-600">
            This site is for educational purposes. To <br className="md:hidden block" />view more imformations of
            TamilNadu, <br className="md:hidden block" />visit{" "}
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
      </div>
      <Footer />
    </>
  );
};

export default About;
