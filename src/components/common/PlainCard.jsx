import PropTypes from "prop-types";
import MapIcon from "../../assets/google-maps-icon.svg";

const PlainCard = ({
  name,
  src,
  content,
  altText,
  location,
  additionalClasses,
}) => (
  <article className={`${additionalClasses}`}>
    <div className="p-3 overflow-hidden relative">
      <img
        src={src}
        alt={altText || name}
        className="w-full lg:h-56 md:h-80 h-44 object-cover rounded-t-xl rounded-b-lg"
        loading="lazy"
      />
      <a
        href={location}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-5 bg-white text-orange-500 p-2 rounded-xl shadow-md hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
        aria-label="View on Google Maps"
      >
        <img className="w-6 h-6" src={MapIcon} alt="Map icon"/>
      </a>
      <div className="text-left mt-3">
        <h3 className="md:text-xl text-base font-bold text-gray-800 my-1">
          {name}
        </h3>
        <p className="text-gray-700 md:text-base text-sm text-justify text-pretty py-1">
          {content}
        </p>
      </div>
    </div>
  </article>
);

PlainCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  altText: PropTypes.string,
  location: PropTypes.string.isRequired, // Geolocation link
  additionalClasses: PropTypes.string,
};

export default PlainCard;



