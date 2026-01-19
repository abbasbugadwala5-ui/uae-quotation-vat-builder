import StatusBadge from "../components/StatusBadge"

const data = [
  { id: "QT-1023", client: "Al Noor Trading", amount: "AED 12,500", status: "Pending" },
  { id: "QT-1022", client: "Desert Build LLC", amount: "AED 8,900", status: "Approved" },
  { id: "QT-1021", client: "BlueWave Services", amount: "AED 4,300", status: "Draft" }
]

export default function AllQuotations() {
  return (
    <div style={{ padding: "36px" }}>
      <h1>All Quotations</h1>
      <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
        Manage and track all quotations created in the system
      </p>

      <div style={card}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ color: "var(--muted)", textAlign: "left" }}>
              <th>Quotation</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((q) => (
              <tr key={q.id} style={{ borderTop: "1px solid #1f2937" }}>
                <td>{q.id}</td>
                <td>{q.client}</td>
                <td>{q.amount}</td>
                <td><StatusBadge status={q.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const card = {
  background: "#0b1220",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "20px"
}
