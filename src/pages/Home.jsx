import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { data, setData } = useContext(AppContext);
  const [startTime, setStartTime] = useState(0);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState(0);
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleSpeedInput = (e) => {
    setSpeed(e.target.value);
  };
  const handleStartTimeInput = (e) => {
    setStartTime(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.length < 10) {
      setData((prev) => [
        ...prev,
        { name, speed, startTime, endTime: 0, dist: 0 },
      ]);
    }
    setName("");
    setSpeed(0);
  };

  const handleStartRace = () => {
    navigate("/race-track");
  };
  return (
    <div className="bg-[#eeeae7] min-h-screen w-full p-8 flex gap-5">
      <div className="w-[20vw] p-5 bg-[#dbd5d0] self-start">
        <h2 className="font-bold text-2xl">RUNNER DETAILS</h2>
        <p className="text-[0.7rem]">*You can add maximum 10 paritcipants</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-xs font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-white h-[40px] p-2 outline-none"
            onChange={handleNameInput}
            value={name}
          />
          <label htmlFor="speed" className="text-xs font-semibold">
            Speed
          </label>
          <input
            id="speed"
            type="number"
            className="bg-white h-[40px] p-2 outline-none"
            value={speed}
            onChange={handleSpeedInput}
          />
          <label htmlFor="startTime" className="text-xs font-semibold">
            Start Time
          </label>
          <input
            id="startTime"
            type="number"
            className="bg-white h-[40px] p-2 outline-none"
            value={startTime}
            onChange={handleStartTimeInput}
          />
          <button
            type="submit"
            className="bg-black text-white self-start px-5 py-2 mt-3"
          >
            + ADD RUNNER
          </button>
        </form>
      </div>
      <div className="bg-white w-[80vw] p-5 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-2xl">LIST OF PARTICIPANTS</h2>
          <div className="flex text-sm">
            <div className="flex-1 pl-2">Name</div>
            <div className="flex-1 pl-2">Speed</div>
            <div className="flex-1 pl-2">Start Time</div>
            <div className="flex-1 pl-2">End Time</div>
          </div>
          <div>
            {data.map((item, index) => (
              <div
                className="flex font-semibold bg-[#f4f3f1] py-2 my-2"
                key={index}
              >
                <div className="flex-1 pl-2">{item.name}</div>
                <div className="flex-1 pl-2">{item.speed} KM/H</div>
                <div className="flex-1 pl-2">
                  {item.starTime ? item.starTime : "-"}
                </div>
                <div className="flex-1 pl-2">
                  {item.endTime ? item.endTime : "-"}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <hr className="border-gray-300" />
          <button
            type="button"
            className="bg-[#e7482a] text-white py-2 px-5 self-end"
            onClick={handleStartRace}
          >
            Start Race
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
