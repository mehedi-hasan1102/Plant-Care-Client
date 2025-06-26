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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-green-600 dark:hover:text-green-400 ${
              isActive ? "text-green-700 dark:text-green-300 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-plants"
          className={({ isActive }) =>
            `hover:text-green-600 dark:hover:text-green-400 ${
              isActive ? "text-green-700 dark:text-green-300 font-semibold" : ""
            }`
          }
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-green-600 dark:hover:text-green-400 ${
              isActive ? "text-green-700 dark:text-green-300 font-semibold" : ""
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-green-600 dark:hover:text-green-400 ${
              isActive ? "text-green-700 dark:text-green-300 font-semibold" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `hover:text-green-600 dark:hover:text-green-400 ${
              isActive ? "text-green-700 dark:text-green-300 font-semibold" : ""
            }`
          }
        >
          Support
        </NavLink>
      </li>

      <hr className=" border-green-800" />

      {user && (
        <li className="lg:hidden">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `hover:text-green-600 dark:hover:text-green-400 btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600 ${
                isActive
                  ? "btn btn-outline  text-green-700 dark:text-green-300 font-semibold  dark:hover:bg-green-600"
                  : ""
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b-2 border-green-400 backdrop-blur-xl shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex  items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400 flex-shrink-0">
            <FaLeaf aria-hidden="true" />
            <Link
              to="/"
              className="hover:text-green-600 dark:hover:text-green-300 transition hidden md:flex"
              data-tooltip-id="tooltip-logo"
              data-tooltip-content="PlantCare Home"
              aria-label="Go to PlantCare Home"
            >
              PlantCare
            </Link>
            <Tooltip id="tooltip-logo" place="bottom" effect="solid" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8 lg:flex-1 lg:justify-center">
            <ul className="flex space-x-8 text-lg font-medium dark:text-white">
              {navItems}
            </ul>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            <Switch />

            {!user ? (
              <div className="flex space-x-3">
                <Link
                  to="/login"
                  className="btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ">
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User Avatar"}
                  className="w-9 h-9 rounded-full ring-2 ring-green-400 cursor-pointer"
                  data-tooltip-id="tooltip-user"
                  data-tooltip-content={user.displayName || "User"}
                />
                <Tooltip id="tooltip-user" place="bottom" effect="solid" />

                {/* ✅ Dashboard Button for Large Screens */}
                <Link
                  to="/dashboard"
                  className="hidden lg:inline-flex btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600"
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
                <Tooltip id="tooltip-logout" place="bottom" effect="solid" />
              </div>
            )}

            {/* Mobile Toggle Button */}
            <div className="lg:hidden ml-1">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white dark:bg-gray-900 border-t border-green-400 overflow-hidden transition-all duration-300 ease-in-out ${
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
