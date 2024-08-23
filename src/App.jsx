import { useEffect, useState } from "react";
import "./App.css";
import { setSocket } from "./features/socketSlice";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import axios from "axios";
import AllMessages from "./components/AllMessages";

function App() {
  const dispatch = useDispatch();
  const [senderId, setSenderId] = useState(null); // Initially set to null to avoid undefined issue
  const [receiverId, setReceiverId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let tempId = prompt("type ur id:");
    setSenderId(tempId);

    if (tempId) {
      const socketIo = io(`http://localhost:5000`, {
        query: { userId: tempId },
      });
      console.log("Socket connection established", socketIo);
      dispatch(setSocket(socketIo));

      socketIo.on("newMessage", (data) => {
        console.log("New message received:", data);
        setMessages((prev) => [...prev, data]);
      });

      return () => {
        socketIo.disconnect(); // Clean up the socket connection when component unmounts
      };
    }
  }, [dispatch]);

  const sendMessageFunc = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/messages/send/${senderId}`,
        {
          receiverId,
          message,
        }
      );
      console.log("Message sent successfully:", response.data);
      setMessage("");
      // setMessages((prev) => [...prev, response.data?.newMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <h1>Chat Application</h1>
      <label htmlFor="sender">Sender ID:</label>
      <input
        className="p-4 py-2 border"
        id="sender"
        type="text"
        value={senderId || ""}
        onChange={(e) => setSenderId(e.target.value)}
        readOnly // Make it read-only if you don't want it to change after setting initially
      />{" "}
      <br />
      <hr />
      <br />
      <label htmlFor="receiver">Receiver ID:</label>
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
      <button className="px-12 py-2 bg-yellow-300" onClick={sendMessageFunc}>
        Send Message
      </button>{" "}
      <div className="grid grid-cols-12 gap-y-2">
        {messages.map((msg, i) => {
          return msg.sender == senderId ? (
            <div key={i} className="col-start-6 col-end-13 p-3 rounded-lg">
              <div className="flex items-center justify-start flex-row-reverse">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-200 flex-shrink-0">
                  Me
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
                  Other
                </div>
                <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                  <div className="text-start">{msg?.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Conditional rendering ensures AllMessages is rendered only when senderId is available */}
    </>
  );
}

export default App;
