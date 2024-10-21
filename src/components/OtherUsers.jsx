import React from "react";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
import OtherUser from "./OtherUser";

function OtherUsers() {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers)
    return (
      <p className="text-lg text-gray-700 font-semibold">
        There Is No Users Yet !
      </p>
    );
  return (
    <>
      <div>OtherUsers</div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          {otherUsers?.map((user) => {
            return <OtherUser key={user._id} user={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default OtherUsers;
