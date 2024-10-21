import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, setMessages } from "../features/messageSlice";

function SendInput() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser, user } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.message);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      dispatch(
        sendMessage({
          senderId: user?._id,
          receiverId: selectedUser._id,
          message,
        })
      );
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
    return () => socket?.off("newMessage");
  }, [setMessages, messages]);

  return (
    <>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-row items-center h-16 rounded-xl w-full px-4"
      >
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Send a message..."
              className="flex w-full bg-gray-50 border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </div>
        </div>
        <div className="ml-4">
          <button
            type="submit"
            className="flex items-center justify-center  rounded-xl text-white px-4 py-1 flex-shrink-0"
            style={{ backgroundColor: "#520035" }}
            // onClick={() => onSubmitHandler()}
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
      </form>
    </>
  );
}

export default SendInput;
