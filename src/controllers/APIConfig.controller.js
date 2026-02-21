import AsyncHandler from "../utils/AsyncWrapper.js"
import {
    validateAPIConfig, 
    validateAPIConfigUpdate,
    validateAPIConfigID
 } from "../validators/apiconfig.validator.js"
import {
    registerConfig,
    updateConfig,
    deleteConfig,
    userAPIConfigs
} from "../services/apiconfig.service.js"
import ApiResponse from "../utils/ApiResponse.js"

export const createAPIConfig = AsyncHandler(async (req, res) => {
    const { rootRoute, allMethodsAllowed, expiresAt } = req.body || {}
    const userId = req.userId
    validateAPIConfig(rootRoute, allMethodsAllowed, userId, expiresAt)
    const APIConfig = await registerConfig(rootRoute, allMethodsAllowed, userId, expiresAt)
    res.status(201).json(new ApiResponse(201, "APIConfig Registered", APIConfig))
})

export const updateAPIConfig = AsyncHandler( async (req, res)=>{
    const { configId, updatedConfigs } = req.body || {}
    const userId = req.userId
    validateAPIConfigUpdate(configId, userId, updatedConfigs)
    const APIConfig = await updateConfig(configId, userId, updatedConfigs)
    res.status(200).json(new ApiResponse(200, "APIConfig updated", APIConfig))
})

export const deleteAPIConfig = AsyncHandler( async (req, res)=>{
    const { configId } = req.body || {}
    const userId = req.userId
    validateAPIConfigID(configId)
    const isDeleted = await deleteConfig(configId, userId)
    if (isDeleted) res.status(200).json(new ApiResponse(200, "APIConfig deleted"))
})

export const getAPIConfig = AsyncHandler( async (req, res)=>{
    const userId = req.userId
    const apiConfigs = await userAPIConfigs(userId)
    res.status(200).json(new ApiResponse(200, "APIConfigs fetched", apiConfigs))
})