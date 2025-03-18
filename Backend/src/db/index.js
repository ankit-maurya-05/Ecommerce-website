import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const connectDB= async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("NONGODB CONNECTION ERROR");
        error.process.exit(1)
    }
}

export {connectDB}