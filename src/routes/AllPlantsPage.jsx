// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import Swal from "sweetalert2";
// import Loading from "../Components/Loading";

// const AllPlantsPage = () => {
//   const [plants, setPlants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPlants = async () => {
//       try {
//         const res = await axios.get(
//           "https://project-web-b11-a10-plant-care-serv.vercel.app/plants"
//         );
//         setPlants(res.data);
//       } catch (err) {
//         // toast.error("Failed to fetch plants");
//         Swal.fire({
//           title: "Failed to fetch plants",
//           icon: "error",
//           draggable: true
//         });
//         console.error("Error fetching plants:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlants();
//   }, []);

//   if (loading) {
//     return (
//       <div>
//         <Loading/>

//       </div>
//     );
//   }

//   return (
//     <div className="px-4 py-10 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500 ">
//       <div className="max-w-6xl mx-auto ">
//         <h1 className="text-4xl font-bold text-green-700 dark:text-emerald-400 mb-6 text-center">
//           All Plants
//         </h1>

//         <div className="overflow-x-auto rounded-xl shadow-xl bg-white dark:bg-zinc-800 transition">
//           <table className="min-w-full text-sm text-left border border-gray-200 dark:border-zinc-700">
//             <thead className="bg-green-100 dark:bg-emerald-900 text-gray-800 dark:text-gray-100">
//               <tr>
//                 <th className="p-4">Plant Name</th>
//                 <th className="p-4">Category</th>
//                 <th className="p-4">Watering Frequency</th>
//                 <th className="p-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700 dark:text-gray-300">
//               {plants.map((plant) => (
//                 <tr
//                   key={plant._id}
//                   className="border-t border-gray-100 dark:border-zinc-700 hover:bg-green-50 dark:hover:bg-zinc-700 transition"
//                 >
//                   <td className="p-4 font-medium">{plant.plantName}</td>
//                   <td className="p-4">{plant.category}</td>
//                   <td className="p-4">{plant.wateringFrequency}</td>
//                   <td className="p-4">
//                     <button
//                       className="btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700 "
//                       onClick={() => navigate(`/dashboard/plant-details/${plant._id}`)}
//                     >
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {plants.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="4"
//                     className="text-center p-6 text-gray-500 dark:text-gray-400"
//                   >
//                     No plants found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllPlantsPage;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const AllPlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const navigate = useNavigate();

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

  // Sort and filter logic
  useEffect(() => {
    let updatedPlants = [...plants];

    // Filter by category
    if (categoryFilter !== "all") {
      updatedPlants = updatedPlants.filter(
        (plant) => plant.category === categoryFilter
      );
    }

    // Sort by plantName
    updatedPlants.sort((a, b) => {
      if (a.plantName < b.plantName) return sortOrder === "asc" ? -1 : 1;
      if (a.plantName > b.plantName) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredPlants(updatedPlants);
  }, [plants, sortOrder, categoryFilter]);

  // Get unique categories for filter dropdown
  const categories = ["all", ...new Set(plants.map((p) => p.category).filter(Boolean))];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-4 py-10 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 dark:text-emerald-400 mb-6 text-center">
          All Plants
        </h1>

        {/* Sorting and Filtering Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <label className="mr-2 font-semibold text-gray-700 dark:text-gray-300">
              Sort by Name:
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-green-400 rounded-md px-2 py-1 dark:bg-zinc-800 dark:text-white"
            >
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>

          <div>
            <label className="mr-2 font-semibold text-gray-700 dark:text-gray-300">
              Filter by Category:
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-green-400 rounded-md px-2 py-1 dark:bg-zinc-800 dark:text-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlants.length === 0 ? (
            <p className="text-center col-span-full text-gray-600 dark:text-gray-400">
              No plants found.
            </p>
          ) : (
            filteredPlants.map((plant) => (
              <div
                key={plant._id}
                className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border border-green-200 dark:border-zinc-700 p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[300px] group"
              >
                {plant.image && (
                  <img
                    src={plant.image}
                    alt={plant.plantName || "Plant"}
                    className="w-full h-36 object-cover rounded-xl mb-3 transition-transform duration-500 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                    {plant.plantName}
                  </h3>

                  <p className="text-xs inline-block px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-white mb-2">
                    {plant.category || "No category"}
                  </p>

                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-3 leading-relaxed">
                    {plant.description || "No description available."}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/dashboard/plant-details/${plant._id}`)}
                  className="mt-auto px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition"
                >
                  View Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPlantsPage;
