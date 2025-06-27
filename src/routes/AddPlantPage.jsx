// import React from "react";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { motion as Motion } from "framer-motion";

// const AddPlantPage = () => {
//   const { user } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = Object.fromEntries(new FormData(form));

//     fetch('https://project-web-b11-a10-plant-care-serv.vercel.app/plants', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then(res => res.json())
//       .then(() => {
//         Swal.fire({
//           title: "🌿 Plant Added!",
//           icon: "success",
//           confirmButtonColor: "#16a34a",
//           background: document.documentElement.classList.contains("dark") ? "#1f2937" : "#fff",
//           color: document.documentElement.classList.contains("dark") ? "#f3f4f6" : "#111"
//         });
//         form.reset();
//       })
//       .catch(error => {
//         console.error("Error:", error);
//         toast.error("Failed to add plant");
//       });
//   };

//   return (
//     <div className="bg-gradient-to-br from-green-100 to-green-300 dark:from-zinc-900 dark:to-zinc-800 min-h-screen flex items-center justify-center px-4 py-8">
//       <Motion.section
//         className="w-full max-w-3xl p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-green-800/30"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl font-extrabold text-green-700 dark:text-green-400 text-center mb-6">
//           Add a New Plant
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Plant Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label htmlFor="image" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Image URL
//               </label>
//               <input
//                 id="image"
//                 name="image"
//                 type="text"
//                 required
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//               />
//             </div>

//             <div>
//               <label htmlFor="plantName" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Plant Name
//               </label>
//               <input
//                 id="plantName"
//                 name="plantName"
//                 type="text"
//                 required
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//               />
//             </div>

//             <div>
//               <label htmlFor="category" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Category
//               </label>
//               <select
//                 id="category"
//                 name="category"
//                 className="select select-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                 required
//               >
//                 <option value="succulent">Succulent</option>
//                 <option value="fern">Fern</option>
//                 <option value="flowering">Flowering</option>
//                 <option value="cactus">Cactus</option>
//                 <option value="foliage">Foliage</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="description" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 required
//                 className="textarea textarea-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                 rows={3}
//               />
//             </div>

//             <div>
//               <label htmlFor="careLevel" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Care Level
//               </label>
//               <select
//                 id="careLevel"
//                 name="careLevel"
//                 className="select select-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                 required
//               >
//                 <option value="easy">Easy</option>
//                 <option value="moderate">Moderate</option>
//                 <option value="difficult">Difficult</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="wateringFrequency" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Watering Frequency
//               </label>
//               <input
//                 id="wateringFrequency"
//                 name="wateringFrequency"
//                 type="text"
//                 required
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Watering Dates */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label htmlFor="lastWateredDate" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Last Watered Date
//               </label>
//               <input
//                 id="lastWateredDate"
//                 name="lastWateredDate"
//                 type="date"
//                 required
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//               />
//             </div>

//             <div>
//               <label htmlFor="nextWateringDate" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Next Watered Date
//               </label>
//               <input
//                 id="nextWateringDate"
//                 name="nextWateringDate"
//                 type="date"
//                 required
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Health & User Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <label htmlFor="healthStatus" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Health Status
//               </label>
//               <input
//                 id="healthStatus"
//                 name="healthStatus"
//                 type="text"
//                 required
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//               />
//             </div>

//             <div>
//               <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Added By
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={user?.displayName || ""}
//                 readOnly
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white cursor-not-allowed"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={user?.email || ""}
//                 readOnly
//                 className="input input-bordered rounded-xl w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white cursor-not-allowed"
//               />
//             </div>
//           </div>

//           <Motion.button
//             type="submit"
//             whileTap={{ scale: 0.97 }}
//             className="w-full btn btn-success rounded-xl text-white dark:bg-green-600 dark:hover:bg-green-700 transition"
//           >
//             🌱 Add Plant
//           </Motion.button>
//         </form>
//       </Motion.section>
//     </div>
//   );
// };

// export default AddPlantPage;
import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/Provider/AuthProvider";
import Swal from "sweetalert2";
import { motion as Motion } from "framer-motion";

const AddPlantPage = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));

    fetch("https://project-web-b11-a10-plant-care-serv.vercel.app/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "🌿 Plant Added!",
          icon: "success",
          confirmButtonColor: "#16a34a",
          background: document.documentElement.classList.contains("dark")
            ? "#1f2937"
            : "#fff",
          color: document.documentElement.classList.contains("dark")
            ? "#f3f4f6"
            : "#111",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to add plant");
      });
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-300 dark:from-zinc-900 dark:to-zinc-800 min-h-screen flex items-center justify-center px-4 py-8">
      <Motion.section
        className="w-full max-w-3xl p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-green-800/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-green-700 dark:text-green-400 text-center mb-6">
          Add a New Plant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Plant Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="image" className="label-style">Image URL</label>
              <input
                id="image"
                name="image"
                type="url"
                placeholder="https://yourimageurl.com/plant.jpg"
                required
                className="input-style"
              />
            </div>

            <div>
              <label htmlFor="plantName" className="label-style">Plant Name</label>
              <input
                id="plantName"
                name="plantName"
                type="text"
                placeholder="Aloe Vera"
                required
                className="input-style"
              />
            </div>

            <div>
              <label htmlFor="category" className="label-style">Category</label>
              <select
                id="category"
                name="category"
                required
                className="select-style"
              >
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
                <option value="cactus">Cactus</option>
                <option value="foliage">Foliage</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="label-style">Description</label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Write a short description about the plant..."
                required
                className="textarea-style"
              />
            </div>

            <div>
              <label htmlFor="careLevel" className="label-style">Care Level</label>
              <select
                id="careLevel"
                name="careLevel"
                required
                className="select-style"
              >
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            <div>
              <label htmlFor="wateringFrequency" className="label-style">
                Watering Frequency (days)
              </label>
              <input
                id="wateringFrequency"
                name="wateringFrequency"
                type="number"
                min="1"
                placeholder="e.g. 3"
                required
                className="input-style"
              />
            </div>
          </div>

          {/* Watering Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="lastWateredDate" className="label-style">
                Last Watered Date
              </label>
              <input
                id="lastWateredDate"
                name="lastWateredDate"
                type="date"
                required
                className="input-style"
              />
            </div>

            <div>
              <label htmlFor="nextWateringDate" className="label-style">
                Next Watering Date
              </label>
              <input
                id="nextWateringDate"
                name="nextWateringDate"
                type="date"
                required
                className="input-style"
              />
            </div>
          </div>

          {/* User & Health Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="healthStatus" className="label-style">
                Health Status
              </label>
              <input
                id="healthStatus"
                name="healthStatus"
                type="text"
                placeholder="Healthy, Needs Attention, etc."
                required
                className="input-style"
              />
            </div>

            <div>
              <label htmlFor="name" className="label-style">Added By</label>
              <input
                id="name"
                name="name"
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="input-style cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="email" className="label-style">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={user?.email || ""}
                readOnly
                className="input-style cursor-not-allowed"
              />
            </div>
          </div>

          <Motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="w-full btn btn-success rounded-xl text-white dark:bg-green-600 dark:hover:bg-green-700 transition"
          >
            🌱 Add Plant
          </Motion.button>
        </form>
      </Motion.section>
    </div>
  );
};

export default AddPlantPage;
