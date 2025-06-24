import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/Provider/AuthProvider";
import NextWateringReminder from "../Components/NextWateringReminder";
import Loading from "../Components/Loading";

const PlantDetailsPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://project-web-b11-a10-plant-care-serv.vercel.app/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data))
      .catch((err) => console.error("Failed to load plant details:", err));
  }, [id]);

  if (!plant)
    return (
      <div >
        <Loading />
      </div>
    );

  return (
    <div className="px-4 py-1 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
      <div className="mt-18 max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl mb-8">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
          {plant.plantName}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Category:</strong> {plant.category}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Description:</strong> {plant.description}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Care Level:</strong> {plant.careLevel}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Watering Frequency:</strong> Every {plant.wateringFrequency}{" "}
          days
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Last Watered:</strong> {plant.lastWateredDate}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Health Status:</strong> {plant.healthStatus}
        </p>

        <p className="text-gray-700 dark:text-gray-400 mt-4 text-sm">
          <strong>Added by:</strong> {user?.displayName || "Unknown User"} (
          {user?.email || "No email"})
        </p>
      </div>

      {/* 👇 Next Watering Reminder Component */}
      <div className="max-w-3xl mx-auto mb-10">
        <NextWateringReminder
          plantName={plant.plantName}
          lastWateredDate={plant.lastWateredDate}
          wateringIntervalDays={parseInt(plant.wateringFrequency)}
        />
      </div>
    </div>
  );
};

export default PlantDetailsPage;
