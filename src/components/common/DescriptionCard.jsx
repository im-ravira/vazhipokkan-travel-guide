const DestinationCard = ({ name, src, content, altText, additionalClasses }) => (
    <div className={`${additionalClasses}`}>
      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md overflow-hidden">
        <img src={src} alt={altText || name} className="w-full h-36 object-cover rounded-t-lg" />
        <div className="p-2 text-left">
          <h3 className="md:text-lg text-base font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-700 md:text-base text-sm text-pretty py-2">{content}</p>
        </div>
      </div>
    </div>
  );
  
  export default DestinationCard;
  