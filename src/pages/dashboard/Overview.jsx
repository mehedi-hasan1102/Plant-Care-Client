import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../context/firebase/firebase.config";
import { motion as Motion } from "framer-motion";
import { BorderBeam } from "@stianlarsen/border-beam";
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LineChart, Line } from "recharts";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const numberPulse = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.6, ease: "easeInOut" },
  },
};

const Overview = () => {
  const [user] = useAuthState(auth);
  const [stats, setStats] = useState({ total: 0, mine: 0, categories: {} });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch("https://project-web-b11-a10-plant-care-serv.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        const myPlants = data.filter((item) => item.email === user.email);
        
        // Count categories
        const categoryCount = {};
        data.forEach((plant) => {
          categoryCount[plant.category] = (categoryCount[plant.category] || 0) + 1;
        });
        
        // Prepare chart data
        const chartDataArray = Object.entries(categoryCount).map(([name, value]) => ({
          name,
          value,
          mine: myPlants.filter(p => p.category === name).length,
        }));
        
        setStats({ total: data.length, mine: myPlants.length, categories: categoryCount });
        setChartData(chartDataArray);
      });
  }, [user?.email]);

  const COLORS = ["#10b981", "#0ea5e9", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#06b6d4", "#14b8a6"];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <Motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-950 dark:to-emerald-900 rounded-3xl shadow-xl p-10 text-white"
      >
        <h1 className="text-5xl font-black mb-3 tracking-tight">Welcome back, {user?.displayName || "User"}! 👋</h1>
        <p className="text-emerald-100 text-lg font-light leading-relaxed">Track, manage, and nurture your plants with precision and care</p>
      </Motion.div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Avatar Card */}
        <Motion.div
          className="relative rounded-3xl bg-white dark:bg-zinc-800/80 backdrop-blur-sm p-8 shadow-lg border border-emerald-100 dark:border-emerald-900/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
        >
          <BorderBeam size={120} duration={8} thickness={8} colorFrom="#10b981" colorTo="#059669" />
          <div className="relative text-center">
            <div className="w-32 h-32 mx-auto mb-5 relative">
              <Motion.img
                src={user?.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"}
                alt="User Avatar"
                className="w-full h-full rounded-full border-4 border-emerald-500 dark:border-emerald-400 object-cover shadow-lg group-hover:shadow-2xl transition-all"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <span className="absolute -top-2 -right-2 bg-emerald-600 dark:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                ✅ Active
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              {user?.displayName || "Anonymous"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 break-all font-medium">{user?.email}</p>
          </div>
        </Motion.div>

        {/* Total Plants Card */}
        <Motion.div
          className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-900/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
        >
          <BorderBeam size={120} duration={8} thickness={8} colorFrom="#0ea5e9" colorTo="#0284c7" />
          <div className="relative">
            <div className="text-6xl mb-5 group-hover:scale-125 transition-transform duration-300">🌿</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Global Ecosystem</p>
            <Motion.p
              className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2 tracking-tight"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={numberPulse}
            >
              {stats.total}
            </Motion.p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Plants available in system</p>
          </div>
        </Motion.div>

        {/* My Plants Card */}
        <Motion.div
          className="relative bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
        >
          <BorderBeam size={120} duration={8} thickness={8} colorFrom="#10b981" colorTo="#059669" />
          <div className="relative">
            <div className="text-6xl mb-5 group-hover:scale-125 transition-transform duration-300">🪴</div>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Your Collection</p>
            <Motion.p
              className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-2 tracking-tight"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={numberPulse}
            >
              {stats.mine}
            </Motion.p>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Plants in your collection</p>
          </div>
        </Motion.div>
      </div>

      {/* Quick Actions */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 dark:border-zinc-700 p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">Quick Actions</h2>
        <div className="flex gap-3 flex-wrap">
          <Link
            to="/dashboard/add-plant"
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform inline-block text-sm"
          >
            ➕ Add Plant
          </Link>
          <Link
            to="/dashboard/my-plants"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform inline-block text-sm"
          >
            📋 My Plants
          </Link>
        </div>
      </Motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Plants by Category - Bar Chart */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 dark:border-zinc-700 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">📊 Plants by Category</h3>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: "13px", fontWeight: "500" }} />
                <YAxis stroke="#6b7280" style={{ fontSize: "13px" }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #10b981", borderRadius: "12px", color: "#fff", fontSize: "13px" }}
                  cursor={{ fill: "rgba(16, 185, 129, 0.1)" }}
                />
                <Legend wrapperStyle={{ fontSize: "13px", fontWeight: "500" }} />
                <Bar dataKey="value" fill="#10b981" name="Total Plants" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-12 text-sm">No data available</p>
          )}
        </Motion.div>

        {/* Plant Distribution - Pie Chart */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 dark:border-zinc-700 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">🥧 Distribution Overview</h3>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #10b981", borderRadius: "12px", color: "#fff", fontSize: "13px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-12 text-sm">No data available</p>
          )}
        </Motion.div>
      </div>

      {/* Statistics Summary */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-zinc-800/80 dark:to-zinc-800/50 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200 dark:border-zinc-700 p-10"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">📈 Collection Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-700/80 rounded-2xl p-6 shadow-sm border border-emerald-100 dark:border-emerald-900/30">
            <p className="text-gray-600 dark:text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-75">Total Ecosystem</p>
            <p className="text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">{stats.total}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-2">plants in system</p>
          </div>
          <div className="bg-white dark:bg-zinc-700/80 rounded-2xl p-6 shadow-sm border border-blue-100 dark:border-blue-900/30">
            <p className="text-gray-600 dark:text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-75">Your Plants</p>
            <p className="text-5xl font-black text-blue-600 dark:text-blue-400 tracking-tight">{stats.mine}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-2">in your collection</p>
          </div>
          <div className="bg-white dark:bg-zinc-700/80 rounded-2xl p-6 shadow-sm border border-purple-100 dark:border-purple-900/30">
            <p className="text-gray-600 dark:text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3 opacity-75">Categories</p>
            <p className="text-5xl font-black text-purple-600 dark:text-purple-400 tracking-tight">{chartData.length}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-2">different types</p>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default Overview;
