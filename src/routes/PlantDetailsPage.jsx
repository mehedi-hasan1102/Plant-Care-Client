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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-500 px-4 py-6">
        <Loading />
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-500 px-6 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl dark:shadow-green-900/50 p-8">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-green-700 dark:text-emerald-400 mb-10 text-center tracking-tight">
          Plant Details
        </h2>

        {/* Plant Image */}
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-72 object-cover rounded-2xl mb-8 shadow-lg border-4 border-green-200 dark:border-emerald-700"
        />

        {/* Plant Name */}
        <h1 className="text-4xl font-bold text-green-800 dark:text-emerald-300 mb-6 text-center">
          {plant.plantName}
        </h1>

        {/* Plant Information */}
        <div className="space-y-5 text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-green-700 dark:text-emerald-400">
              Category:
            </span>{" "}
            <span className="capitalize">{plant.category}</span>
          </p>

          <p>
            <span className="font-semibold text-green-700 dark:text-emerald-400">
              Description:
            </span>{" "}
            {plant.description}
          </p>

          <p>
            <span className="font-semibold text-green-700 dark:text-emerald-400">
              Care Level:
            </span>{" "}
            {plant.careLevel}
          </p>

          <p>
            <span className="font-semibold text-green-700 dark:text-emerald-400">
              Watering Frequency:
            </span>{" "}
            Every {plant.wateringFrequency} day
            {plant.wateringFrequency > 1 ? "s" : ""}
          </p>

          <p>
            <span className="font-semibold text-green-700 dark:text-emerald-400">
              Last Watered:
            </span>{" "}
            {plant.lastWateredDate}
          </p>

          <p>
            <span className="font-semibold text-green-700 dark:text-emerald-400">
              Health Status:
            </span>{" "}
            {plant.healthStatus}
          </p>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic text-center">
            <strong>Added by:</strong> ({plant.email || "No email"})
          </p>
        </div>
      </div>

      {/* Next Watering Reminder */}
      <div className="max-w-4xl mx-auto mt-12">
        <NextWateringReminder
          plantName={plant.plantName}
          lastWateredDate={plant.lastWateredDate}
          wateringIntervalDays={parseInt(plant.wateringFrequency, 10)}
        />
      </div>
    </div>
  );
};

export default PlantDetailsPage;
