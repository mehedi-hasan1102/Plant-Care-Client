


import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
        // toast.error("Failed to load plants");

Swal.fire({
  title: "Failed to load plants !",
  icon: "error",
  draggable: true
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
      // toast.success("Plant deleted successfully!");

Swal.fire({
  title: "Plant deleted successfully! ",
  icon: "success",
  draggable: true
});


      setDeletingId(null);
    } catch (error) {
      // toast.error("Failed to delete plant.");

Swal.fire({
  title: "Failed to delete plant.!",
  icon: "error",
  draggable: true
});


      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-green-700 dark:text-green-300 text-lg animate-pulse">
        Loading your plants...
      </div>
    );
  }

  return (
    <div className="px-4 py-10 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-700 dark:text-emerald-400">
          My Plants
        </h2>

        {plants.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            You haven’t added any plants yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-xl bg-white dark:bg-zinc-800 transition">
            <table className="min-w-full text-sm text-left border border-gray-200 dark:border-zinc-700">
              <thead className="bg-green-100 dark:bg-emerald-900 text-gray-800 dark:text-gray-100">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Watering</th>
                  <th className="p-4 text-center">Actions</th>
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
                    <td className="p-4 flex justify-center gap-3">
                      <button
                        onClick={() => navigate(`/update-plant/${plant._id}`)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => setDeletingId(plant._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
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
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md w-[90%] max-w-md text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-6">Are you sure you want to delete this plant?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setDeletingId(null)}
                  className="px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded hover:bg-gray-100 dark:hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deletingId)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
