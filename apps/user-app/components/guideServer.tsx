import React from "react";
import GuideCardClient from "./guideClient";

interface Guide {
  id: string;
  name: string;
  rating: number;
  experience: number;
  location: string;
  price: number;
  languages?: string[];
  availability?: string;
  description?: string;
}

interface GuideCardProps {
  guide: Guide;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({
  guide,
  expandedId,
  setExpandedId,
}) => {
  const {
    name,
    rating,
    experience,
    location,
    price,
    languages,
    availability,
    description,
    id,
  } = guide;

  const isExpanded = expandedId === id;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Guide: {name ?? "N/A"}
              </h2>
              <GuideCardClient
                isExpanded={isExpanded}
                setExpandedId={setExpandedId}
                id={id}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex-1">
                <p className="text-xl font-bold text-gray-800 mb-2">
                  Rating: {rating ?? "N/A"} ★
                </p>
                <p className="text-sm text-gray-600">
                  Experience: {experience ?? "N/A"} years
                </p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Location: {location ?? "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Price: ${price ? price.toFixed(2) : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Additional Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <p className="text-sm font-semibold text-gray-600">Languages:</p>
              <p className="text-sm text-gray-800">
                {languages?.join(", ") ?? "N/A"}
              </p>
              <p className="text-sm font-semibold text-gray-600">
                Availability:
              </p>
              <p className="text-sm text-gray-800">{availability ?? "N/A"}</p>
              <p className="text-sm font-semibold text-gray-600">
                Description:
              </p>
              <p className="text-sm text-gray-800">{description ?? "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
