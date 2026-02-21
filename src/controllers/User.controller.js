import AsyncHandler from "../utils/AsyncWrapper.js"
import ApiResponse from "../utils/ApiResponse.js"
import {
    registerService,
    loginService,
    logoutService,
    getUserDetailsService,
    refreshTokenService
} from "../services/auth.service.js"

import {
    validateRegister,
    validateLogin,
    validateRefreshToken
} from "../validators/auth.validator.js"


export const registerUser = AsyncHandler(async (req, res) => {

    const { email, password } = req.body || ""

    validateRegister(email, password)

    const data = await registerService(email, password)

    res.status(201).json(
        new ApiResponse(201, "User registered successfully.", data)
    )
})


export const loginUser = AsyncHandler(async (req, res) => {

    const { email, password } = req.body || ""

    validateLogin(email, password)

    const data = await loginService(email, password)

    res.status(200).json(
        new ApiResponse(200, "Login successful.", data)
    )
})


export const logoutUser = AsyncHandler(async (req, res) => {

    await logoutService(req.userId)

    res.status(200).json(
        new ApiResponse(200, "Logout successful.")
    )
})


export const getUserDetails = AsyncHandler(async (req, res) => {

    const user = await getUserDetailsService(req.userId)

    res.status(200).json(
        new ApiResponse(200, "User details fetched successfully.", user)
    )
})


export const getNewToken = AsyncHandler(async (req, res) => {

    const { refreshToken } = req.body || ""

    validateRefreshToken(refreshToken)

    const data = await refreshTokenService(refreshToken)

    res.status(200).json(
        new ApiResponse(200, "Token refreshed successfully.", data)
    )
})