

import { toast } from "react-toastify";
import { useAuth } from "../context/Provider/AuthProvider";
import Swal from "sweetalert2";

const AddPlantPage = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));

    fetch('https://project-web-b11-a10-plant-care-serv.vercel.app/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(() => {
        Swal.fire({
  title: "Plants added !",
  icon: "success",
  draggable: true
});
        form.reset();
      })
      .catch(error => {
        console.error("Error:", error);
        toast.error("Failed to add plant");
      });
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center px-4 py-8">
      <section className="mt-20 max-w-3xl w-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-green-800/30">
        <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-8">
          Add a New Plant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Plant Info */}
          <div className="space-y-4">
            <FormInput label="Image URL" name="image" type="text" required />
            <FormInput label="Plant Name" name="plantName" type="text" required />
            <FormSelect label="Category" name="category" options={["succulent", "fern", "flowering", "cactus", "foliage"]} />
            <FormTextarea label="Description" name="description" required />
            <FormSelect label="Care Level" name="careLevel" options={["easy", "moderate", "difficult"]} />
            <FormInput label="Watering Frequency" name="wateringFrequency" type="text" required />
          </div>

          {/* Watering Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput label="Last Watered Date" name="lastWateredDate" type="date" required />
            <FormInput label="Next Watered Date" name="nextWateringDate" type="date" required />
          </div>

          {/* Health & User Info */}
          <div className="space-y-4">
            <FormInput label="Health Status" name="healthStatus" type="text" required />
            <FormInput label="Added By" name="name" type="text" value={user.displayName} readOnly />
            <FormInput label="Email" name="email" type="email" value={user.email} readOnly />
          </div>

          <button type="submit" className=" w-full btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700 ">
            🌱 Add Plant
          </button>
        </form>
      </section>
    </div>
  );
};

// 🔧 Reusable Components
const FormInput = ({ label, ...props }) => (
  <div>
    <label htmlFor={props.name} className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      {...props}
      id={props.name}
      className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    />
  </div>
);

const FormTextarea = ({ label, ...props }) => (
  <div>
    <label htmlFor={props.name} className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <textarea
      {...props}
      id={props.name}
      className="textarea textarea-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    />
  </div>
);

const FormSelect = ({ label, name, options, ...props }) => (
  <div>
    <label htmlFor={name} className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <select
      name={name}
      id={name}
      className="select select-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      {...props}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>{opt[0].toUpperCase() + opt.slice(1)}</option>
      ))}
    </select>
  </div>
);

export default AddPlantPage;
