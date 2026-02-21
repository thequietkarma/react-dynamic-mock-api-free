import express from "express"
import { attachRouteAndTag, getParamsAndQuery } from "../middlewares/user-api/apidata.middleware.js"
import { createAPIData, deleteAPIData, deleteManyAPIData, getAPIData, getAPIDocRoute, updateAPIData } from "../controllers/APIData.controller.js"

const router = express.Router()

// Get API Data Docs via rootRoute and tag
router.get("/:rootRoute/:tag", getParamsAndQuery, getAPIData)

// Get API Data Docs via rootRoute
router.get("/:rootRoute", getAPIDocRoute)

// Create API Data Doc via rootRoute and tag
router.post("/:rootRoute/:tag/create", attachRouteAndTag, createAPIData)

// Update API Data via docId
router.patch("/:rootRoute/:docId/update", updateAPIData)

// Delete API Data via docId
router.delete("/:rootRoute/:docId/delete", deleteAPIData)

// Delete Many API Data via rootRoute and tag
router.delete("/:rootRoute/:tag/delete-many", getParamsAndQuery, deleteManyAPIData)

export default router