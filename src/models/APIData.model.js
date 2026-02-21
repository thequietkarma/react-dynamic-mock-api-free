import mongoose from "mongoose"
import APIConfigs from "./APIConfig.model.js"

const APIDataSchema = new mongoose.Schema({
    rootRoute: {required: true, type: String, ref: APIConfigs, index: true},
    tag: {required: true, type: String, index: true},
},{ timestamps: true, strict: false})

APIDataSchema.index({rootRoute: 1, tag: 1})

const APIDatas = mongoose.model("APIData", APIDataSchema)

export default APIDatas