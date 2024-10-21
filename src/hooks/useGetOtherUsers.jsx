import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUsers } from "../features/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        dispatch(getOtherUsers(user?._id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
