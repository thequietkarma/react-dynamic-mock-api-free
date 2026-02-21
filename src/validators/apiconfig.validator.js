import ApiError from "../utils/ApiError.js"

export const validateAPIConfig = (rootRoute, allMethodsAllowed, userId, expiresAt)=>{
    if (!rootRoute ||
        !userId ||
        !expiresAt ||
        typeof allMethodsAllowed !== "boolean"
    ) throw new ApiError(400, "rootRoute, allMethodsAllowed (true/false), expiresAt (date) is required.")
}

export const validateAPIConfigUpdate = (configId, updatedConfig) =>{
    if (!configId || !updatedConfig) throw new ApiError(400, "configId and updatedConfig is required.")
}

export const validateAPIConfigID = (configId) =>{
    if (!configId) throw new ApiError(400, "configId is required for process.")
}