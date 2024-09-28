import { Link } from "react-router-dom";

const DescriptionCard = ({
  name,
  src,
  content,
  altText,
  route,
  additionalClasses,
}) => (
  <article className={`${additionalClasses}`}>
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md overflow-hidden">
      <img
        src={src}
        alt={altText || name}
        className="w-full lg:h-40 md:h-64 h-40 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-2 text-left">
        <h3 className="md:text-lg text-base font-bold text-gray-800 mb-2">
          {name}
        </h3>
        <p className="text-gray-700 md:text-base text-sm max-sm:text-justify text-pretty py-2">
          {content}
        </p>
        <Link to={route}><p className="text-orange-500 hover:text-orange-600 text-end text-sm md:text-base lg:text-lg">view more...</p></Link>
      </div>
    </div>
  </article>
);

export default DescriptionCard;
