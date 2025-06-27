
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const MyPlants = () => {
  const { user } = useAuth();
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyPlants = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch("https://project-web-b11-a10-plant-care-serv.vercel.app/plants");
        const allPlants = await res.json();
        const myPlants = allPlants.filter((plant) => plant.email === user.email);
        setPlants(myPlants);
      } catch (error) {
        Swal.fire({
          title: "Failed to load plants!",
          icon: "error",
          draggable: true,
          background: document.documentElement.classList.contains("dark") ? "#18181b" : "#fff",
          color: document.documentElement.classList.contains("dark") ? "#4ade80" : "#166534",
        });
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyPlants();
  }, [user?.email]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://project-web-b11-a10-plant-care-serv.vercel.app/plants/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setPlants((prev) => prev.filter((plant) => plant._id !== id));
      Swal.fire({
        title: "Plant deleted successfully!",
        icon: "success",
        draggable: true,
        background: document.documentElement.classList.contains("dark") ? "#18181b" : "#fff",
        color: document.documentElement.classList.contains("dark") ? "#4ade80" : "#166534",
      });
      setDeletingId(null);
    } catch (error) {
      Swal.fire({
        title: "Failed to delete plant!",
        icon: "error",
        draggable: true,
        background: document.documentElement.classList.contains("dark") ? "#18181b" : "#fff",
        color: document.documentElement.classList.contains("dark") ? "#4ade80" : "#166534",
      });
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen
        bg-gradient-to-br from-green-50 via-white to-green-100
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        transition-colors duration-300"
      >
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen
        bg-gradient-to-br from-green-50 via-white to-green-100
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        transition-colors duration-300 py-10 px-4"
    >
      <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-lg shadow-green-200/50 dark:shadow-emerald-600/50 p-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 dark:text-emerald-400 mb-8 text-center">
          My Plants
        </h2>

        {plants.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg py-20">
            You haven’t added any plants yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-green-200 dark:border-emerald-600 shadow-sm">
            <table className="min-w-full text-left text-sm text-gray-700 dark:text-gray-300 border-collapse rounded-2xl">
              <thead className="bg-green-100 dark:bg-emerald-900 text-gray-800 dark:text-gray-100 rounded-t-2xl">
                <tr>
                  <th className="p-4 font-semibold rounded-tl-2xl">Name</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold">Watering</th>
                  <th className="p-4 font-semibold text-center rounded-tr-2xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {plants.map((plant, idx) => (
                  <tr
                    key={plant._id}
                    className={`border-t border-green-200 dark:border-emerald-700
                      ${idx % 2 === 0
                        ? "bg-green-50 dark:bg-zinc-800"
                        : "bg-white dark:bg-zinc-700"
                      } hover:bg-green-100 dark:hover:bg-emerald-900 transition`}
                  >
                    <td className="p-4 font-semibold">{plant.plantName}</td>
                    <td className="p-4 capitalize">{plant.category}</td>
                    <td className="p-4">{plant.wateringFrequency}</td>
                    <td className="p-4 flex justify-center gap-3">
                      <button
                        onClick={() => navigate(`/dashboard/update-plant/${plant._id}`)}
                        className="btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700 rounded-2xl px-5 py-2"
                        aria-label={`Update ${plant.plantName}`}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setDeletingId(plant._id)}
                        className="btn btn-sm btn-outline text-red-600 dark:text-red-400 rounded-2xl px-5 py-2"
                        aria-label={`Delete ${plant.plantName}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deletingId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-3xl shadow-lg max-w-md w-[90%] text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete this plant?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setDeletingId(null)}
                  className="px-5 py-2 border border-green-300 dark:border-emerald-500 rounded-2xl hover:bg-green-100 dark:hover:bg-emerald-700 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deletingId)}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-2xl transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlants;
