import React, { useEffect, useState } from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import { useDispatch, useSelector } from "react-redux";
import { login, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import kashmirlog from "../assets/University of Kashmir logo (1).jpeg";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const handlogin = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    dispatch(login(data));
  
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(resetAuthSlice());
     
    }
    if (error) {
      toast.error(error);
      dispatch(resetAuthSlice());
    }
  
  }, [dispatch, isAuthenticated, error, loading]);
  if (isAuthenticated) {
    return  <Navigate to={'/'}/>;
  }
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row h-screen">
        {/* left side */}
        <div className="w-full md:w-1/2 mt-20 flex item-center justify-center  bg-white p-8 relative">
          <div className="max-w-sm w-full">
            <div className="flex justify-center mb-3 ">
              <div className="rounded-full flex items-center justify-center">
                <img src={'https://upload.wikimedia.org/wikipedia/en/6/6f/University_of_Kashmir_logo.png'} alt="log" className="h-24 w-auto  " />
              </div>
            </div>
            <h1 className="text-4xl font-medium text-center  overflow-hidden mt-0">
              Welcome Back !!
            </h1>
            <p className="text-gray-800 text-center mb-12 mt-5">
          Please enter your Credentials to log in
            </p>
            <form onSubmit={handlogin}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"
                />
              </div>
              <Link to={"/password/forgot"} className="font-semibold text-black mb-12">Forgot Password?</Link>
              <div className="block md:hidden font-semibold mt-5">
                <p>New to our Platform?<Link to={'/register'} className="text-sm text-gray-500 hover:underline">Sign Up</Link></p>
              </div>
              <button
                type="submit"
                className="border-2 mt-5 border-black w-full font-semibold bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
        {/* right side */}``
        <div className="hidden w-full md:w-1/2 bg-black text-white md:flex flex-col items-center justify-center p-8 rounded-tl-[80px] rouded-bl-[80px]">
          <div className="text-center h-[400px]">
            <div className="flex justify-center ">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLPOegmJM8d407ckOwZBoUw0_Up9Y5gYKbg&s"
                }
                className="h-44 mb-12 w-auto"
                alt="logo"
              />
            </div>
            <p className="text-gray-300 mb-12">
              New to our platform? Sign up now.
            </p>
            <Link
              to={"/register"}
              className="border-2 mt-5 px-8 w-full font-semibold bg-black border-white py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
