

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../context/firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { Navigate } from "react-router-dom";

import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState(null);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <Loading />
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name || user.displayName,
        photoURL: photoURL || user.photoURL,
      });

      Swal.fire({
        title: "Profile updated successfully!",
        icon: "success",
        draggable: true,
        background: document.documentElement.classList.contains("dark")
          ? "#1f2937"
          : "#fff",
        color: document.documentElement.classList.contains("dark")
          ? "#4ade80"
          : "#166534",
        confirmButtonColor: "#16a34a",
      });

      setName("");
      setPhotoURL("");
      setError(null);
    } catch (err) {
      setError(err.message);

      Swal.fire({
        title: "Failed to update profile!",
        icon: "error",
        draggable: true,
        background: document.documentElement.classList.contains("dark")
          ? "#1f2937"
          : "#fff",
        color: document.documentElement.classList.contains("dark")
          ? "#f3f4f6"
          : "#111",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-300 dark:from-zinc-900 dark:to-zinc-800 px-6 py-16 transition-colors duration-500">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-lg shadow-green-200/50 dark:shadow-emerald-600/50 p-10 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-green-700 dark:text-emerald-400 text-center mb-8">
          Update Your Profile
        </h1>

        <div className="flex flex-col items-center mb-6">
          <img
            src={user?.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-green-600 dark:border-emerald-500 shadow-lg object-cover"
          />
          <h2 className="mt-5 text-2xl font-semibold text-green-700 dark:text-emerald-400 tracking-tight">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm select-text">
            {user.email}
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {error && (
            <div className="bg-red-100 dark:bg-red-700 bg-opacity-90 text-red-700 dark:text-red-300 p-3 rounded-md text-sm text-center font-medium transition-colors duration-500">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-5 py-3 bg-green-50 dark:bg-zinc-800 border border-green-400 dark:border-emerald-400 rounded-2xl text-green-900 dark:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Profile Photo URL
            </label>
            <input
              id="photoURL"
              type="url"
              className="w-full px-5 py-3 bg-green-50 dark:bg-zinc-800 border border-green-400 dark:border-emerald-400 rounded-2xl text-green-900 dark:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Paste a valid image URL"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-700 hover:bg-green-800 rounded-2xl text-white font-semibold transition shadow-md shadow-green-300 dark:shadow-green-700 focus:outline-none focus:ring-4 focus:ring-emerald-400"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
