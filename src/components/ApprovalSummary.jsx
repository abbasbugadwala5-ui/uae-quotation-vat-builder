export default function ApprovalSummary() {
  const Row = ({ label, value, color }) => (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ fontSize: "12px", color: "var(--muted)" }}>{label}</div>
      <div style={{ fontSize: "20px", fontWeight: 700, color }}>{value}</div>
    </div>
  )

  return (
    <div style={{
      background: "linear-gradient(180deg,#111827,#0f172a)",
      border: "1px solid var(--border)",
      borderRadius: "18px",
      padding: "22px"
    }}>
      <h3 style={{ marginBottom: "16px" }}>Approval Summary</h3>
      <Row label="Approved" value="82" color="#22c55e" />
      <Row label="Pending" value="31" color="#f59e0b" />
      <Row label="Draft" value="15" color="#9ca3af" />
    </div>
  )
}
