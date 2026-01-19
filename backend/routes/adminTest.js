const express = require("express")
const router = express.Router()

const { protect, adminOnly } = require("../middleware/authMiddleware")

router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin",
    user: req.user
  })
})

module.exports = router
