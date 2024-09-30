import React from "react";
import { Link } from "react-router-dom";
import { TbFileSad } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const MaintenancePage = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Page Under Maintenance - Vazhipokkan</title>
        <meta name="description" content="Our page is currently undergoing maintenance. Please check back later for a better experience." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="flex flex-col md:p-12  p-6 text-center space-y-8 md:space-y-12">
          <h1 className="flex felx-row gap-1 md:text-[2.9rem] text-[1.7rem] lg:text-7xl items-center justify-center font-bold text-red-500">
            <TbFileSad />
            We'll Be Back Soon!
          </h1>
          <div>
            <p className="text-gray-700 leading-relaxed md:text-lg text-sm text-justify lg:text-xl max-w-4xl mx-[1.2rem] md:mx-[5.5rem]">
              Our page is currently undergoing maintenance. We’re working hard
              to bring <br className="hidden lg:block" />
              you the best experience. Please check back later. Thank you for
              your patience!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-orange-500 font-medium text-white md:text-xl text-sm py-2 md:py-3 px-20 md:px-36  rounded hover:bg-orange-600 transition duration-200"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MaintenancePage;
