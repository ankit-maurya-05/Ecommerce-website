import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import productRoutes from './routes/productRoutes.js';

const app = express()

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN, //Enables CORS (Cross-Origin Resource Sharing), allowing frontend applications on different origins to access this backend API.
        Credentials : true
    }
))



app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended : true, limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

// Routes
app.use('/api/products', productRoutes);

export {app}