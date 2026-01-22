export default function ApprovalSummary({ data }) {
  const Row = ({ label, value, color }) => (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ fontSize: "12px", color: "var(--muted)" }}>{label}</div>
      <div style={{ fontSize: "22px", fontWeight: 800, color }}>{value}</div>
    </div>
  )

  return (
    <div style={card}>
      <h3 style={{ marginBottom: "18px", fontWeight: 600 }}>
        Approval Summary
      </h3>

      <Row label="Approved" value={data.approved} color="#22c55e" />
      <Row label="Pending" value={data.pending} color="#f59e0b" />
      <Row label="Draft" value={data.draft} color="var(--muted)" />
    </div>
  )
}

const card = {
  background: "var(--card)",
  borderRadius: "var(--radius)",
  padding: "22px"
}
