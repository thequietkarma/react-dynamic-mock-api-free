import APIConfigs from "../models/APIConfig.model.js";
import ApiError from "../utils/ApiError.js";

export const validateRouteTag = async (rootRoute, tag = "")=>{
    const exists = await APIConfigs.exists({rootRoute})
    if (!exists) throw new ApiError(404, "rootRoute does not exists.")
    if (tag === "") throw new ApiError(400, "tag cannot be blank.") 
}