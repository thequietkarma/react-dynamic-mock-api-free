import mongoose from "mongoose"
import Users from "./Users.model.js"

const APIConfigSchema = new mongoose.Schema({
    rootRoute: {type: String, required: true, unique: [true, "Root Route already exists."]},
    allMethodsAllowed: {type: Boolean, required: true},
    userId: {type: mongoose.Types.ObjectId, ref: Users, required: true},
    expiresAt: {type: Date, required: true}
}, {
    timestamps: true
})

APIConfigSchema.index({expiresAt: 1}, {expireAfterSeconds: 0})
APIConfigSchema.index({userId: 1})
const APIConfigs = mongoose.model("APIConfig", APIConfigSchema)

export default APIConfigs