import express from "express"
import { createAPIConfig, deleteAPIConfig, getAPIConfig, updateAPIConfig } from "../controllers/APIConfig.controller.js"
import verifyUser from "../middlewares/auth/jwt.verify.middleware.js"
const router = express.Router()

router.post("/create-api-config", verifyUser, createAPIConfig)
router.patch("/update-api-config", verifyUser, updateAPIConfig)
router.delete("/delete-api-config", verifyUser, deleteAPIConfig)
router.get("/api-configs", verifyUser, getAPIConfig)

export default router