import dotenv from "dotenv"
import {connectDB} from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
  path:"/env"
})

connectDB()
 
.then(() => {
  app.listen(process.env.PORT || 9000, () => {
    console.log(`server is running at port : ${process.env.port}`)
  })
  })
.catch((err) => {
  console.log("MONGODB CONNECTION FAILED !!", err)
})