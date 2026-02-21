import express from "express"
import verifyUser from "../middlewares/auth/jwt.verify.middleware.js"
import { getDashboardAPIData, getDashboardData } from "../controllers/DashboardData.controller.js"

const router = express.Router()

router.get("/apis-data", verifyUser, getDashboardData)
router.get("/:rootRoute", verifyUser, getDashboardAPIData)

export default router