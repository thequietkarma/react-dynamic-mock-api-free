import validator from "validator"
import ApiError from "../utils/ApiError.js"

export const validateRegister = (email, password) => {
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required.")
    }

    if (!validator.isEmail(email)) {
        throw new ApiError(400, "Invalid email format.")
    }

    if (password.length < 6) {
        throw new ApiError(400, "Password must be at least 6 characters.")
    }
}

export const validateLogin = (email, password) => {
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required.")
    }
}

export const validateRefreshToken = (refreshToken) => {
    if (!refreshToken) {
        throw new ApiError(400, "Refresh token is required.")
    }
}