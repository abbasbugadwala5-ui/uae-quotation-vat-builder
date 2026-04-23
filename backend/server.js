const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/adminTest")
const quotationRoutes = require("./routes/quotation")
const vatRoutes = require("./routes/vat")
const dashboardRoutes = require("./routes/dashboard")

const app = express()

// Middleware
app.use(cors())
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.get("/", (req, res) => {
  res.send("UAE Quotation API is running 🚀")
})

app.get("/test", (req, res) => {
  res.send("API WORKING")
})

app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/quotations", quotationRoutes)
app.use("/api/vat", vatRoutes)
app.use("/api/dashboard", dashboardRoutes)

const PORT = process.env.PORT || 5000

// 🔥 IMPORTANT FIX: WAIT FOR DB BEFORE STARTING SERVER
const startServer = async () => {
  try {
    await connectDB() // ✅ wait for MongoDB

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("Server failed to start ❌", error.message)
    process.exit(1)
  }
}

startServer()