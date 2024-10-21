import React from "react";
import backgroundImage from "../images/twzbg.jpg";
import ProfileSection from "./ProfileSection";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import SendInput from "./SendInput";

const ChatComponent = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // -webkit-transform: "scaleX(-1)",
    // transform: "scaleX(-1)",
  };
  
  return (
    <div
      className="flex h-screen w-full antialiased text-gray-800"
      style={backgroundImageStyle}
    >
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* ::::::::::::::::::: */}
        <div
          className="flex flex-col py-8 pl-6 pr-2 w-64 flex-shrink-0"
          // style={{ backgroundColor: "#520035" }}
        >
          {/* ProfileSection here */}
          <ProfileSection />
          {/* OtherUsers here */}
          <Sidebar />
        </div>

        {/* ::::::::::::::::: */}
        <div className="flex flex-col flex-auto h-full p-6 ">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {/* MessagesContainer here*/}
            {/* SendInput here */}

            <MessageContainer />
            <SendInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
