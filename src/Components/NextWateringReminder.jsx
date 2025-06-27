
import { formatDistanceToNow, addDays, parseISO } from 'date-fns';
import { FaTint } from 'react-icons/fa';

const NextWateringReminder = ({ plantName, lastWateredDate, wateringIntervalDays }) => {
  const nextWateringDate = addDays(parseISO(lastWateredDate), wateringIntervalDays);
  const distance = formatDistanceToNow(nextWateringDate, { addSuffix: true });

  return (
    <div className="bg-white dark:bg-zinc-900 border border-green-200 dark:border-emerald-700 rounded-3xl shadow-lg shadow-green-200/40 dark:shadow-emerald-700/30 p-6">
      <h2 className="text-xl font-semibold text-green-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
        <FaTint className="text-green-600 dark:text-emerald-400" />
        {plantName}
      </h2>

      <p className="text-sm text-gray-700 dark:text-gray-300">
        Next watering is <span className="font-medium">{distance}</span>.
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
        Last watered: {new Date(lastWateredDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default NextWateringReminder;
