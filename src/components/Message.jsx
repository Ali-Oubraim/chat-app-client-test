import React from "react";

const Message = ({ messages = [] }) => {
  return (
    <>
      {/* the sender message */}
      {messages.map((msg, i) => {
        return msg.sender == "B" ? (
          <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-200 flex-shrink-0">
                B
              </div>
              <div className="relative mr-3 text-sm bg-purple-200 py-2 px-4 shadow rounded-xl">
                <div className="text-start">{msg.message}</div>
                {/* <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                  Seen
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          //   {/* Received message */}
          <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                A
              </div>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div className="text-start">{msg.message}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Message;
