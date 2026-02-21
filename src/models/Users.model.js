import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        required: true, type: String, unique: true, lowercase: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
        ]
    },
    password: { required: true, type: String },
    refreshToken: { type: String }
}, {
    timestamps: true
})

const Users = mongoose.model("user", userSchema)

export default Users