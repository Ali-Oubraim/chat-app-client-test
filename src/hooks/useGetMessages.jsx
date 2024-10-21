import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "../features/messageSlice";
import { setSelectedUser } from "../features/userSlice";

const useGetMessages = () => {
  const { selectedUser, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        dispatch(
          fetchMessages({ id: user?._id, receiverId: selectedUser?._id })
        );
        // dispatch(setSelectedUser())
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMessages();
  }, [selectedUser?._id]);
};

export default useGetMessages;
