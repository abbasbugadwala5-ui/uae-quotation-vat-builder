import { NavLink } from "react-router-dom"

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "20px" }}>
    <div
      style={{
        fontSize: "11px",
        letterSpacing: "0.08em",
        color: "#64748b",
        marginBottom: "8px"
      }}
    >
      {title}
    </div>
    {children}
  </div>
)

const Item = ({ to, label }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      display: "block",
      padding: "10px 14px",
      borderRadius: "8px",
      marginBottom: "6px",
      fontSize: "14px",
      fontWeight: 500,
      color: isActive ? "#22c55e" : "#cbd5f5",
      background: isActive ? "rgba(34,197,94,0.12)" : "transparent",
      textDecoration: "none"
    })}
  >
    {label}
  </NavLink>
)

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#0b1220",
        borderRight: "1px solid #1f2937",
        padding: "22px 18px"
      }}
    >
      {/* BRAND */}
      <div style={{ marginBottom: "26px" }}>
        <div style={{ fontWeight: 700, fontSize: "16px" }}>
          UAE Quotation
        </div>
        <div style={{ fontSize: "12px", color: "#94a3b8" }}>
          Enterprise System
        </div>
      </div>

      {/* MAIN */}
      <Section title="MAIN">
        <Item to="/" label="Dashboard" />
      </Section>

      {/* QUOTATIONS */}
      <Section title="QUOTATIONS">
        <Item to="/create" label="Create Quotation" />
        <Item to="/quotations" label="All Quotations" />
      </Section>

      {/* FINANCE */}
      <Section title="FINANCE">
        <Item to="/vat" label="VAT Summary" />
      </Section>

      {/* SYSTEM */}
      <Section title="SYSTEM">
        <Item to="/settings" label="Settings" />
      </Section>
    </aside>
  )
}
