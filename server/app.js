import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./database/db.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import authRouter from "./routes/authRoute.js";
import bookRouter from "./routes/bookRoute.js";
import borrowRouter from "./routes/borrowRoute.js";
import userRouter from "./routes/userRoute.js";
import expressFileUpload from "express-fileupload";
import { notifyUser } from "./services/notifyUser.js";
import { removeUnverifiedAccounts } from "./services/removeUnverifiedAccount.js";
config({ path: "./config/config.env" });
export const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressFileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/borrow", borrowRouter);
app.use("/api/v1/user", userRouter);
notifyUser()
removeUnverifiedAccounts()
connectDB();
app.use(errorMiddleware);
