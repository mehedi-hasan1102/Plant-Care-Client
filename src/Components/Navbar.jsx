import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FiLogOut } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Switch from "./DarkModeSidebar";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      background: isDarkMode ? "#1f2937" : "#ffffff",
      color: isDarkMode ? "#d1d5db" : "#111827",
    });

    if (result.isConfirmed) {
      try {
        await logout();
        Swal.fire({
          icon: "success",
          title: "Logged out",
          text: "You have been successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#d1d5db" : "#111827",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message || "Something went wrong. Please try again.",
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#d1d5db" : "#111827",
        });
      }
    }
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-700 dark:text-green-300 font-semibold" : "hover:text-green-600 dark:hover:text-green-400"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-plants" className={({ isActive }) => isActive ? "text-green-700 dark:text-green-300 font-semibold" : "hover:text-green-600 dark:hover:text-green-400"}>
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-700 dark:text-green-300 font-semibold" : "hover:text-green-600 dark:hover:text-green-400"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-700 dark:text-green-300 font-semibold" : "hover:text-green-600 dark:hover:text-green-400"}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className={({ isActive }) => isActive ? "text-green-700 dark:text-green-300 font-semibold" : "hover:text-green-600 dark:hover:text-green-400"}>
          Support
        </NavLink>
      </li>

      {user && (
  <li className="lg:hidden mt-4 pt-4 border-t border-green-400 px-2">
    {/* Avatar + Name */}
    <div className="flex items-center gap-3 bg-green-50 dark:bg-zinc-800 p-3 rounded-lg shadow-sm mb-3">
      <img
        src={user.photoURL}
        alt={user.displayName || "User"}
        className="w-10 h-10 rounded-full ring-2 ring-green-400 object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-white">
          {user.displayName || "User"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Logged in
        </p>
      </div>
    </div>

    {/* Dashboard Button */}
    <NavLink
      to="/dashboard"
      className="block w-full text-center px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition duration-200"
    >
      Go to Dashboard
    </NavLink>
  </li>
)}

    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-50 dark:bg-zinc-900 border-b-2 border-green-400 shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
            <FaLeaf />
            <Link to="/" className="hover:text-green-600 dark:hover:text-green-300 transition">
              PlantCare
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8 lg:flex-1 lg:justify-center">
            <ul className="flex space-x-8 text-lg font-medium dark:text-white">
              {navItems}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Switch />
            {!user ? (
              <div className="flex space-x-3">
                <Link to="/login" className="btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700">
                  Register
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-9 h-9 rounded-full ring-2 ring-green-400"
                />
                <Link
                  to="/dashboard"
                  className="btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-ghost btn-circle text-red-500 dark:text-red-400 text-lg"
                  data-tooltip-id="tooltip-logout"
                  data-tooltip-content="Logout"
                  aria-label="Logout"
                >
                  <FiLogOut />
                </button>
              </div>
            )}

            {/* Hamburger */}
            <div className="lg:hidden ml-1">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800"
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white dark:bg-gray-900 border-t border-green-400 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="space-y-2 px-4 text-lg font-medium dark:text-white">
          {navItems}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
