import React from "react";
import Message from "./Message";

const AllMessages = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-y-2">
        <Message
          message={{
            sender: "B",
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?",
            sent: true,
          }}
        />
      </div>
    </>
  );
};

export default AllMessages;
