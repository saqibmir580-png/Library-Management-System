import React, { useEffect, useState } from "react";
import logo from "../assets/black-logo.png";
import kashmirlog from "../assets/University of Kashmir logo (1).jpeg";
import logo_with_title from "../assets/logo-with-title.png";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { otpVerification, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";

const OTP = () => {
  const email = useParams();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { loading, error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const handleOtpVerification = (e) => {
    e.preventDefault();
    dispatch(otpVerification(email, otp));
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
      dispatch(resetAuthSlice());
    }
    if (isAuthenticated) {
      return <Navigate to={"/"} />;
    }
  }, [dispatch, isAuthenticated, error, loading]);
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row h-screen">
        {/* left side */}
        <div className="w-full md:w-1/2 flex item-center justify-center bg-white p-8 relative">
          <Link
            to={"/login"}
            className="border-2 border-black rounded-3xl font-bold w-52 py-2 px-4 fixed top-10 -left-28 hover:bg-black hover:text-white transition duration-300 text-end"
          >
            Back
          </Link>
          <div className="max-w-sm w-full">
            <div className="flex justify-center ">
              <div className="rounded-full flex items-center justify-center ">
                <img src={kashmirlog} alt="log" className="h-24 w-auto " />
              </div>
            </div>
            <h1 className="text-4xl font-medium text-center  overflow-hidden mt-0">
              Check Your Mailbox
            </h1>
            <p className="text-gray-800 text-center mb-12 mt-5">Please enter the otp to proceed</p>
            <form onSubmit={handleOtpVerification}>
              <div className="mb-4">
                <input type="number" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"/>
              </div>
              <button type="submit" className="border-2 mt-5 border-black w-full font-semibold bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black transition">Verify</button>
            </form>
          </div>
        </div>
        {/* right side */}``
        <div>
          <div>
            <div>
              <img src={kashmirlog} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;
