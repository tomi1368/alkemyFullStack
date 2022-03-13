import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import methodOverride from "method-override"
import connectDB from "./db/config/db.js"
//Contr
import userRouter from "./routers/userRouter.js"


//Enviroment
dotenv.config()





const app = express()
const PORT = process.env.PORT || 6000


connectDB()


app.use(express.json())
app.use(cors())
app.use(methodOverride())
app.use(express.urlencoded({ extended: true }));






app.get("/healthy",(req,res)=>{
    res.send("OK")
})

app.use("/api/user",userRouter)



const server = app.listen(PORT,(req,res)=>{
    console.log(`Server up on Port ${PORT}`)
})

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Connection error ${err}`)
    server.close(()=> process.exit(1))
})