import jwt from "jsonwebtoken"

const generateAccessToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    )
}

const generateRefreshToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: "28d" }
    )
}

export { generateAccessToken, generateRefreshToken }