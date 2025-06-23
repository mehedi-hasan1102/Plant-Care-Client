import { formatDistanceToNow, addDays, parseISO } from 'date-fns';
import { FaTint } from 'react-icons/fa';

const NextWateringReminder = ({ plantName, lastWateredDate, wateringIntervalDays }) => {
  const nextWateringDate = addDays(parseISO(lastWateredDate), wateringIntervalDays);
  const distance = formatDistanceToNow(nextWateringDate, { addSuffix: true });

  return (
    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
        <FaTint className="inline-block mr-2" />
        {plantName}
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Next watering is {distance}.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Last watered: {new Date(lastWateredDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default NextWateringReminder;
