import React, { useEffect } from "react";

const Message = ({ messages, userId }) => {
  useEffect(() => {
    // scroll to bottom of the chat on new message
    // const chat = document.getElementById("chat");
    // chat.scrollTop = chat.scrollHeight;
    console.log("======messages from Message.jsx===========");
    console.log({ userId: userId?.userId });
    console.log(messages);
    console.log("====================================");
  }, []);
  return (
    <>
      {/* the sender message */}
      {messages.map((msg, i) => {
        return msg.sender == userId?.userId ? (
          <div key={i} className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-200 flex-shrink-0">
                Inf
              </div>
              <div className="relative mr-3 text-sm bg-purple-200 py-2 px-4 shadow rounded-xl">
                <div className="text-start">{msg?.content}</div>
                {/* <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                  Seen
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          //   {/* Received message */}
          <div key={i} className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                Br
              </div>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div className="text-start">{msg?.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Message;
