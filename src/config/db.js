import mongoose from "mongoose"

const connectMongodb = async ()=>{
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined.")
        }
        if (mongoose.connection.readyState == 1) {
            return
        }
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10
        })
        console.log("Connected to database ✅")
    } catch (error) {
        console.error("Failed to connect to database: ", error)
        process.exit(1)
    }
}

export default connectMongodb