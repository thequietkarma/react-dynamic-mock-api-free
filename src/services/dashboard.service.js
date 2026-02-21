import APIConfigs from "../models/APIConfig.model.js"
import APIDatas from "../models/APIData.model.js"

export const getData = async (userId) => {
    const totalAPIs = await APIConfigs.countDocuments({ userId })
    const data = await APIConfigs.find({ userId })
    return {
        data,
        totalAPIs
    }
}

export const getAPIData = async (rootRoute) => {
    const docs = await APIDatas.find({ rootRoute })
    const tags = await APIDatas.distinct("tag", { rootRoute })
    return {
        docs,
        tags
    }
}