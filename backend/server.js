const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/adminTest")


const app = express()

// 🔥 BODY PARSER MUST BE BEFORE ROUTES
app.use(cors())

// 🔥 EXPRESS 5 – REQUIRED BOTH
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))


connectDB()

app.use("/api/auth", authRoutes)

app.use("/api/admin", adminRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
