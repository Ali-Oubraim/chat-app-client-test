import React from "react";
import { useSelector } from "react-redux";

function ProfileSection() {
  const {  user } = useSelector((store) => store.user);

  return (
    <>
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
          {user?.type != "brand"
            ? `${user?.first_name?.toUpperCase()} ${user?.last_name?.toUpperCase()}`
            : `${user?.username?.toUpperCase()}`}
        </div>
        <div className="text-xs text-gray-300 py-2">
          {" "}
          {user?.type != "brand"
            ? `${user?.bio}`
            : `${user?.brandName} ${user?.sector}`}
        </div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-col justify-center h-4 w-8 bg-white rounded-full">
            <div className="h-3 w-3 bg-purple-500 rounded-full self-end mr-1"></div>
          </div>
          <div className="leading-none ml-1 text-xs text-white">Active</div>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
