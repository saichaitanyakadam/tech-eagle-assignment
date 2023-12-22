import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Modal = ({ handleModal, handleCount }) => {
  const { data } = useContext(AppContext);
  const navigate = useNavigate();
  const handleHomeBtn = () => {
    handleModal(false);
    navigate("/");
  };
  const newData = data
    .map((item) => {
      return {
        ...item,
        endTime: (item.startTime + 400 / parseInt(item.speed)).toFixed(2),
      };
    })
    .sort((a, b) => a.endTime - b.endTime);
  console.log(newData);
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start flex-col w-full">
                  <div className="flex text-sm w-full">
                    <div className="flex-1 pl-2">Position</div>
                    <div className="flex-1 pl-2">Name</div>
                    <div className="flex-1 pl-2">Speed</div>
                    <div className="flex-1 pl-2">Start Time</div>
                    <div className="flex-1 pl-2">End Time</div>
                  </div>
                  <div className="w-full">
                    {newData.map((item, index) => (
                      <div
                        className="flex font-semibold bg-[#f4f3f1] py-2 my-2 w-full"
                        key={index}
                      >
                        <div className="flex-1 pl-2">{index + 1}</div>
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
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={() => {
                    handleModal(false);
                    handleCount(0);
                  }}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Restart Race
                </button>
                <button
                  onClick={handleHomeBtn}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
