
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Provider/AuthProvider";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ total: 0, mine: 0 });

  useEffect(() => {
    fetch("https://project-web-b11-a10-plant-care-serv.vercel.app/plants")
      .then(res => res.json())
      .then(data => {
        const myItems = data.filter(item => item.email === user.email); // ✅ Fixed
        setStats({ total: data.length, mine: myItems.length });
      });
  }, [user.email]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-lg">Total Plants</h3>
          <p className="text-3xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-lg">My Plants</h3>
          <p className="text-3xl font-bold">{stats.mine}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
