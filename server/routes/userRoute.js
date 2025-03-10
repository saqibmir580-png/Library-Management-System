import express from "express";
import {isAuthenticated,isAuthorized} from '../middlewares/authMiddleware.js'
import { getAllUser, registerNewAdmin } from "../controllers/userController.js";

const router=express.Router()

router.get('/all',isAuthenticated,isAuthorized('Admin'),getAllUser)
router.post('/add/new-admin',isAuthenticated,isAuthorized('Admin'),registerNewAdmin)

export default router