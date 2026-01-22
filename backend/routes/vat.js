const express = require("express")
const router = express.Router()

const { getVatSummary } = require("../controllers/vatController")
const { protect } = require("../middleware/authMiddleware")

router.get("/summary", protect, getVatSummary)

module.exports = router
