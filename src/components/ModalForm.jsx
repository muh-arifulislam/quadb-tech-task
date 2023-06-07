import React, { useState } from "react";
import { addToCart } from "../fakeDb";
const ModalForm = ({ data, openModal, setOpenModal }) => {
  const { show } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(show.id);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        !openModal && "hidden"
      }`}
      style={{ backgroundColor: "rgba(149,165,160,0.8)" }}
    >
      <div className="w-full lg:max-w-xl md:max-w-lg max-w-xs">
        <div className="w-full max-w-xl ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={show?.name}
                disabled
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-[20px]">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="date"
                  placeholder="Username"
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={show.id}
                  disabled
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-[15px]">
              <button
                onClick={() => setOpenModal(!openModal)}
                className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                cancel
              </button>
              <input
                onClick={() => setOpenModal(!openModal)}
                className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                type="submit"
                value="confirm"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
