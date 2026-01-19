

// Verify token
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: "No auth header" })
  }

  const token = authHeader.replace("Bearer ", "").trim()

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id).select("-password")
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next()
  } else {
    return res.status(403).json({ message: "Admin access only" })
  }
}

module.exports = { protect, adminOnly }
