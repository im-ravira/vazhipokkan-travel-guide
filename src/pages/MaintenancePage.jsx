import { Link } from "react-router-dom";
import { TbFileSad } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const MaintenancePage = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Page Under Maintenance - Vazhipokkan</title>
        <meta
          name="description"
          content="Our page is currently undergoing maintenance. Please check back later for a better experience."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="flex flex-col  p-2 text-center space-y-6 md:space-y-12">
          <h1 className="flex felx-row gap-1 lg:text-[5.3rem] md:text-[4rem] text-[1.8rem] lg:text-7xl items-center justify-center font-bold text-red-500">
            <TbFileSad />
            We&apos;ll Be Back Soon!
          </h1>
          <div>
            <p className="text-gray-700 leading-relaxed md:text-lg text-sm text-center lg:text-xl max-w-4xl mx-[0.7rem] md:mx-[3.5rem] lg:mx-[14rem]">
              <span className="md:inline-block hidden">
                Our page is currently undergoing maintenance. We’re working hard
                to bring you the best experience. Thank you for your patience!
                Please check back later.
              </span>
              <span className="md:hidden block">Our page is currently undergoing maintenance. Please check back later. </span>
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
