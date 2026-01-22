import { useState } from "react"
import ItemsTable from "../components/ItemsTable"
import { calculateVAT } from "../utils/vatCalculator"
import { useNavigate } from "react-router-dom"
import { authHeader } from "../utils/authHeader"
import BackToDashboard from "../components/BackToDashboard"



export default function CreateQuotation() {
  const [client, setClient] = useState("")
  const [items, setItems] = useState([{ name: "", qty: 1, price: 0 }])
  const navigate = useNavigate()

  const handleCreateQuotation = async () => {
    const formattedItems = items.map(i => ({
      description: i.name,
      quantity: i.qty,
      rate: i.price,
    }))

    const quotationData = {
      clientName: client,
      items: formattedItems,
    }

    try {
      const res = await fetch("http://localhost:5000/api/quotations", {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(quotationData),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message || "Failed to create quotation")
        return
      }

      alert("Quotation created successfully ✅")
      navigate("/preview", { state: data })
    } catch {
      alert("Server error")
    }
  }

  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const { vat, total } = calculateVAT(subtotal)

  return (
    <div style={pageWrap}>
      <div style={container}>
<BackToDashboard />

        {/* ================= PAGE HEADER ================= */}
        <header style={header}>
          <div style={kicker}>UAE VAT QUOTATION</div>
          <h1 style={heading}>Create Quotation</h1>
          <p style={subHeading}>
            Generate a legally compliant quotation with automatic VAT calculation
          </p>

          <div style={trustRow}>
            <span>✔ VAT 5% compliant</span>
            <span>✔ UAE format</span>
            <span>✔ PDF ready</span>
          </div>
        </header>

        {/* ================= CLIENT INFO ================= */}
        <section style={section}>
          <div style={sectionHeaderBox}>
            <h3 style={sectionTitle}>Client Information</h3>
            <p style={helperText}>
              Enter client name exactly as per trade license or official documents.
            </p>
          </div>

          <input
            placeholder="Client / Company Legal Name"
            value={client}
            onChange={e => setClient(e.target.value)}
            style={input}
          />
        </section>

        {/* ================= ITEMS ================= */}
        <section style={section}>
          <div style={accentHeader}>
            <div style={accentLine}></div>
            <div>
              <h3 style={sectionTitle}>Quotation Line Items</h3>
              <p style={helperText}>
                Add services or products. Prices are exclusive of VAT.
              </p>
            </div>
          </div>

          <div style={tableContainer}>
            <ItemsTable items={items} setItems={setItems} />
          </div>

          <p style={mobileHint}>
            Tip: Scroll horizontally to view full table on mobile.
          </p>
        </section>

        {/* ================= SUMMARY ================= */}
        <section style={summarySection}>
          <div style={summaryCard}>
            <div style={accentHeader}>
              <div style={accentLine}></div>
              <h4 style={{ margin: 0 }}>Financial Summary</h4>
            </div>

            <Row label="Subtotal" value={`AED ${subtotal.toFixed(2)}`} />
            <Row label="VAT (5%)" value={`AED ${vat.toFixed(2)}`} />
            <Row label="Total Payable" value={`AED ${total.toFixed(2)}`} bold />
          </div>
        </section>

        {/* ================= ACTION ================= */}
        <section style={actionSection}>
          <button
            onClick={handleCreateQuotation}
            style={primaryBtn}
            onMouseEnter={e => (e.currentTarget.style.background = "#15803d")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          >
            Create Quotation
          </button>

          <p style={footerNote}>
            A PDF quotation will be generated after creation.
          </p>
        </section>

      </div>
    </div>
  )
}

/* ================= STYLES ================= */

const pageWrap = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
}

const container = {
  width: "100%",
  maxWidth: "1100px",
  padding: "32px 18px",
}

/* HEADER */
const header = {
  textAlign: "center",
  marginBottom: "56px",
}

const kicker = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  color: "var(--muted)",
  fontWeight: 700,
  marginBottom: "8px",
}

const heading = {
  fontSize: "32px",
  fontWeight: 800,
  marginBottom: "10px",
}

const subHeading = {
  color: "var(--muted)",
  maxWidth: "520px",
  margin: "0 auto 14px",
}

const trustRow = {
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  fontSize: "12px",
  color: "var(--muted)",
  flexWrap: "wrap",
}

/* SECTIONS */
const section = {
  marginBottom: "48px",
  padding: "24px",
  background: "linear-gradient(180deg,#0b1220,#020617)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
}

/* HEADING STYLES */
const sectionHeaderBox = {
  padding: "14px 16px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  marginBottom: "18px",
}

const accentHeader = {
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  marginBottom: "18px",
}

const accentLine = {
  width: "4px",
  borderRadius: "4px",
  background: "var(--accent)",
  marginTop: "6px",
}

const sectionTitle = {
  fontWeight: 700,
  marginBottom: "4px",
}

const helperText = {
  fontSize: "13px",
  color: "var(--muted)",
}

/* INPUT */
const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border)",
  background: "#050b16",
  color: "var(--text)",
  fontSize: "14px",
}

/* TABLE */
const tableContainer = {
  overflowX: "auto",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "12px",
}

const mobileHint = {
  fontSize: "12px",
  color: "var(--muted)",
  marginTop: "8px",
}

/* SUMMARY */
const summarySection = {
  display: "flex",
  justifyContent: "flex-end",
}

const summaryCard = {
  background: "linear-gradient(180deg,#0f172a,#020617)",
  borderRadius: "var(--radius-lg)",
  padding: "24px",
  maxWidth: "420px",
  width: "100%",
  borderLeft: "4px solid var(--accent)",
}

/* ACTION */
const actionSection = {
  marginTop: "48px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}

const primaryBtn = {
  width: "100%",
  maxWidth: "280px",
  padding: "14px 24px",
  borderRadius: "var(--radius-sm)",
  border: "none",
  background: "var(--accent)",
  color: "#052e16",
  fontWeight: 800,
  fontSize: "14px",
  letterSpacing: "0.04em",
  cursor: "pointer",
  transition: "background 0.15s ease",
}

const footerNote = {
  fontSize: "12px",
  color: "var(--muted)",
  marginTop: "10px",
  maxWidth: "280px",
  textAlign: "right",
}

/* ROW */
const Row = ({ label, value, bold }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
    <span style={{ color: "var(--muted)" }}>{label}</span>
    <strong style={{ fontWeight: bold ? 700 : 500 }}>{value}</strong>
  </div>
)
