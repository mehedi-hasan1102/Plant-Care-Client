import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import {
  MdOutlineDashboard,
  MdOutlineListAlt,
  MdOutlineAddBox,
  MdOutlineInventory,
  MdOutlinePerson,
  MdHome,
} from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import Switch from "../Components/DarkModeSidebar";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900 transition">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-white dark:bg-gray-900 border-r-2 border-green-400 p-4 flex flex-col justify-between transition-all duration-300`}
      >
        {/* Top: Logo + Collapse */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-green-700 dark:text-green-300"
            >
              <FaLeaf size={24} />
              {!collapsed && (
                <span className="text-xl font-bold tracking-wide">PlantCare</span>
              )}
            </Link>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-green-600 dark:text-green-300 text-lg"
              aria-label="Toggle sidebar"
            >
              {collapsed ? "»" : "«"}
            </button>
          </div>

          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-green-100 dark:hover:bg-green-700 mb-2 ${
                isActive
                  ? "bg-green-200 dark:bg-green-700 font-semibold text-green-700 dark:text-green-300"
                  : "text-gray-800 dark:text-white"
              }`
            }
          >
            <MdHome size={20} />
            {!collapsed && "Home"}
          </NavLink>

          {/* Dashboard Navigation */}
          <nav className="space-y-3">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-green-100 dark:hover:bg-green-700 ${
                  isActive
                    ? "bg-green-200 dark:bg-green-700 font-semibold text-green-700 dark:text-green-300"
                    : "text-gray-800 dark:text-white"
                }`
              }
            >
              <MdOutlineDashboard size={20} />
              {!collapsed && "Overview"}
            </NavLink>

            <NavLink
              to="/dashboard/all-plants"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-green-100 dark:hover:bg-green-700 ${
                  isActive
                    ? "bg-green-200 dark:bg-green-700 font-semibold text-green-700 dark:text-green-300"
                    : "text-gray-800 dark:text-white"
                }`
              }
            >
              <MdOutlineListAlt size={20} />
              {!collapsed && "All Plants"}
            </NavLink>

            <NavLink
              to="/dashboard/add-plant"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-green-100 dark:hover:bg-green-700 ${
                  isActive
                    ? "bg-green-200 dark:bg-green-700 font-semibold text-green-700 dark:text-green-300"
                    : "text-gray-800 dark:text-white"
                }`
              }
            >
              <MdOutlineAddBox size={20} />
              {!collapsed && "Add Plant"}
            </NavLink>

            <NavLink
              to="/dashboard/my-plants"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-green-100 dark:hover:bg-green-700 ${
                  isActive
                    ? "bg-green-200 dark:bg-green-700 font-semibold text-green-700 dark:text-green-300"
                    : "text-gray-800 dark:text-white"
                }`
              }
            >
              <MdOutlineInventory size={20} />
              {!collapsed && "My Plants"}
            </NavLink>

            <NavLink
              to="/dashboard/user-profile"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-green-100 dark:hover:bg-green-700 ${
                  isActive
                    ? "bg-green-200 dark:bg-green-700 font-semibold text-green-700 dark:text-green-300"
                    : "text-gray-800 dark:text-white"
                }`
              }
            >
              <MdOutlinePerson size={20} />
              {!collapsed && "User Profile"}
            </NavLink>
          </nav>
        </div>

        {/* Bottom: Theme Toggle */}
        <div className="pt-4 border-t border-green-300 dark:border-green-600 flex justify-center">
          {!collapsed && <Switch />}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
