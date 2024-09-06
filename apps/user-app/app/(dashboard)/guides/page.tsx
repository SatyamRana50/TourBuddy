"use client";
import { Button } from "@repo/ui/button";
import Filter from "@repo/ui/filter";
import Spinner from "@repo/ui/spinner";
import { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import GuideCard from "../../../components/guideServer";
import Pagination from "@repo/ui/pagination";

export default function () {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const guides = [
    {
      id: "1",
      name: "John Doe",
      rating: 4.8,
      experience: 5,
      location: "New York",
      price: 150,
      languages: ["English", "Spanish"],
      availability: "Mon-Fri",
      description: "Experienced tour guide in New York City...",
    },
    {
      id: "2",
      name: "Jane Smith",
      rating: 4.7,
      experience: 7,
      location: "Los Angeles",
      price: 200,
      languages: ["English"],
      availability: "Tue-Sat",
      description:
        "Passionate guide with deep knowledge of LA's culture and history.",
    },
    {
      id: "3",
      name: "Carlos Mendoza",
      rating: 4.9,
      experience: 10,
      location: "Miami",
      price: 180,
      languages: ["Spanish", "English"],
      availability: "Wed-Sun",
      description:
        "Specialist in Miami's vibrant nightlife and cultural hotspots.",
    },
    {
      id: "4",
      name: "Emma Liu",
      rating: 4.6,
      experience: 6,
      location: "San Francisco",
      price: 220,
      languages: ["English", "Mandarin"],
      availability: "Mon-Fri",
      description: "Expert in the hidden gems of San Francisco.",
    },
    {
      id: "5",
      name: "Luca Rossi",
      rating: 4.5,
      experience: 8,
      location: "Rome",
      price: 250,
      languages: ["Italian", "English"],
      availability: "Tue-Sat",
      description: "Historical guide with a deep love for Roman history.",
    },
    {
      id: "6",
      name: "Marie Dubois",
      rating: 4.7,
      experience: 9,
      location: "Paris",
      price: 240,
      languages: ["French", "English"],
      availability: "Mon-Fri",
      description:
        "Art and culture expert with years of guiding experience in Paris.",
    },
    {
      id: "7",
      name: "Aki Tanaka",
      rating: 4.8,
      experience: 12,
      location: "Tokyo",
      price: 260,
      languages: ["Japanese", "English"],
      availability: "Wed-Sun",
      description: "Expert in modern and traditional aspects of Tokyo.",
    },
    {
      id: "8",
      name: "Sofia Garcia",
      rating: 4.9,
      experience: 7,
      location: "Barcelona",
      price: 230,
      languages: ["Spanish", "Catalan", "English"],
      availability: "Mon-Fri",
      description:
        "Passionate about Barcelona's architecture and local traditions.",
    },
    {
      id: "9",
      name: "Khaled Mansour",
      rating: 4.8,
      experience: 15,
      location: "Cairo",
      price: 170,
      languages: ["Arabic", "English"],
      availability: "Tue-Sat",
      description: "Experienced in guiding through Egypt's ancient wonders.",
    },
    {
      id: "10",
      name: "Anna Müller",
      rating: 4.7,
      experience: 11,
      location: "Berlin",
      price: 190,
      languages: ["German", "English"],
      availability: "Wed-Sun",
      description: "History buff specializing in Berlin's World War II sites.",
    },
  ];

  const handleApplyFilter = (newFilters: any) => {
    setFilters(newFilters);
    setIsFilterVisible(false);
  };

  const onPageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const onLimitChange = (newLimit: number) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-6">
          <div className="flex justify-between items-center flex-wrap mb-4">
            <h2 className="text-2xl font-semibold leading-tight mb-2 sm:mb-0 sm:mr-4">
              Guides
            </h2>
            <div className="flex items-center">
              <Button
                label="Filter"
                Icon={AiOutlineFilter}
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md inline-flex items-center"
              ></Button>
            </div>
          </div>
          {isFilterVisible && (
            <div className="relative">
              <Filter
                onApplyFilter={handleApplyFilter}
                setIsFilterVisible={setIsFilterVisible}
                preFilters={filters}
                fields={[]}
              />
            </div>
          )}
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col space-y-4 mb-4">
              {guides.map((guide) => (
                <GuideCard
                  guide={guide}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                />
              ))}
            </div>
          )}
          {!loading && totalPages !== 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              itemsPerPage={itemsPerPage}
              name="Guides"
              onLimitChange={onLimitChange}
              disabled={loading}
            />
          )}
        </div>
      </div>
    </>
  );
}
