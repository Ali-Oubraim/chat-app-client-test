import React from "react";
import backgroundImage from "../images/twzbg.jpg";
import logo from "../images/logo.png";
import AllMessages from "./AllMessages";

const ChatComponent = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="flex h-screen antialiased text-gray-800"
      style={backgroundImageStyle}
    >
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* ::::::::::::::::::: */}
        <div
          className="flex flex-col py-8 pl-6 pr-2 w-64 flex-shrink-0"
          style={{ backgroundColor: "#520035" }}
        >
          <div className="flex flex-row items-center justify-center h-12 w-full ">
            <img src={logo} alt="logo" className="" />
          </div>
          {/* ::::: */}
          <div
            className="flex flex-col items-center border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
            style={{ backgroundColor: "#421030" }}
          >
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="text-sm font-semibold mt-2 text-white">
              Aminos Co.
            </div>
            <div className="text-xs text-gray-300">Lead UI/UX Designer</div>
            <div className="flex flex-row items-center mt-3">
              <div className="flex flex-col justify-center h-4 w-8 bg-white rounded-full">
                <div className="h-3 w-3 bg-purple-500 rounded-full self-end mr-1"></div>
              </div>
              <div className="leading-none ml-1 text-xs text-white">Active</div>
            </div>
          </div>
          {/* ::::: */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs text-white">
              <span className="font-bold">Active Conversations</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full text-black">
                4
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              <button className="flex flex-row items-center hover:bg-gray-100 group rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  H
                </div>
                <div className="ml-2 text-sm font-semibold text-white  group-hover:text-black">
                  Henry Boyd
                </div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 group rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  M
                </div>
                <div className="ml-2 text-sm font-semibold text-white group-hover:text-black">
                  Marta Curtis
                </div>
                <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  2
                </div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 group rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                  P
                </div>
                <div className="ml-2 text-sm font-semibold text-white group-hover:text-black">
                  Philip Tucker
                </div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 group rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                  C
                </div>
                <div className="ml-2 text-sm font-semibold text-white group-hover:text-black">
                  Christine Reid
                </div>
              </button>
              <button className="flex flex-row items-center hover:bg-gray-100 group rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
                  J
                </div>
                <div className="ml-2 text-sm font-semibold text-white group-hover:text-black">
                  Jerry Guzman
                </div>
              </button>
            </div>
            <div className="flex flex-row items-center justify-between text-xs mt-6 text-white">
              <span className="font-bold">Archived</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full text-black">
                7
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2">
              <button className="flex flex-row items-center hover:bg-gray-100 group rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  H
                </div>
                <div className="ml-2 text-sm font-semibold text-white group-hover:text-black">
                  Henry Boyd
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ::::::::::::::::: */}
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <AllMessages />
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <button
                  className="flex items-center justify-center  rounded-xl text-white px-4 py-1 flex-shrink-0"
                  style={{ backgroundColor: "#520035" }}
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
