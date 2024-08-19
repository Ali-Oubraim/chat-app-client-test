import { useEffect } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import { setSocket } from "./features/socketSlice";
import io from "socket.io-client";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch(); 
  useEffect(() => {
    //  if (authUser) {
    const socketio = io(`http://localhost:5000`, {
      query: {
        userId: "666c1c089a308c5fdb3169a6",
      },
    });
    dispatch(setSocket(socketio));
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
  }, []);
  return (
    <>
      <ChatComponent />
    </>
  );
}

export default App;
