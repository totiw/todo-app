const Activities = ({ activities }) => {
  return (
    <ul className="w-full overflow-auto max-h-[500px] flex flex-col gap-2">
      {activities.length ? (
        activities.map((activity, index) => (
          <li key={index} className="bg-red-600 rounded-md w-full py-4 capitalize text-center text-white font-semibold">
            {activity}
          </li>
        ))
      ) : (
        <p className="bg-red-600 rounded-md w-full p-2 text-center text-white font-semibold">No activities displayed</p>
      )}
    </ul>
  );
};

export default Activities;
