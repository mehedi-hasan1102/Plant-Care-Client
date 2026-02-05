

import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/Provider/AuthProvider";
// import { Tooltip } from "react-tooltip";
import { FiLogOut } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import SimpleThemeToggle from "./DarkModeSidebar";
import Swal from "sweetalert2";
import { smoothScrollToElement } from "../utils/smoothScroll";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  // Handle smooth scroll for home page sections
  const handleSectionScroll = (sectionId) => {
    if (location.pathname === "/") {
      setMenuOpen(false);
      setTimeout(() => {
        smoothScrollToElement(`#${sectionId}`, 1.2, "power3.inOut", 80);
      }, 100);
    }
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:text-green-300 font-semibold transition-colors duration-300"
              : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-plants"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:text-green-300 font-semibold transition-colors duration-300"
              : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
          }
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:text-green-300 font-semibold transition-colors duration-300"
              : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:text-green-300 font-semibold transition-colors duration-300"
              : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:text-green-300 font-semibold transition-colors duration-300"
              : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
          }
        >
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-50 dark:bg-zinc-900 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xl sm:text-2xl font-bold text-green-700 dark:text-green-400 flex-shrink-0">
            <FaLeaf size={20} className="sm:text-2xl" />
            <Link
              to="/"
              className="hover:text-green-600 dark:hover:text-green-300 transition duration-300 hidden sm:inline"
              aria-label="Go to Home"
            >
              PlantCare
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8 lg:flex-1 lg:justify-center">
            <ul className="flex space-x-6 text-base md:text-lg font-medium dark:text-white">{navItems}</ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <SimpleThemeToggle />
            {!user ? (
              <div className="hidden sm:flex space-x-2 sm:space-x-3">
                <Link
                  to="/login"
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform font-medium"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-8 sm:w-9 h-8 sm:h-9 rounded-full ring-2 ring-green-400 object-cover"
                />
                <Link
                  to="/dashboard"
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base border-2 border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 font-medium"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn btn-ghost btn-circle text-red-500 dark:text-red-400 text-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300"
                  aria-label="Logout"
                  title="Logout"
                >
                  <FiLogOut />
                </button>
              </div>
            )}

            {/* Hamburger & Mobile Auth */}
            <div className="flex items-center gap-2 lg:hidden">
              {!user && (
                <Link
                  to="/login"
                  className="sm:hidden px-2 py-1.5 text-xs border border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 rounded hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 font-medium"
                >
                  Login
                </Link>
              )}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
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
        <ul className="space-y-2 px-4 text-base sm:text-lg font-medium dark:text-white">{navItems}</ul>

        {!user && (
          <div className="sm:hidden mt-4 pt-4 border-t border-green-400 px-4">
            <Link
              to="/signup"
              className="block w-full text-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg text-sm"
            >
              Register
            </Link>
          </div>
        )}

        {user && (
          <div className="mt-4 pt-4 border-t border-green-400 px-4">
            <div className="flex items-center gap-3 bg-green-50 dark:bg-zinc-800 p-3 rounded-lg shadow-sm mb-3">
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full ring-2 ring-green-400 object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                  {user.displayName || "User"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Logged in</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center px-3 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-all duration-300 text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
