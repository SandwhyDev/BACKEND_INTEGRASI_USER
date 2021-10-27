import express from "express"
import cors from "cors"
import env from "dotenv"
import sq from "./model/connection"
import { user } from "./routes/user_route"
env.config()

//alias
const app = express()
const PORT = process.env.PORT

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended :  false}))

sq.sync({force : false})
.then(result=>{console.log(`connected to database`)})

//ROUTE
app.use("/api", user)


//listener
app.listen(PORT, console.log(`konek to port`))

