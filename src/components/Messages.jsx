import React from "react";
import useGetMessages from "../hooks/useGetMessages";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";
import { useSelector } from "react-redux";
import Message from "./Message";

function Messages() {
  useGetMessages();
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.message);
  return (
    <>
      {messages &&
        messages?.map((message) => {
          return <Message key={message?._id} message={message} />;
        })}
    </>
  );
}

export default Messages;
