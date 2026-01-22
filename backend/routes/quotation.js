const express = require("express")
const router = express.Router()

const {
  createQuotation,
  getAllQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation
} = require("../controllers/quotationController")

const { protect, adminOnly } = require("../middleware/authMiddleware")

router.route("/")
  .post(protect, createQuotation)
  .get(protect, getAllQuotations)

router.route("/:id")
  .get(protect, getQuotationById)
  .put(protect, adminOnly, updateQuotation)   // 👈 ADMIN ONLY
  .delete(protect, adminOnly, deleteQuotation)

module.exports = router
