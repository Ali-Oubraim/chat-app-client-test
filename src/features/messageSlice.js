import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axiosConfig";

// Thunks for sending and fetching messages
export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async ({ senderId, receiverId, message }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`messages/send/${receiverId}`, {
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
  async (receiverId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`messages/${receiverId}`);
      return response.data;
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
    status: "idle",
    error: null,
  },
  reducers: {},
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
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default messageSlice.reducer;
