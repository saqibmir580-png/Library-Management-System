import { catchAsyncErrors } from "../middlewares/catchAsyncErro.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
export const getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({ accountVerified: true });
  res.status(200).json({
    success: true,
    users,
  });
});
export const registerNewAdmin = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Admin avatar is required.", 400));
  }
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please fill all fields.", 400));
  }
  const isRegistered = await User.findOne({ email, accountVerified: true });
  if (isRegistered) {
    return next(new ErrorHandler("User already registered.", 400));
  }
  if (password.length < 8 || password.length > 16) {
    return next(
      new ErrorHandler("Password must be between 8 to 16 characters.", 400)
    );
  }
  const { avatar } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(avatar.mimetype)) {
    new ErrorHandler("File format not supported.", 400);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const cloudinaryReponse = await cloudinary.uploader.upload(
    avatar.tempFilePath,
    { folder: "LIBRARY_MANAGEMENT_SYSTEM_AVATARS" }
  );
  if (!cloudinaryReponse || cloudinaryReponse.error) {
    console.log("cloudinary error", cloudinaryReponse.error || "unknown error");
    new ErrorHandler("Failed to upload avatar image to cloudinary.", 400);
  }
  const admin= await User.create({
    name,
    email,
    password: hashedPassword,
    role: "Admin",
    accountVerified: true,
    avatar: {
      public_id: cloudinaryReponse.public_id,
      url: cloudinaryReponse.secure_url,
    },
  });
  res.status(200).json({
    success:true,
    message:"Admin registered successfully",
    admin
  })
});
