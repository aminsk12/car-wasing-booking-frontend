import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const FeaturedServiceCard = ({ service }: { service: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Link
      to={`/services/${service?._id}`}
      className="inline-block mt-4 text-white py-2 px-4 rounded-lg ] transition-colors duration-300"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
        <img
          src={service?.image}
          alt={service?.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-[#30415A]">
          <p className="text-gray-700 mb-4">
            {isExpanded
              ? service.name
              : service.name.slice(0, 50)}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " Read less..." : " ..."}
            </span>
          </p>
          </h3>
          <p className="text-gray-700 mb-4">
            {isExpanded
              ? service.description
              : service.description.slice(0, 200)}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " Read less..." : " Read more..."}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedServiceCard;
