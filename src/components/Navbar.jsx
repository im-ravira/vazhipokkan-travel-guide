import React, { useState, useEffect } from "react";
import { FaBars, FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDestinationsOpen, setDestinationsOpen] = useState(false);
  const [isTravelPlannerOpen, setTravelPlannerOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTopDestinationsOpen, setTopDestinationsOpen] = useState(false);
  const [isTopAttractionsOpen, setTopAttractionsOpen] = useState(false);

  const [navColor, setNavColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <header
      className={`${
        navColor ? "bg-white shadow-md" : "bg-transparent text-gray-950"
      } w-full hover:bg-white hover:shadow-md hover:text-gray-800 text-gray-800  fixed z-[9999]`}
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-16">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-center mt-0">
            <Link
              to="/"
              className="md:text-[1.8rem] text-[1.4rem] text-orange-600 font-bold font-Macondo"
            >
              <h1>Vazhipokkan</h1>{" "}
              <p className="md:text-[0.7rem] text-[0.5rem] leading-[0.5rem] text-gray-800 font-semibold">
                Discover Tamil Nadu's Wonders
              </p>
            </Link>
          </div>

          {/* Nav Links */}

          {/* Hamburger Menu (sm) */}
          <div className="md:hidden mt-3">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* Nav Links (md) */}
          <nav
            className={`hidden md:flex md:space-x-3 xl:space-x-6 md:text-sm text-xs font-semibold`}
          >
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <div className="flex flex-row items-center space-x-1 hover:text-orange-500">
                Destinations
                <FaSortDown size={16} />
              </div>
              {isDestinationsOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white shadow-lg border border-gray-400 z-10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-400"></div>

                  <div className="grid grid-cols-2 gap-4 py-2 px-4">
                    {/*Top Destinations */}
                    <div>
                      <Link
                        to="/destinations"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">
                          &#x22EE;
                        </span>{" "}
                        Top Destinations
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Chennai
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Madurai
                      </Link>
                      <Link
                        to="/pagenotfound"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Ooty
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Kodaikanal
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Kancheepuram
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Kanniakumari
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Mahabalipuram
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Thanjavur
                      </Link>
                    </div>

                    {/* Top Attractions */}
                    <div>
                      <Link
                        to="/attractions"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">
                          &#x22EE;
                        </span>{" "}
                        Top Attractions
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Hills
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Beaches
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Wildlife
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Waterfalls
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Museums
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Forts
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Pilgrim Centres
                      </Link>
                      <Link
                        to="*"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Lakes
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setTravelPlannerOpen(true)}
              onMouseLeave={() => setTravelPlannerOpen(false)}
            >
              <div className="flex flex-row items-center justify-center space-x-1 hover:text-orange-500">
                Your Trip Guide
                <FaSortDown size={16} />
              </div>
              {isTravelPlannerOpen && (
                <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg border border-gray-500 z-10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-500"></div>
                  <div className="pl-2 py-2">
                    <Link
                      to="/travel-essentials"
                      className="block px-4 py-2 font-normal hover:text-orange-600"
                    >
                      <span className="text-orange-500 font-semibold">
                        &#x22EE;
                      </span>{" "}
                      Travel Essentials
                    </Link>
                    <a
                      href="https://www.tamilnadutourism.tn.gov.in/img/Tourist-Guides-2022.pdf"
                      target="blank"
                      className="block px-4 py-2 font-normal hover:text-orange-600"
                    >
                      <span className="text-orange-500 font-semibold">-</span>{" "}
                      Travel Guide
                    </a>
                    <Link
                      to="/map"
                      className="block px-4 py-2 font-normal hover:text-orange-600"
                    >
                      <span className="text-orange-500 font-semibold">-</span>{" "}
                      Map
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/gallery" className="hover:text-orange-500">
              Gallery
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Nav Links (sm) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden text-xs">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setDestinationsOpen(!isDestinationsOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300 focus:outline-none"
              >
                Destinations
                <FaSortDown />
              </button>
              {isDestinationsOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300 flex justify-between items-center"
                    onClick={() =>
                      setTopDestinationsOpen(!isTopDestinationsOpen)
                    }
                  >
                    <Link to="/destinations"><span><span className=" text-orange-500 font-semibold">
                      &#x22EE;
                    </span>{" "}
                    Top Destinations</span></Link><FaSortDown />
                  </a>
                  {isTopDestinationsOpen && (
                    <div className="pl-4">
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Chennai
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Madurai
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Ooty
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Kodaikanal
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Kancheepuram
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Kanniakumari
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Mahabalipuram
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Thanjavur
                      </Link>
                    </div>
                  )}
                  
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300 flex justify-between items-center"
                    onClick={() =>
                      setTopAttractionsOpen(!isTopAttractionsOpen)
                    }
                  >
                    <span><span
                      className="text-orange-500 font-semibold"
                      
                    >
                      &#x22EE;
                    </span>{" "}
                    Top Attractions</span><FaSortDown />
                  </a>
                  {isTopAttractionsOpen && (
                    <div className="pl-4">
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Hills
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Beaches
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Wildlife
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Waterfalls
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Museums
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Forts
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Pilgrim Centres
                      </Link>
                      <Link
                        to="*"
                        className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                      >
                        <span className="text-orange-500 font-semibold">-</span>{" "}
                        Lakes
                      </Link>
                    </div>
                    )}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setTravelPlannerOpen(!isTravelPlannerOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300 focus:outline-none"
              >
                Your Trip Guide
                <FaSortDown />
              </button>
              {isTravelPlannerOpen && (
                <div className="pl-2">
                  <Link
                    to="/travel-essentials"
                    className="block px-4 py-2 font-normal hover:text-orange-600"
                  >
                    <span className="text-orange-500 font-semibold">
                      &#x22EE;
                    </span>{" "}
                    Travel Essentials
                  </Link>
                  <a
                    href="https://www.tamilnadutourism.tn.gov.in/img/Tourist-Guides-2022.pdf"
                    className="block px-4 py-2 font-normal hover:text-orange-600"
                  >
                    <span className="text-orange-500 font-semibold">-</span>{" "}
                    Travel Guide
                  </a>
                  <Link
                    to="/map"
                    className="block px-4 py-2 font-normal hover:text-orange-600"
                  >
                    <span className="text-orange-500 font-semibold">-</span>{" "}
                    Map
                  </Link>
                  {/* Add more TravelPlanner here */}
                </div>
              )}
            </div>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
