import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Modal from "../components/Modal";
// import { useNavigate } from "react-router-dom";

const RaceTrack = () => {
  const { data } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  // const navigate = useNavigate();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (data.every((item) => item.speed * newCount * 0.2778 >= 400)) {
          clearInterval(intervalId);
          setModal(true);
        }

        return newCount;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data, modal]);

  return (
    <div className="bg-[#afa39e] h-screen w-full flex flex-col gap-5 items-center justify-center">
      <h2 className="text-2xl font-semibold ">Counter</h2>
      <p>{count} Secs</p>
      {data.map((item, index) => (
        <div className="w-[60%] flex flex-col justify-center">
          <label
            htmlFor="disabled-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
          >
            {item.name}
          </label>
          <input
            id="disabled-range"
            type="range"
            value={item.speed * count * 0.2778}
            min={0}
            max={400}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mx-auto"
            disabled
          />
        </div>
      ))}
      {modal && <Modal handleModal={setModal} handleCount={setCount} />}
    </div>
  );
};

export default RaceTrack;
