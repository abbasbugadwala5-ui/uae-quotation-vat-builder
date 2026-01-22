import { useEffect, useState } from "react"
import StatusBadge from "../components/StatusBadge"
import BackToDashboard from "../components/BackToDashboard"
import { authHeader } from "../utils/authHeader"

export default function AllQuotations() {
  const [quotations, setQuotations] = useState([])
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    fetchQuotations()
  }, [])

  const fetchQuotations = () => {
    fetch("http://localhost:5000/api/quotations", {
      headers: authHeader(),
    })
      .then(res => res.json())
      .then(data => setQuotations(data))
      .catch(err => console.error(err))
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quotation?\nThis action cannot be undone."
    )

    if (!confirmDelete) return

    try {
      setDeletingId(id)

      const res = await fetch(
        `http://localhost:5000/api/quotations/${id}`,
        {
          method: "DELETE",
          headers: authHeader(),
        }
      )

      if (!res.ok) {
        alert("Failed to delete quotation")
        return
      }

      // Remove from UI instantly
      setQuotations(prev => prev.filter(q => q._id !== id))
    } catch (err) {
      alert("Server error while deleting")
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div style={pageWrap}>
      <div style={container}>

        {/* BACK */}
        <BackToDashboard />

        {/* HEADER */}
        <header style={header}>
          <div style={kicker}>QUOTATIONS</div>
          <h1 style={heading}>All Quotations</h1>
          <p style={subHeading}>
            Manage, review, and delete quotations in the system
          </p>
        </header>

        {/* TABLE */}
        <section style={section}>
          <div style={sectionHeader}>
            <h3 style={sectionTitle}>Quotation List</h3>
            <p style={helperText}>
              Use actions to manage quotation lifecycle.
            </p>
          </div>

          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr>
                  <th align="left">Quotation</th>
                  <th align="left">Client</th>
                  <th align="left">Amount</th>
                  <th align="left">Status</th>
                  <th align="right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {quotations.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={empty}>
                      No quotations found
                    </td>
                  </tr>
                ) : (
                  quotations.map(q => (
                    <tr key={q._id} style={row}>
                      <td style={mono}>
                        {q._id.slice(-6).toUpperCase()}
                      </td>
                      <td>{q.clientName}</td>
                      <td style={amount}>AED {q.grandTotal}</td>
                      <td>
                        <StatusBadge status={q.status || "Draft"} />
                      </td>
                      <td align="right">
                        <button
                          onClick={() => handleDelete(q._id)}
                          style={deleteBtn}
                          disabled={deletingId === q._id}
                          title="Delete quotation"
                        >
                          {deletingId === q._id ? "…" : "🗑"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
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
  maxWidth: "1400px",
  padding: "32px 20px",
}

/* HEADER */
const header = {
  textAlign: "center",
  marginBottom: "48px",
}

const kicker = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  color: "var(--muted)",
  fontWeight: 700,
  marginBottom: "6px",
}

const heading = {
  fontSize: "32px",
  fontWeight: 800,
  marginBottom: "6px",
}

const subHeading = {
  color: "var(--muted)",
  maxWidth: "520px",
  margin: "0 auto",
}

/* SECTION */
const section = {
  padding: "24px",
  background: "linear-gradient(180deg,#0b1220,#020617)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
}

const sectionHeader = {
  marginBottom: "18px",
  padding: "14px 16px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
}

const sectionTitle = {
  fontWeight: 700,
  marginBottom: "4px",
}

const helperText = {
  fontSize: "13px",
  color: "var(--muted)",
}

/* TABLE */
const tableWrap = {
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
}

const table = {
  width: "100%",
  minWidth: "800px",
  borderCollapse: "collapse",
}

const row = {
  borderTop: "1px solid var(--border)",
  height: "56px",
}

const empty = {
  padding: "20px",
  color: "var(--muted)",
  textAlign: "center",
}

const mono = {
  fontFamily: "monospace",
  fontSize: "13px",
}

const amount = {
  fontWeight: 600,
}

/* DELETE BUTTON */
const deleteBtn = {
  background: "transparent",
  border: "1px solid rgba(239,68,68,0.4)",
  color: "#ef4444",
  borderRadius: "8px",
  padding: "6px 10px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "all 0.15s ease",
}
