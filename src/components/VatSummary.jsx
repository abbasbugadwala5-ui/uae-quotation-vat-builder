export default function VatSummary() {
  return (
    <div style={{
      background: "linear-gradient(180deg,#111827,#0f172a)",
      border: "1px solid var(--border)",
      borderRadius: "18px",
      padding: "22px"
    }}>
      <h3 style={{ marginBottom: "16px" }}>VAT Overview (5%)</h3>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ fontSize: "12px", color: "var(--muted)" }}>
          VAT Collected
        </div>
        <div style={{ fontSize: "22px", fontWeight: 700 }}>
          AED 24,560
        </div>
      </div>

      <div>
        <div style={{ fontSize: "12px", color: "var(--muted)" }}>
          VAT Payable This Month
        </div>
        <div style={{ fontSize: "18px", fontWeight: 600 }}>
          AED 6,430
        </div>
      </div>
    </div>
  )
}
