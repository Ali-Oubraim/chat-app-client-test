import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axiosConfig";

// Thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ userCredential, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/userslogin", {
        userCredential,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOtherUsers = createAsyncThunk(
  "messages/getOtherUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`messages/all/${id}`);
      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// User slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    selectedUser: null,
    onlineUsers: null,
    token: null,
    userType: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userType = null;
      state.status = "idle";
      state.error = null;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.userType = action.payload.userType;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message || "Login failed";
      });
    builder
      .addCase(getOtherUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOtherUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.otherUsers = action.payload;
      })
      .addCase(getOtherUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, setOnlineUsers, setOtherUsers, setSelectedUser } =
  userSlice.actions;

export default userSlice.reducer;
