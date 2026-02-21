import { createDocByRouteTag, deleteDocById, deleteDocByRouteTag, getDocsByRoute, getDocsByRouteTag, updateDocById } from "../services/apidata.service.js"
import AsyncHandler from "../utils/AsyncWrapper.js"
import ApiResponse from "../utils/ApiResponse.js"
import { validateRouteTag } from "../validators/apidata.validator.js"

export const getAPIData = AsyncHandler( async (req, res)=>{
    const docs = await getDocsByRouteTag(req.queries)
    res.status(200).json(new ApiResponse(200, "Data found", docs))
})

export const getAPIDocRoute = AsyncHandler( async (req, res)=>{
    const docs = await getDocsByRoute(req.params.rootRoute || "")
    res.status(200).json(new ApiResponse(200, "Data found", docs))
})

export const updateAPIData = AsyncHandler( async (req, res)=>{
    const { docId } = req.params
    const updatedData = await updateDocById(docId, req.body)
    res.status(200).json(new ApiResponse(200, "Data Updated", updatedData))
})

export const deleteAPIData = AsyncHandler( async (req, res)=>{
    const { docId } = req.params
    const isDeleted = await deleteDocById(docId)
    if (isDeleted) res.status(200).json(new ApiResponse(200, "Data Deleted", {}))
})

export const deleteManyAPIData = AsyncHandler( async (req, res)=>{
    const result = await deleteDocByRouteTag(req.queries)
    res.status(200).json(new ApiResponse(200, "Data Deleted", result))
})

export const createAPIData = AsyncHandler( async (req, res)=>{
    await validateRouteTag(req.body.rootRoute || "", req.body.tag || "")
    const doc = await createDocByRouteTag(req.body)
    res.status(201).json(new ApiResponse(201, "Data created", doc))
})