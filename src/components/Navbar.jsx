import React, { useState, useEffect } from "react";
import { FaBars, FaSortDown } from "react-icons/fa";

const Navbar = () => {
  const [isDestinationsOpen, setDestinationsOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className={`${navColor ? 'bg-white  shadow-md' : 'bg-transparent' } w-full hover:bg-white hover:shadow-md text-gray-800  fixed z-[9999]`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-center mt-0">
            <a href="#" className="md:text-[1.75rem] text-[1.4rem] text-orange-600 font-bold font-Macondo">
              <h1>Vazhi Pokkan</h1> <p className="md:text-[0.6rem] text-[0.5rem] leading-[0.5rem] text-gray-800 font-semibold">Discover Tamil Nadu's Wonders</p>
            </a>
          </div>

          {/* Nav Links 
          <div className="flex items-center">
            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden mt-3">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-orange-600 focus:outline-none"
              >
                <FaBars size={20} />
              </button>
            </div>

            {/* Desktop Links */}
            <div className={`hidden md:flex md:space-x-3 xl:space-x-6 md:text-sm text-xs font-semibold`}>
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
              <div
                className="relative"
                onMouseEnter={() => setDestinationsOpen(true)}
                onMouseLeave={() => setDestinationsOpen(false)}
              >
                <div className="flex flex-row items-center space-x-1 hover:text-orange-500">
                  <a href="#">
                    Destinations
                  </a>
                  <FaSortDown size={16}/>
                </div>
                {isDestinationsOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg border border-gray-400 z-10">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-400"></div>
                    <div className="py-2">
                    <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                       <span className="text-orange-500 font-semibold">&#x22EE;</span> Popular Destinations
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Ooty
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Kodaikanal
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Kancheepuram
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Kanniakumari
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Mahabalipuram
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Madurai
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Chennai
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Thanjavur
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <div className="flex flex-row items-center justify-center space-x-1 hover:text-orange-500">
                  <a href="#">
                    Categories
                  </a>
                  <FaSortDown size={16}/>
                </div>
                {isCategoriesOpen && (
                  <div className="absolute  left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg border border-gray-500 z-10">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-500"></div>
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold"> &#x22EE;</span> All Categories
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Hills
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Beaches
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Wildlife
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Waterfalls
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Museums
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Forts
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Palace
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Monuments
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 font-normal hover:text-orange-600"
                      >
                        <span className="text-orange-500 font-semibold">-</span> Lakes
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-orange-500">
                Gallery
              </a>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
              <a href="#" className="hover:text-orange-500">
                Contact
              </a>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden text-xs">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              Home
            </a>
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
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">&#x22EE;</span> Popular Destinations
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Ooty
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Kodaikanal
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Kancheepuram
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Kanniakumari
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Mahabalipuram
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Madurai
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Chennai
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Thanjavur
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!isCategoriesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300 focus:outline-none"
              >
                Categories
                <FaSortDown />
              </button>
              {isCategoriesOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">&#x22EE;</span> All Categories
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Hills
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Beaches
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Wildlife
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Waterfalls
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Museums
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Forts
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Palace
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Monuments
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-gray-800 hover:bg-orange-300"
                  >
                    <span className="text-orange-500 font-semibold">-</span> Lakes
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              Gallery
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-xs font-medium text-gray-800 hover:bg-orange-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;