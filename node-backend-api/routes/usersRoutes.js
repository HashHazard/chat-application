const express = require("express")
const User = require("../models/userModel")

const router = express.Router()

router.get("/", async (req, res)=>{
    res.send("user")
})

module.exports = router