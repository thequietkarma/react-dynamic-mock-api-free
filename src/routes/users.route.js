import express from "express"
import { registerUser, loginUser, logoutUser, getNewToken, getUserDetails } from "../controllers/User.controller.js"
import verifyUser from "../middlewares/auth/jwt.verify.middleware.js"

const Router = express.Router()

Router.post("/register", registerUser)
Router.post("/login", loginUser)
Router.get("/get-user-details", verifyUser, getUserDetails)
Router.post("/generate-token", getNewToken)
Router.post("/logout", verifyUser, logoutUser)

export default Router