import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/messageSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    messages: messageReducer,
    user: userReducer,
  },
});

export default store;
