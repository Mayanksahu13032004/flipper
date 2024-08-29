import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

/app.get("/",(req,res)=>{
    res.json({
      message:    "server is running"
    })
})
import userLogin from './routes/user.routes.js'
import cardinquery from './routes/card.routes.js'
import subscribe from './routes/subscribe.routes.js'

app.use("/api/v1/project/users",userLogin)   
app.use("/api/v1/project/card",cardinquery)
app.use("/api/v1//project/subscribe",subscribe)
app.get('/',(req,res)=>{
  res.send("efheuovr")
})



export {app}