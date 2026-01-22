const Quotation = require("../models/Quotation")

exports.getVatSummary = async (req, res) => {
  const quotations = await Quotation.find()

  const totalVat = quotations.reduce((sum, q) => sum + q.vatAmount, 0)
  const totalTaxable = quotations.reduce((sum, q) => sum + q.subTotal, 0)

  res.json({
    totalVat,
    totalTaxable,
    quotationCount: quotations.length,
  })
}
