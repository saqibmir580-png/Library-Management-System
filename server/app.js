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
import path from "path";
config({ path: "./config/config.env" });
export const app = express();
const __dirname=path.resolve()
app.use(
  cors({
    origin:"https://library-management-system-me5l.onrender.com",
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
app.use(express.static(path.join(__dirname,"/client/dist")))
app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})
