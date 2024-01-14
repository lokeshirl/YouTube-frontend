import React from "react";

const LiveChat = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[400px] h-[400px] ml-2 p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        <ul className="space-y-1">
          <li className="flex items-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
            <span className="text-sm font-bold capitalize"> General </span>
            <span className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <form className="w-full flex justify-between">
          <input type="text" className="border border-black w-3/4" />
          <button className="bg-blue-500 text-white hover:bg-gray-400 w-3/12 p-1 rounded-md">
            comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
