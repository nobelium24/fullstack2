const express = require("express")
const { signup, signIn, verifyUserToken, imageUpload } = require("../controllers/userController")
const userRouter = express.Router()

userRouter.post("/signup", signup)
userRouter.post("/login", signIn)
userRouter.get("/verify", verifyUserToken)
userRouter.post("/upload", imageUpload)


module.exports = userRouter