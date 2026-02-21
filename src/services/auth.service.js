import Users from "../models/Users.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js"
import { generateAccessToken, generateRefreshToken } from "../utils/auth/token.utils.js"

// =======================
// Register Service
// =======================

export const registerService = async (email, password) => {

    const existingUser = await Users.findOne({ email })
    if (existingUser) {
        throw new ApiError(409, "User already exists.")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await Users.create({
        email,
        password: hashedPassword
    })

    const accessToken = generateAccessToken(user._id)
    const refreshToken = generateRefreshToken(user._id)

    user.refreshToken = refreshToken
    await user.save()

    return {
        id: user._id,
        email: user.email,
        token: accessToken,
        refreshToken
    }
}


// =======================
// Login Service
// =======================

export const loginService = async (email, password) => {

    const user = await Users.findOne({ email })
    if (!user) {
        throw new ApiError(401, "Invalid credentials.")
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials.")
    }

    const accessToken = generateAccessToken(user._id)
    const refreshToken = generateRefreshToken(user._id)

    user.refreshToken = refreshToken
    await user.save()

    return {
        id: user._id,
        email: user.email,
        token: accessToken,
        refreshToken
    }
}


// =======================
// Logout Service
// =======================

export const logoutService = async (userId) => {
    const user = await Users.findById(userId)

    if (!user) {
        throw new ApiError(404, "User not found.")
    }

    user.refreshToken = null
    await user.save()

    return true
}


// =======================
// Get User Details
// =======================

export const getUserDetailsService = async (userId) => {
    const user = await Users.findById(userId)
        .select("-password -refreshToken")

    if (!user) {
        throw new ApiError(404, "User not found.")
    }

    return user
}


// =======================
// Refresh Token Service
// =======================

export const refreshTokenService = async (refreshToken) => {

    let decoded

    try {
        decoded = jwt.verify(refreshToken, process.env.JWT_SECRET)
    } catch {
        throw new ApiError(401, "Invalid or expired refresh token.")
    }

    const user = await Users.findById(decoded.userId)

    if (!user || user.refreshToken !== refreshToken) {
        throw new ApiError(401, "Invalid refresh token.")
    }

    const newAccessToken = generateAccessToken(user._id)
    const newRefreshToken = generateRefreshToken(user._id)

    user.refreshToken = newRefreshToken
    await user.save()

    return {
        token: newAccessToken,
        refreshToken: newRefreshToken
    }
}