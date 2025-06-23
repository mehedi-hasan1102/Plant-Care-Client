import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const {
    _id,
    plantName,
    category,
    description,
    careLevel,
    healthStatus,
    nextWateringDate,
    lastWateredDate,
    wateringFrequency,
  } = useLoaderData();

  const handleFormUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`https://project-web-b11-a10-plant-care-serv.vercel.app/plants-update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            title: "Update Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-300 dark:from-gray-800 dark:to-gray-900 p-8 min-h-screen">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-400">
          Update Plant
        </h2>
        <form onSubmit={handleFormUpdate} className="space-y-5">
          {/* Plant Image */}
          <div>
            <label className="block font-medium">Plant Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/plant.jpg"
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />

            <label className="block font-medium mt-4">Plant Name</label>
            <input
              type="text"
              name="plantName"
              defaultValue={plantName}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium">Category</label>
            <select
              name="category"
              defaultValue={category}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            >
              <option value="">Select a category</option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              rows="3"
            />
          </div>

          {/* Care Level */}
          <div>
            <label className="block font-medium">Care Level</label>
            <select
              name="careLevel"
              defaultValue={careLevel}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            >
              <option value="">Select care level</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div>
            <label className="block font-medium">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              defaultValue={wateringFrequency}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          {/* Last Watered Date */}
          <div>
            <label className="block font-medium">Last Watered Date</label>
            <input
              type="date"
              name="lastWateredDate"
              defaultValue={lastWateredDate ? lastWateredDate.slice(0, 10) : ""}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          {/* Next Watering Date */}
          <div>
            <label className="block font-medium">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
              defaultValue={
                nextWateringDate ? nextWateringDate.slice(0, 10) : ""
              }
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          {/* Health Status */}
          <div>
            <label className="block font-medium">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              defaultValue={healthStatus}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:hover:bg-green-500 transition"
            >
              Update Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;