import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const AllPlantsDashboard = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get(
          "https://project-web-b11-a10-plant-care-serv.vercel.app/plants"
        );
        setPlants(res.data);
      } catch (err) {
        // toast.error("Failed to fetch plants");
        Swal.fire({
          title: "Failed to fetch plants",
          icon: "error",
          draggable: true
        });
        console.error("Error fetching plants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading/>

      </div>
    );
  }

  return (
    <div className="px-4 py-10 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500 ">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold text-green-700 dark:text-emerald-400 mb-6 text-center">
          All Plants
        </h1>

        <div className="overflow-x-auto rounded-xl shadow-xl bg-white dark:bg-zinc-800 transition">
          <table className="min-w-full text-sm text-left border border-gray-200 dark:border-zinc-700">
            <thead className="bg-green-100 dark:bg-emerald-900 text-gray-800 dark:text-gray-100">
              <tr>
                <th className="p-4">Plant Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Watering Frequency</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {plants.map((plant) => (
                <tr
                  key={plant._id}
                  className="border-t border-gray-100 dark:border-zinc-700 hover:bg-green-50 dark:hover:bg-zinc-700 transition"
                >
                  <td className="p-4 font-medium">{plant.plantName}</td>
                  <td className="p-4">{plant.category}</td>
                  <td className="p-4">{plant.wateringFrequency}</td>
                  <td className="p-4">
                    <button
                      className="btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700 "
                      onClick={() => navigate(`/dashboard/plant-details/${plant._id}`)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}

              {plants.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500 dark:text-gray-400"
                  >
                    No plants found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPlantsDashboard;
