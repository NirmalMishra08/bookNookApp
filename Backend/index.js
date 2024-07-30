import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
import bookRoute from './route/book.route.js'
import cors from 'cors';
import userRouter from "./route/user.route.js"

app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 4001
const URI = process.env.MongoDBURI;




//connect to mongo db uri
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,


    })
    console.log("connected to MongoDB")
} catch (error) {
    console.error('error:', error)


}
//defining routes
app.use('/books', bookRoute)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})