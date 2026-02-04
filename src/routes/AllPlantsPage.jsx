import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";
import { motion as Motion } from "framer-motion";

const AllPlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const navigate = useNavigate();

  // Fetch plants
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get(
          "https://project-web-b11-a10-plant-care-serv.vercel.app/plants"
        );
        setPlants(res.data);
        setFilteredPlants(res.data);
      } catch (err) {
        Swal.fire({
          title: "Failed to fetch plants",
          icon: "error",
          draggable: true,
        });
        console.error("Error fetching plants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  // Filter & sort plants
  useEffect(() => {
    let updatedPlants = [...plants];

    if (categoryFilter !== "all") {
      updatedPlants = updatedPlants.filter(
        (plant) => plant.category === categoryFilter
      );
    }

    updatedPlants.sort((a, b) => {
      if (a.plantName.toLowerCase() < b.plantName.toLowerCase())
        return sortOrder === "asc" ? -1 : 1;
      if (a.plantName.toLowerCase() > b.plantName.toLowerCase())
        return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredPlants(updatedPlants);
  }, [plants, sortOrder, categoryFilter]);

  const categories = ["all", ...new Set(plants.map((p) => p.category).filter(Boolean))];

  if (loading) return <Loading />;

  return (
    <section className="m-16 max-w-7xl mx-auto px-6 py-12 rounded-3xl transition-colors duration-300">
      <h1 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-10 text-center">
        All Plants
      </h1>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">
            Sort by Name:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full max-w-xs px-4 py-2 rounded-md border border-green-400
              dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500
              transition"
          >
            <option value="asc">Ascending (A-Z)</option>
            <option value="desc">Descending (Z-A)</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">
            Filter by Category:
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full max-w-xs px-4 py-2 rounded-md border border-green-400
              dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500
              transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Plants Grid */}
      {filteredPlants.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No plants found.
        </p>
      ) : (
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredPlants.map((plant, index) => (
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
                  loading="lazy"
                />
              )}

              <div className="flex-1">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                  {plant.plantName || "Unnamed Plant"}
                </h3>

                <p className="text-xs inline-block px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-white mb-2 shadow-sm">
                  {plant.category ? plant.category.charAt(0).toUpperCase() + plant.category.slice(1) : "No category"}
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-3 leading-relaxed">
                  {plant.description?.slice(0, 80) || "No description available..."}
                </p>
              </div>

              <button
                disabled={!plant._id}
                className={`mt-auto px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${plant._id
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                onClick={() => plant._id && navigate(`/dashboard/plant-details/${plant._id}`)}
                aria-disabled={!plant._id}
              >
                See More
              </button>
            </Motion.div>
          ))}
        </Motion.div>
      )}
    </section>
  );
};

export default AllPlantsPage;
