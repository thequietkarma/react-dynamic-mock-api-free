import jwt from "jsonwebtoken"
import AsyncHandler from "../../utils/AsyncWrapper.js"
import ApiError from "../../utils/ApiError.js"

const verifyUser = AsyncHandler(async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) {
        throw new ApiError(401, "Token missing from bearer header.")
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        next()
    } catch (error) {
        throw new ApiError(401, "Session expired or invalid token.")
    }
})

export default verifyUser