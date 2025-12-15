
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

  const navItems = [
    { to: "/dashboard", label: "Overview", icon: <MdOutlineDashboard size={20} /> },
    { to: "/dashboard/all-plants", label: "All Plants", icon: <MdOutlineListAlt size={20} /> },
    { to: "/dashboard/add-plant", label: "Add Plant", icon: <MdOutlineAddBox size={20} /> },
    { to: "/dashboard/my-plants", label: "My Plants", icon: <MdOutlineInventory size={20} /> },
    { to: "/dashboard/user-profile", label: "User Profile", icon: <MdOutlinePerson size={20} /> },
  ];

  return (
    <div className="min-h-screen flex  transition-colors duration-300">
      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } border-r-1 border-green-300 dark:border-emerald-700 p-4 flex flex-col justify-between transition-all duration-300`}
      >
        {/* Top: Logo + Collapse */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-green-700 dark:text-emerald-400"
            >
              <FaLeaf size={24} />
              {!collapsed && (
                <span className="text-xl font-bold tracking-wide select-none">
                  PlantCare
                </span>
              )}
            </Link>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-green-600 dark:text-emerald-400 text-lg font-bold select-none"
              aria-label="Toggle sidebar"
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? "»" : "«"}
            </button>
          </div>

          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-green-100 dark:hover:bg-emerald-700 mb-2 ${
                isActive
                  ? "bg-green-200 dark:bg-emerald-700 font-semibold text-green-700 dark:text-emerald-300"
                  : "text-gray-800 dark:text-zinc-300"
              }`
            }
          >
            <MdHome size={20} />
            {!collapsed && "Home"}
          </NavLink>

          {/* Dashboard Navigation */}
          <nav className="space-y-3">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-green-100 dark:hover:bg-emerald-700 ${
                    isActive
                      ? "bg-green-200 dark:bg-emerald-700 font-semibold text-green-700 dark:text-emerald-300"
                      : "text-gray-800 dark:text-zinc-300"
                  }`
                }
              >
                {icon}
                {!collapsed && label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom: Theme Toggle */}
        <div className="pt-4 border-t border-green-300 dark:border-emerald-700 flex justify-center">
          {!collapsed && <Switch />}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto  text-gray-900 dark:text-zinc-200 transition-colors duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
