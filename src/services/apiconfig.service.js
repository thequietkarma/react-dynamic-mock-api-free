import APIConfigs from "../models/APIConfig.model.js"
import ApiError from "../utils/ApiError.js"

export const registerConfig = async (
    rootRoute,
    allMethodsAllowed,
    userId,
    expiresAt
) => {
    const exists = await APIConfigs.exists({ rootRoute })

    if (exists) throw new ApiError(409, "Root Route already exists. Choose another name.")
    const APIConfig = await APIConfigs.create({
        rootRoute, allMethodsAllowed, userId, expiresAt
    })
    return APIConfig
}

export const updateConfig = async (configId, userId, updatedConfigs) => {
    if (updatedConfigs.rootRoute) {
        const exists = await APIConfigs.exists({ rootRoute: updatedConfigs.rootRoute })
        if (exists) {
            throw new ApiError(409, "Root Route already exists. Choose another name.")
        }
    }
    const updatedData = await APIConfigs.findOneAndUpdate({ _id: configId, userId }, updatedConfigs, { new: true })
    return updatedData
}

export const deleteConfig = async (configId, userId) => {
    await APIConfigs.findOneAndDelete({ _id: configId, userId })
    return true
}

export const userAPIConfigs = async (userId) => {
    const userConfigs = await APIConfigs.find({ userId })
    return userConfigs
}