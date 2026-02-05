
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
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Sidebar - Mobile Toggle Button */}
      <div className="lg:hidden bg-white dark:bg-zinc-900 border-b border-emerald-200 dark:border-emerald-800 p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-emerald-600 dark:text-emerald-400 text-2xl font-bold p-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 rounded-md transition"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-72"
        } ${collapsed || window.innerWidth < 1024 ? "absolute lg:relative" : ""} bg-white dark:bg-zinc-900 border-r border-emerald-200 dark:border-emerald-800 flex flex-col justify-between transition-all duration-300 shadow-lg hidden lg:flex z-50 lg:z-auto`}
      >
        {/* Top: Logo + Collapse */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:opacity-80 transition"
            >
              <FaLeaf size={26} />
              {!collapsed && (
                <span className="text-2xl font-bold tracking-tight select-none">
                  PlantCare
                </span>
              )}
            </Link>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-emerald-600 dark:text-emerald-400 text-lg font-bold select-none hover:bg-emerald-100 dark:hover:bg-emerald-900/30 p-1 rounded-md transition"
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
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium mb-2 ${
                isActive
                  ? "bg-emerald-600 dark:bg-emerald-600 text-white shadow-lg hover:shadow-xl"
                  : "text-gray-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
              }`
            }
          >
            <MdHome size={22} />
            {!collapsed && "Home"}
          </NavLink>

          {/* Dashboard Navigation */}
          <div className="mt-4">
            {!collapsed && (
              <p className="text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wide px-4 mb-3">
                Dashboard
              </p>
            )}
            <nav className="space-y-2">
              {navItems.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                      isActive
                        ? "bg-emerald-600 dark:bg-emerald-600 text-white shadow-lg hover:shadow-xl"
                        : "text-gray-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                    }`
                  }
                >
                  {icon}
                  {!collapsed && label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom: Theme Toggle */}
        <div className="p-6 border-t border-emerald-200 dark:border-emerald-800">
          {!collapsed && <Switch />}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-zinc-900 text-gray-900 dark:text-zinc-200 transition-colors duration-300 w-full">
        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
