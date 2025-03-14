import React, { useEffect, useState } from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import kashmirlog from "../assets/University of Kashmir logo (1).jpeg";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const handForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
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
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row h-screen">
        {/* left side */}
        <div className="hidden w-full md:w-1/2 bg-black text-white md:flex flex-col items-center justify-center p-8 rounded-tr-[80px] rounded-br-[80px]">
          <div className="text-center h-[450px]">
            <div className="flex justify-center mb-12">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLPOegmJM8d407ckOwZBoUw0_Up9Y5gYKbg&s"
                }
                alt="log"
                className="h-30 w-auto  "
              />
            </div>
            <h3 className="text-gray-300 mb-12 max-w-[320px] max-auto text-3xl font-medium leading-10">
              "Your premier digital library for borrowing and reading books"
            </h3>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8 relative">
          <Link
            to={"/login"}
            className="border-2 border-black rounded-3xl font-bold w-52 py-2 px-4 fixed top-10 -left-28 hover:bg-black hover:text-white transition duration-300 text-end"
          >
            Back
          </Link>
          <div className="w-full max-w-sm">
            <div className="flex justify-center mb-12">
              <div className="rounded-full flex items-center justify-center">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/en/6/6f/University_of_Kashmir_logo.png"
                  }
                  alt="logo"
                  className="h-24 w-auto"
                />
              </div>
            </div>
            <h1 className="text-4xl font-semibold text-center mb-5 overflow-hidden">
              Forgot Password
            </h1>
            <p className="text-gray-800 text-center mb-12">
              Please enter the your email
            </p>
            <form onSubmit={handForgotPassword}>
              <div className="mb-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="border-2 mt-5 border-black w-full font-semibold bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black transition"
                disabled={loading ? true : false}
              >
                RESET PASSWORD
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
