const jwt = require("jsonwebtoken")
const User = require("../models/User")

// 🔐 Verify token
const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "No auth token" })
  }

  try {
    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.id).select("-password")

    if (!user) {
      return res.status(401).json({ message: "User not found" })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

// 🔒 Admin only access
const adminOnly = (req, res, next) => {
  if (req.user && req.user.isAdmin === true) {
    next()
  } else {
    return res.status(403).json({ message: "Admin access only" })
  }
}

module.exports = { protect, adminOnly }
