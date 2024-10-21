import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    userCredential: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

  }, [])
  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   withCredentials: true
      // });
      // navigate("/");
      // console.log(res);
      dispatch(loginUser(user));
    } catch (error) {
      console.log(error);
    }
    setUser({
      userCredential: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={user.userCredential}
              onChange={(e) => setUser({ ...user, userCredential: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
