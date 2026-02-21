import { getAPIData, getData } from "../services/dashboard.service.js"
import AsyncHandler from "../utils/AsyncWrapper.js"
import ApiResponse from "../utils/ApiResponse.js"

export const getDashboardData = AsyncHandler(async (req, res) => {
    const data = await getData(req.userId)
    res.status(200).json(new ApiResponse(200, "Data retrived", data))
})

export const getDashboardAPIData = AsyncHandler(async (req, res) => {
    const data = await getAPIData(req.params.rootRoute)
    res.status(200).json(new ApiResponse(200, "Data retrived", data))
})