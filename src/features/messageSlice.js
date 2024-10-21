import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axiosConfig";

// Thunks for sending and fetching messages
export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async ({ senderId, receiverId, message }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`messages/send/${senderId}`, {
        receiverId,
        message,
      });
      return response.data.newMessage;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async ({ id, receiverId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `messages/${id}?receiverId=${receiverId}`
      );
      console.log("from fetch messages ===> ", response.data);
      return response.data.messages;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Message slice
const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
    newMessage: null,
    status: "idle",
    senderId: null,
    receiverId: null,
    error: null,
  },
  reducers: {
    // Add any additional reducers for message management here:
    setSenderId: (state, action) => {
      state.senderId = action.payload;
    },
    setReceiverId: (state, action) => {
      state.receiverId = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
        console.log("fetchMessages.fulfilled ====>", state.messages);
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        console.log("fetchMessages.rejected ====>", action.payload);

        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// export actions :

export const { setSenderId, setReceiverId, setMessages } = messageSlice.actions;

export default messageSlice.reducer;
