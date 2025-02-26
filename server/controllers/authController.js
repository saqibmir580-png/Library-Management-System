import { catchAsyncErrors } from "../middlewares/catchAsyncErro.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendVerificationCode } from "../utils/sendVerificationCode.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (password.length < 8 || password.length > 16) {
        return next(
          new ErrorHandler("Password must be between 8 and 16 characters.", 400)
        );
      }
    if (!name || !email || !password) {
      return next(new ErrorHandler("Please Enter all Fields.", 400));
    }
    const isRegistered = await User.findOne({ email, accountVerified: true });
    if (isRegistered) {
      return next(new ErrorHandler("User is already exits.", 400));
    }
   
    if (password.length < 8 || password.length > 16) {
      return next(
        new ErrorHandler("Password must be between 8 and 16 characters.", 400)
      );
    }
    const hanshedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hanshedPassword,
    });
    const registerationAttemptByUser = await User.findOne({
        email,
        accountVerified: false,
      });
      if (registerationAttemptByUser.length >= 5) {
        return next(
          new ErrorHandler(
            "You have exceeded the number of attempts.please contact support.",
            400
          )
        );
      }
    const verificationCode = await user.generateVerificationCode();
    await user.save();
    sendVerificationCode(verificationCode, email, res);
  } catch (error) {
    next(error);
  }
});
