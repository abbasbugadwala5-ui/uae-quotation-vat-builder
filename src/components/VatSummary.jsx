export default function VatSummary({ amount }) {
  return (
    <div style={card}>
      <div style={accentHeader}>
        <div style={accentLine}></div>
        <h4 style={{ margin: 0 }}>VAT Summary</h4>
      </div>

      <div style={amountStyle}>
        AED {amount}
      </div>

      <div style={caption}>
        5% UAE VAT collected
      </div>
    </div>
  )
}

/* ================= STYLES ================= */

const card = {
  background: "linear-gradient(180deg,#0f172a,#020617)",
  borderRadius: "var(--radius-lg)",
  padding: "24px",
  border: "1px solid var(--border)",
}

const accentHeader = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginBottom: "16px",
}

const accentLine = {
  width: "4px",
  height: "18px",
  background: "var(--accent)",
  borderRadius: "4px",
}

const amountStyle = {
  fontSize: "32px",
  fontWeight: 800,
  marginBottom: "6px",
}

const caption = {
  fontSize: "13px",
  color: "var(--muted)",
}
