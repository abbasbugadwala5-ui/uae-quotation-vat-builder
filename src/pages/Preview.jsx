import { useLocation, useNavigate } from "react-router-dom"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"



export default function Preview() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return (
      <div style={{ padding: "36px" }}>
        <h2>No quotation data</h2>
        <button onClick={() => navigate("/quotations")}>
          Go back
        </button>
      </div>
    )
  }

  const {
    clientName,
    clientEmail,
    items,
    subTotal,
    vatAmount,
    grandTotal,
    status,
    createdAt,
  } = state
 const downloadPDF = () => {
  const doc = new jsPDF()

  doc.setFontSize(16)
  doc.text("QUOTATION", 14, 20)

  doc.setFontSize(10)
  doc.text(`Client: ${clientName}`, 14, 30)
  if (clientEmail) {
    doc.text(`Email: ${clientEmail}`, 14, 36)
  }
  doc.text(`Date: ${new Date(createdAt).toLocaleDateString()}`, 14, 42)

  autoTable(doc, {
    head: [["Description", "Qty", "Rate", "Total"]],
    body: items.map(i => [
      i.description,
      i.quantity,
      `AED ${i.rate}`,
      `AED ${i.total}`
    ]),
    startY: 50,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [34, 197, 94] }
  })

  const finalY = doc.lastAutoTable.finalY + 10

  doc.text(`Subtotal: AED ${subTotal}`, 14, finalY)
  doc.text(`VAT (5%): AED ${vatAmount}`, 14, finalY + 6)
  doc.text(`Grand Total: AED ${grandTotal}`, 14, finalY + 12)

  doc.save(`Quotation-${clientName}.pdf`)
}


 

  return (
    <div style={{ padding: "36px", maxWidth: "900px" }}>
      <h1>Quotation Preview</h1>
      <p style={{ color: "#94a3b8" }}>
        Created on {new Date(createdAt).toLocaleDateString()}
      </p>

      {/* Client */}
      <section style={card}>
        <h3>Client Details</h3>
        <p><strong>Name:</strong> {clientName}</p>
        {clientEmail && <p><strong>Email:</strong> {clientEmail}</p>}
        <p><strong>Status:</strong> {status}</p>
      </section>

      {/* Items */}
      <section style={{ ...card, marginTop: "20px" }}>
        <h3>Items</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th align="left">Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i._id}>
                <td>{i.description}</td>
                <td align="center">{i.quantity}</td>
                <td align="center">AED {i.rate}</td>
                <td align="center">AED {i.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Totals */}
      <section style={{ ...card, marginTop: "20px", maxWidth: "420px" }}>
        <Row label="Subtotal" value={`AED ${subTotal}`} />
        <Row label="VAT (5%)" value={`AED ${vatAmount}`} />
        <Row label="Grand Total" value={`AED ${grandTotal}`} bold />
      </section>

      {/* Actions */}
  <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
  <button onClick={downloadPDF} style={btn}>
    Download PDF
  </button>

  <button onClick={() => navigate("/quotations")} style={btn}>
    Back to List
  </button>
</div>

    </div>
  )
}

const card = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "20px"
}


const Row = ({ label, value, bold }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
    <span>{label}</span>
    <strong style={{ fontWeight: bold ? 700 : 500 }}>{value}</strong>
  </div>
)

const btn = {
  padding: "12px 16px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border)",
  background: "#070b14",
  color: "var(--text)",
  cursor: "pointer"
}
