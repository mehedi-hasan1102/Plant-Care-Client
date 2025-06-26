import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import Loading from "./Loading";

const NewPlantsSection = () => {
  const [visiblePlants, setVisiblePlants] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://project-web-b11-a10-plant-care-serv.vercel.app/plants")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const sorted = [...data].reverse();
        setAllPlants(sorted);
        setVisiblePlants(sorted.slice(0, 4));
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
    }, 800);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 bg-gradient-to-b from-green-50 to-white dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400">
          New Arrivals
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-base max-w-xl mx-auto">
          Discover beautiful and healthy plants freshly added to our collection.
          Perfect for home, office, or gifts.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loading />
        </div>
      ) : (
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {visiblePlants.map((plant, index) => (
           <Motion.div
  key={plant._id || index}
  className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md border border-green-200 dark:border-zinc-700 p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[380px] group"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
  {plant.image && (
    <Motion.img
      src={plant.image}
      alt={plant.plantName || "Plant image"}
      className="w-full h-36 object-cover rounded-xl mb-3 transition-transform duration-500 ease-in-out group-hover:scale-105"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    />
  )}

  <div className="flex-1">
    <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-1">
      {plant.plantName || "Unnamed Plant"}
    </h3>

    <p className="text-xs inline-block px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-white mb-2">
      {plant.category || "No category"}
    </p>

    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-3 leading-relaxed">
      {plant.description?.slice(0, 80) || "No description available..."}
    </p>
  </div>

  <button
    onClick={() => plant._id && navigate(`/dashboard/plant-details/${plant._id}`)}
    className="mt-auto px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition"
    disabled={!plant._id}
  >
    See More
  </button>
</Motion.div>

          ))}
        </Motion.div>
      )}

      {!showAll && !loading && allPlants.length > 4 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleShowAll}
            className="px-6 py-2 rounded-full border border-green-500 text-green-700 dark:text-white dark:border-green-500 hover:bg-green-100 dark:hover:bg-green-700 transition"
          >
            View All Plants
          </button>
        </div>
      )}
    </section>
  );
};

export default NewPlantsSection;
