import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useDispatch } from "react-redux";
import { fetchMessages } from "../features/messageSlice";

const AllMessages = ({ messages, userId }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  useEffect(() => {
    console.log("======userId from useEffect AllMsg.jsx============");
    console.log(userId);
    setId(userId); // Set id to userId whenever it changes in useEffect hook. This will help in re-rendering the component with the new userId.
    console.log("====================================");
  }, [userId]);
  useEffect(() => {
    dispatch(fetchMessages(userId,))
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-y-2">
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {/* <Message messages={messages} userId={id} /> */}
      </div>
    </>
  );
};

export default AllMessages;
