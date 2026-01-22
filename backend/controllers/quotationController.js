const Quotation = require("../models/Quotation")

// CREATE QUOTATION
exports.createQuotation = async (req, res) => {
  const { clientName, clientEmail, items } = req.body

  if (!clientName || !items || items.length === 0) {
    return res.status(400).json({ message: "Invalid quotation data" })
  }

  let subTotal = 0
  items.forEach((item) => {
    item.total = item.quantity * item.rate
    subTotal += item.total
  })

  const vatAmount = subTotal * 0.05
  const grandTotal = subTotal + vatAmount

  const quotation = await Quotation.create({
    clientName,
    clientEmail,
    items,
    subTotal,
    vatAmount,
    grandTotal,
    status: "Draft",
    createdBy: req.user._id,
  })

  res.status(201).json(quotation)
}

// GET ALL QUOTATIONS (OWNER / ADMIN)
// GET ALL QUOTATIONS (ADMIN = ALL, STAFF = OWN)
// GET ALL QUOTATIONS (latest first)
exports.getAllQuotations = async (req, res) => {
  const quotations = await Quotation.find()
    .sort({ createdAt: -1 }) // 🔥 latest first
    .limit(5)               // 🔥 sirf recent 5
  res.json(quotations)
}


// GET SINGLE QUOTATION
exports.getQuotationById = async (req, res) => {
  const quotation = await Quotation.findById(req.params.id)

  if (!quotation) {
    return res.status(404).json({ message: "Quotation not found" })
  }

  res.json(quotation)
}

// UPDATE QUOTATION
exports.updateQuotation = async (req, res) => {
  const quotation = await Quotation.findById(req.params.id)

  if (!quotation) {
    return res.status(404).json({ message: "Quotation not found" })
  }

  Object.assign(quotation, req.body)
  const updated = await quotation.save()

  res.json(updated)
}

// DELETE QUOTATION (ADMIN)
exports.deleteQuotation = async (req, res) => {
  const quotation = await Quotation.findById(req.params.id)

  if (!quotation) {
    return res.status(404).json({ message: "Quotation not found" })
  }

  await quotation.deleteOne()
  res.json({ message: "Quotation deleted successfully" })
}
