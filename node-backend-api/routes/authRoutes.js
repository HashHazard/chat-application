const express = require("express")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

const router = express.Router()

// REGISTER
router.post("/register", asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })


    res.status(201).send(user)
}))

// LOGIN
router.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {
        // const validPassword = await bcrypt.compare(password, user.password)
        res.status(200).json({ message: "Successfully logined in" })
    } else {
        res.status(401)
        throw new Error("Email or Password is not valid")
    }
}))

module.exports = router