import { useEffect, useState } from "react";
import "./App.css";
import { setSocket } from "./features/socketSlice";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ChatComponent from "./components/ChatComponent";
import AllMessages from "./components/AllMessages";
import {
  setSenderId,
  setReceiverId,
  fetchMessages,
} from "./features/messageSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatComponent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const dispatch = useDispatch();
  // const [senderId, setSenderId] = useState(null); // Initially set to null to avoid undefined issue
  // const [receiverId, setReceiverId] = useState();
  const { user } = useSelector((state) => state.user);
  // const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // let tempId = prompt("type ur id:");

    if (user) {
      const socketIo = io(`http://localhost:5000`, {
        query: { userId: user?._id },
      });
      console.log("Socket connection established", socketIo);
      dispatch(setSocket(socketIo));

      // socketIo.on("newMessage", (data) => {
      //   console.log("New message received:", data);
      //   // setMessages((prev) => [...prev, data]);
      // });

      return () => {
        socketIo.disconnect(); // Clean up the socket connection when component unmounts
      };
    }
  }, [dispatch, user]);
  // useEffect(() => {
  //   if (senderId && receiverId) {
  //     dispatch(fetchMessages(senderId, receiverId));
  //   }
  // }, [senderId, receiverId]);

  // console.log(messages);

  //
  // const sendMessageFunc = async () => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:5000/api/messages/send/${senderId}`,
  //       {
  //         receiverId,
  //         message,
  //       }
  //     );
  //     console.log("Message sent successfully:", response.data);
  //     setMessage("");
  //     // setMessages((prev) => [...prev, response.data?.newMessage]);
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //   }
  // };

  return (
    <>
      <h1>Chat Application</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
