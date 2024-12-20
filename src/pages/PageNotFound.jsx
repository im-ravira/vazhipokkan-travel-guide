import { Link } from "react-router-dom";
import { TbFileSad } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const PageNotFound = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>404 - Page Not Found | Vazhipokkan</title>
        <meta
          name="description"
          content="Sorry, the page you're looking for doesn't exist. Please check the URL or return to the homepage."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="flex flex-col md:p-12 p-6 text-center space-y-6 md:space-y-12">
          <h1 className="flex flex-row gap-1 lg:text-[5.5rem] md:text-[4.5rem] text-[2.2rem] lg:text-7xl items-center justify-center font-bold text-red-500">
            <TbFileSad />
            Oops! 404 Page
          </h1>
          <div>
            <p className="text-gray-700 leading-relaxed md:text-lg text-sm text-center lg:text-xl max-w-3xl mx-[0rem] md:mx-[2.5rem] lg:mx-[14rem]">
              <span className="md:block hidden">Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
              moved.</span> Please check the URL or return to the homepage.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-orange-500 font-medium text-white md:text-xl text-sm py-2 md:py-3 px-20 md:px-36 rounded hover:bg-orange-600 transition duration-200"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
