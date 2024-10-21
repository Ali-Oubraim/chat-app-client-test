import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();
  const { user, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      {/* the sender message */}
      {message?.sender == user?._id ? (
        <div ref={scroll} className="col-start-6 col-end-13 p-3 rounded-lg">
          <div className="flex items-center justify-start flex-row-reverse">
            <div className="flex text-xs  items-center justify-center h-10 w-10 rounded-full bg-pink-200 flex-shrink-0">
              {message?.senderType}
            </div>
            <div className="relative mr-3 text-sm bg-purple-200 py-2 px-4 shadow rounded-xl">
              <div className="text-start">{message?.content}</div>
            </div>
          </div>
        </div>
      ) : (
        // {/* Received message */}
        <div ref={scroll} className="col-start-1 col-end-8 p-3 rounded-lg">
          <div className="flex flex-row items-center">
            <div className="flex text-xs items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
              {message?.senderType}
            </div>
            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
              <div className="text-start">{message?.content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
