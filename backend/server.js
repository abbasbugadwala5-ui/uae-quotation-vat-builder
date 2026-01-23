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
app.get("/test", (req, res) => {
  res.send("API WORKING")
})

// 🔥 BODY PARSER MUST BE BEFORE ROUTES
app.use(cors())

// 🔥 EXPRESS 5 – REQUIRED BOTH
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))


connectDB()

app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/quotations", quotationRoutes)

app.use("/api/vat", vatRoutes)
app.use("/api/dashboard", dashboardRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
