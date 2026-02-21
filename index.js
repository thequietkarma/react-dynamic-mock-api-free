import app from "./src/app.js";

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`REACT-MOCK-API is running at ${PORT} 🚀`)
})