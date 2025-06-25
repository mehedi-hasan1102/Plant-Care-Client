

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const NewPlantsSection = () => {
  const [visiblePlants, setVisiblePlants] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://project-web-b11-a10-plant-care-serv.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].reverse();
        setAllPlants(sorted);
        setVisiblePlants(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch plants data", err);
        setLoading(false);
      });
  }, []);

  const handleShowAll = () => {
    setLoading(true);
    setTimeout(() => {
      setVisiblePlants(allPlants);
      setLoading(false);
      setShowAll(true);
    }, 1000);
  };

  return (
    <section className="max-w-8xl mx-auto px-4 py-14 bg-gradient-to-b from-green-50 to-white dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300 ">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400">
          New Arrivals
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base max-w-xl mx-auto">
          Discover beautiful and healthy plants freshly added to our collection. Perfect for home, office, or gifts.
        </p>
      </div>

      {loading ? (
        
        <div>  <Loading/> </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePlants.map((plant) => (
            <div
              key={plant._id}
              className="bg-gradient-to-br from-green-100 to-white dark:from-zinc-800 dark:to-zinc-900 p-5 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
            >
              {plant.image && (
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300">
                {plant.plantName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {plant.category}
              </p>
              
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💧 Watering: {plant.wateringFrequency}
              </p>
              <br />
              <button
                onClick={() => navigate(`/dashboard/plant-details/${plant._id}`)}
                className="btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700 "
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {!showAll && !loading && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleShowAll}
            className="px-6 py-2 rounded-full btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600"
          >
            View All Plants
          </button>
        </div>
      )}
    </section>
  );
};

export default NewPlantsSection;
