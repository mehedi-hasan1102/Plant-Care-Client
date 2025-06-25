import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-100 dark:bg-gray-800 p-5 space-y-4">
        <h2 className="text-xl font-bold text-green-700 dark:text-white mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-300'}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/all-items" className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-300'}>
            All Items
          </NavLink>
          <NavLink to="/dashboard/add-item" className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-300'}>
            Add Item
          </NavLink>
          <NavLink to="/dashboard/my-items" className={({ isActive }) => isActive ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-300'}>
            My Items
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
