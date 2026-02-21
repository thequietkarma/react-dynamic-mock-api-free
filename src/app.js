import express from "express"
import cors from "cors"
import connectMongodb from "./config/db.js"
import errorHandler from "./middlewares/error.middleware.js"
import userRoutes from "./routes/users.route.js"
import apiConfigRoutes from "./routes/apiconfig.route.js"
import apiDataRoutes from "./routes/apidata.route.js"
import dashboardRoutes from "./routes/dashboard.route.js"
import { rateLimit } from "express-rate-limit"
import swaggerUi from "swagger-ui-express"
import openapiSpec from "./docs/openapi.js"
import { fileURLToPath } from "url"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()

// DB Connection
await connectMongodb()

// Middlewares
app.use(cors())
app.use(express.json())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 600, // Limit each IP to 500 requests per `window` (here, per 15 minutes).
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	message: "You hit the limit. Please try again after 15 mins."
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static("public"))

// Frontend Rendring
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/dashboard",(req,res)=>{
	res.render("dashboard")
})
app.get("/login",(req,res)=>{
	res.render("login")
})
app.get("/dashboard/:rootRoute/view",(req,res)=>{
	res.render("api-data")
})
app.get("/docs",(req,res)=>{
    res.render("docs")
})
//Routes
app.use("/user", userRoutes)
app.use("/config", apiConfigRoutes)
app.use("/user-api", apiDataRoutes)
app.use("/dashboard", dashboardRoutes)
app.use("/open-source/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec))

//Global Error Handler
app.use(errorHandler)

export default app