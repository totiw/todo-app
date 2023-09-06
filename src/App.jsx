import { useState } from "react";
import Activities from "./Activities";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";

function App() {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activities.includes(activity)) {
      alert("Activity already exist");
      setActivity("");
    } else if (activity === "" || activity.replace(/\s+/g, "").length == 0) {
      alert("Please input an activity");
      setActivity("");
    } else {
      setActivities([...activities, activity]);
      setActivity("");
    }
  };

  const handleChange = (e) => {
    setActivity(e.target.value);
  };
  return (
    <main className="w-screen h-screen flex flex-row justify-center items-center xl:p-0 p-5">
      <div className="bg-blue-400 w-full md:w-1/2 xl:w-1/3 flex flex-col gap-5 p-10 rounded-md">
        <div className="w-full flex flex-col justify-center items-center gap-3 text-white">
          <AiTwotoneEdit size="2em" />
          <h1 className="text-4xl font-semibold mb-5 text-center">TODO LIST APP</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between gap-2">
          <input
            type="text"
            value={activity}
            onChange={handleChange}
            placeholder="Input my activity"
            className="grow border p-2 rounded-md"
          />
          <button className="bg-green-700 flex flex-row justify-center md:justify-start items-center gap-1 p-2 px-5 rounded-md text-white font-semibold">
            Add Activity <BiSolidAlarmAdd size="1em" />
          </button>
        </form>
        <Activities activities={activities} />
      </div>
    </main>
  );
}

export default App;
