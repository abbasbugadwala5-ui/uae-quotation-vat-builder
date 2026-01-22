export default function MetricCard({ title, value, sub }) {
  return (
    <div style={card}>
      <div style={label}>{title}</div>
      <div style={valueStyle}>{value}</div>
      {sub && <div style={subStyle}>{sub}</div>}
    </div>
  )
}

const card = {
  background: "var(--card)",
  borderRadius: "var(--radius)",
  padding: "22px",
  borderLeft: "4px solid var(--accent)"
}

const label = {
  fontSize: "12px",
  color: "var(--muted)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "8px"
}

const valueStyle = {
  fontSize: "32px",
  fontWeight: 800
}

const subStyle = {
  marginTop: "6px",
  fontSize: "12px",
  color: "var(--muted)"
}
