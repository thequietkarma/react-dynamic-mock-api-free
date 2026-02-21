import APIDatas from "../models/APIData.model.js";
import ApiError from "../utils/ApiError.js"

export const getDocsByRouteTag = async (query)=>{
    const docs = await APIDatas.find(query)
    return docs
}

export const getDocsByRoute = async (rootRoute) =>{
    const docs = await APIDatas.find({rootRoute})
    return docs
}

export const createDocByRouteTag = async (data)=>{
    const doc = await APIDatas.create(data)
    return doc
}

export const updateDocById = async (docId, dataToUpdate) =>{
    if (dataToUpdate.rootRoute) throw new ApiError(400, "rootRoute cannot be updated.")
    const updatedDoc = await APIDatas.findByIdAndUpdate(docId, dataToUpdate, {new: true, runValidators: true})
    return updatedDoc
}

export const deleteDocById = async (docId) =>{
    await APIDatas.findByIdAndDelete(docId)
    return true
}

export const deleteDocByRouteTag = async (query)=>{
    const result = await APIDatas.deleteMany(query)
    return result
}