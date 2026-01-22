const Quotation = require("../models/Quotation")

exports.getDashboardStats = async (req, res) => {
  const quotations = await Quotation.find()

  const totalQuotations = quotations.length

  let totalRevenue = 0
  let totalVat = 0

  let approved = 0
  let pending = 0
  let draft = 0

  quotations.forEach(q => {
    totalRevenue += q.grandTotal || 0
    totalVat += q.vatAmount || 0

    if (q.status === "Approved") approved++
    else if (q.status === "Pending") pending++
    else draft++
  })

  res.json({
    totalQuotations,
    totalRevenue,
    totalVat,
    approvals: {
      approved,
      pending,
      draft
    },
    revenueTrend: quotations.slice(-6).map(q => q.grandTotal)
  })
}
