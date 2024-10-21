import React from "react";
import Messages from "./Messages";
import { useSelector } from "react-redux";

function MessageContainer() {
  const { selectedUser, user, onlineUsers } = useSelector(
    (store) => store.user
  );

  return (
    <>
      <div className="flex flex-col h-full overflow-x-auto mb-4">
        {selectedUser !== null ? (
          <>
            <div className="flex flex-col h-full">
              {/* <AllMessages messages={messages} /> */}
              <Messages />
            </div>
          </>
        ) : (
          <div className="md:min-w-[550px] flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white font-bold">
              Hi,{user?.username}{" "}
            </h1>
            <h1 className="text-2xl text-white">Let's start conversation</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default MessageContainer;
