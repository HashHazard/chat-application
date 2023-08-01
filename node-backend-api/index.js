const express = require("express")
const app = express()
// const http = require("http")
const connectDb = require("./config/dbConnection")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const userRoute = require("./routes/usersRoutes")
const authRoute = require("./routes/authRoutes")

const port = 3001
dotenv.config()

connectDb() // mongodb connection

// Middleware
app.use(express.json()) // post request body parser
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(port, () => {
    console.log(`nodejs chat api running on port ${port}`)
})


// const { Server } = require("socket.io")
// const server = http.createServer(app);

// // const io = new Server(server, {
// //     cors: {
// //         origin: "http://localhost:3000",
// //         methods: ["GET", "POST"]
// //     }
// })



// server.listen(port, () => {
//     console.log(`nodejs chat sever running on port ${port}`)
// })