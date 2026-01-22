import { useNavigate } from "react-router-dom"

export default function BackToDashboard() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/")}
      style={btn}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "transparent"
      }}
    >
      ← Back to Dashboard
    </button>
  )
}

/* ================= STYLES ================= */

const btn = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",

  padding: "10px 14px",
  marginBottom: "20px",

  background: "transparent",
  border: "1px solid var(--border)",
  borderRadius: "10px",

  color: "var(--text)",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.02em",

  cursor: "pointer",
  transition: "all 0.15s ease"
}
