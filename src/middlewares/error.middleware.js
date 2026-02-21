import ApiError from "../utils/ApiError.js"
import mongoose from "mongoose"
const errorHandler = (err, req, res, next) => {
    let statusCode = 500
    let message = "Internal Server Error"

    if (err instanceof ApiError) {
        statusCode = err.statusCode
        message = err.message
    }
    else if (err instanceof mongoose.Error.ValidationError) {
        statusCode = 400
        message = Object.values(err.errors)
            .map(e => e.message)
            .join(", ")
    }
    else {
        console.error(err)
    }

    res.status(statusCode).json({ "error": message, "success": false })
}

export default errorHandler