import { useEffect, useState } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import { setSocket } from "./features/socketSlice";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { sendMessage } from "./features/messageSlice";
import { axiosInstance } from "./utils/axiosConfig";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const [senderId, setSenderId] = useState();
  const [receiverId, setReceiverId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  useEffect(() => {
    //  if (authUser) {
    const socketIo = io(`http://localhost:5000`, {
      query: {
        userId: prompt("type ur id : "),
      },
    });
    console.log("====================================");
    console.log(socketIo);
    console.log("====================================");
    dispatch(setSocket(socketIo));
    //  socketio?.on("getOnlineUsers", (onlineUsers) => {
    //    dispatch(setOnlineUsers(onlineUsers));
    //  });
    //  return () => socketio.close();
    //  } else {
    //    if (socket) {
    //      socket.close();
    //      dispatch(setSocket(null));
    //    }
    //  }

    socketIo.on("newMessage", (data) => {
      console.log("======== newMessage data ===========");
      console.log(data);
      console.log("====================================");
    });
  }, []);
  const sendMessageFunc = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/messages/send/${senderId}`,
        {
          receiverId,
          message,
        }
      );
      console.log("==========send msg req passed============");
      console.log(response.data);
      console.log("====================================");
      setMessage("");
      setMessages((prev) => [...prev, message]);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response:", error.response);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
      } else {
        // Something else happened
        console.error("Error", error.message);
      }
      console.error("Error config:", error.config);
    }
  };
  return (
    <>
      <h1>Chat Application</h1>
      <label htmlFor="sender"> Sender ID :</label>
      <input
        className="p-4 py-2 border"
        id="sender"
        type="text"
        value={senderId}
        onChange={(e) => setSenderId(e.target.value)}
      />{" "}
      <br />
      <hr />
      <br />
      <label htmlFor="receiver"> Receiver ID :</label>
      <input
        className="p-4 py-2 border"
        id="receiver"
        type="text"
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
      />
      <br />
      <hr />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        className="p-4 py-2 border"
        id="message"
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="type your message here..."
      />
      <br />
      <hr />
      <br />
      <button
        className="px-12 py-2 bg-yellow-300"
        onClick={
          sendMessageFunc
          // send msg with axios :
          // dispatch(sendMessage({ senderId, receiverId, message }));
        }
      >
        send message
      </button>
      <div className="border p-8 bg-blue-400">
        <ul>
          {messages?.map((message, index) => {
            return (
              <li key={index}>
                <p>{message}</p>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
      <ChatComponent />
    </>
  );
}

export default App;
