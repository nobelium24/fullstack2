const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose");
const cors = require("cors")
const userRouter = require("./routes/userRoute");
const { errorHandler } = require("./middlewares/errorHandler");
const bodyParser = require("body-parser")

const app = express();
app.use(express.json({limit:"100mb"}));
app.use(express.urlencoded({ extended: true, limit:"100mb" }));

app.use(cors({origin:"*"})) //CORS allows us to make requests from an origin different from the one the server is running on

app.use("/users", userRouter)


const uri = process.env.MONGODB_URI
const connect = () => {
    mongoose.set("strictQuery", false)
    mongoose.connect(uri).then(() => {
        console.log("Connected to mongoDB")
    }).catch((error) => {
        console.log(error)
    })
}
connect()

app.use(errorHandler)

app.listen("6660", () => {
    console.log("Server started")
})