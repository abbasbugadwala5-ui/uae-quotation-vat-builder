import { useState } from "react"
import ItemsTable from "../components/ItemsTable"
import { calculateVAT } from "../utils/vatCalculator"
import { useNavigate } from "react-router-dom"

export default function CreateQuotation() {
  const [client, setClient] = useState("")
  const [items, setItems] = useState([{ name: "", qty: 1, price: 0 }])
  const navigate = useNavigate()

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const { vat, total } = calculateVAT(subtotal)

  return (
    <div style={{ padding: "36px", maxWidth: "1100px" }}>
      <h1>Create Quotation</h1>
      <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
        Create a UAE-compliant quotation with automatic 5% VAT calculation
      </p>

      {/* Client Info */}
      <div style={card}>
        <h3>Client Information</h3>
        <input
          placeholder="Client / Company Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          style={input}
        />
      </div>

      {/* Items */}
      <div style={{ marginTop: "24px" }}>
        <ItemsTable items={items} setItems={setItems} />
      </div>

      {/* Summary */}
      <div style={{ ...card, maxWidth: "420px", marginTop: "24px" }}>
        <Row label="Subtotal" value={`AED ${subtotal.toFixed(2)}`} />
        <Row label="VAT (5%)" value={`AED ${vat.toFixed(2)}`} />
        <Row label="Total" value={`AED ${total.toFixed(2)}`} bold />
      </div>

      <button
        onClick={() => navigate("/preview")}
        style={primaryBtn}
      >
        Preview Quotation
      </button>
    </div>
  )
}

const card = {
  background: "#0b1220",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "20px"
}

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "8px",
  border: "1px solid #1f2937",
  background: "#070b14",
  color: "#e5e7eb"
}

const Row = ({ label, value, bold }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
    <span style={{ color: "var(--muted)" }}>{label}</span>
    <strong style={{ fontWeight: bold ? 700 : 500 }}>{value}</strong>
  </div>
)

const primaryBtn = {
  marginTop: "24px",
  padding: "12px 18px",
  borderRadius: "10px",
  border: "none",
  background: "#22c55e",
  color: "#052e16",
  fontWeight: 700
}
