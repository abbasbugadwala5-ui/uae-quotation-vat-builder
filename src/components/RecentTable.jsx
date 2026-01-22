import { useEffect, useState } from "react"
import { authHeader } from "../utils/authHeader"

export default function RecentTable() {
  const [quotations, setQuotations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/quotations", {
      headers: authHeader()
    })
      .then(res => res.json())
      .then(data => {
        setQuotations(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p style={{ color: "#94a3b8" }}>Loading recent quotations…</p>
  }

  if (!quotations.length) {
    return <p style={{ color: "#94a3b8" }}>No quotations yet</p>
  }

  return (
    <div style={card}>
      <h3 style={{ marginBottom: "14px" }}>Recent Quotations</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ color: "#9ca3af", textAlign: "left" }}>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {quotations.map(q => (
            <tr key={q._id} style={{ borderTop: "1px solid #1f2937" }}>
              <td>{q.clientName}</td>
              <td>AED {q.grandTotal}</td>
              <td>{q.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const card = {
  background: "#0b1220",
  border: "1px solid #1f2937",
  borderRadius: "14px",
  padding: "20px"
}
