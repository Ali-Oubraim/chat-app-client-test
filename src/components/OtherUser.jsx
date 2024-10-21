import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../features/userSlice";

function OtherUser({ user }) {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(user._id);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <button
      onClick={() => selectedUserHandler(user)}
      className="flex flex-row items-center bg-gray-300 hover:bg-gray-100 group rounded-xl p-2"
    >
      <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
        {selectedUser?.username?.split("")[0].toUpperCase()}
      </div>
      <div className="ml-2 text-sm font-semibold text-gray-800 group-hover:text-black">
        {selectedUser?.username}
      </div>
    </button>
  );
}

export default OtherUser;
