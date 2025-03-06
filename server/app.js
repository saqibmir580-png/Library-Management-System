import express from 'express'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './database/db.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import authRouter from './routes/authRoute.js'
import bookRouter from './routes/bookRoute.js'
config({path:"./config/config.env"})
export const app=express()

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/book",bookRouter)
connectDB()
app.use(errorMiddleware)