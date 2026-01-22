import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  FilePlus,
  Files,
  Percent,
  Settings,
  LogOut
} from "lucide-react"
import { logout } from "../utils/auth"

/* ===== NAV ITEM ===== */
const Item = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    style={({ isActive }) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "14px 18px",
      borderRadius: "14px",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: 600,
      color: isActive ? "#22c55e" : "#cbd5f5",
      background: isActive
        ? "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(34,197,94,0.08))"
        : "transparent",
      boxShadow: isActive
        ? "0 10px 30px rgba(34,197,94,0.25), inset 0 0 0 1px rgba(34,197,94,0.4)"
        : "none",
      textDecoration: "none",
      transition: "all 0.25s ease",
      transform: isActive ? "translateX(4px)" : "none"
    })}
  >
    <Icon size={18} />
    {label}
  </NavLink>
)

/* ===== SECTION ===== */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "28px" }}>
    <div style={sectionTitle}>{title}</div>
    {children}
  </div>
)

export default function Sidebar() {
  return (
    <aside style={sidebar}>
      {/* BRAND */}
      <div style={brand}>
        <div style={brandTitle}>UAE Quotation</div>
        <div style={brandSub}>Enterprise System</div>
      </div>

      <Section title="MAIN">
        <Item to="/" icon={LayoutDashboard} label="Dashboard" />
      </Section>

      <Section title="QUOTATIONS">
        <Item to="/create" icon={FilePlus} label="Create Quotation" />
        <Item to="/quotations" icon={Files} label="All Quotations" />
      </Section>

      <Section title="FINANCE">
        <Item to="/vat" icon={Percent} label="VAT Summary" />
      </Section>

      <Section title="SYSTEM">
        <Item to="/settings" icon={Settings} label="Settings" />
      </Section>

      {/* LOGOUT */}
      <button onClick={logout} style={logoutBtn}>
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  )
}

/* ===== STYLES ===== */

const sidebar = {
  width: "260px",
  minHeight: "100vh",
  padding: "28px 22px",
  background: `
    radial-gradient(circle at top left, rgba(34,197,94,0.08), transparent 40%),
    linear-gradient(180deg, #020617, #020617)
  `,
  borderRight: "1px solid rgba(148,163,184,0.15)",
  boxShadow: "6px 0 40px rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
}

const brand = {
  marginBottom: "36px",
}

const brandTitle = {
  fontSize: "18px",
  fontWeight: 900,
  letterSpacing: "-0.03em",
}

const brandSub = {
  fontSize: "12px",
  color: "#94a3b8",
}

const sectionTitle = {
  fontSize: "11px",
  letterSpacing: "0.14em",
  color: "#64748b",
  marginBottom: "12px",
  fontWeight: 700,
}

const logoutBtn = {
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "14px 18px",
  borderRadius: "14px",
  background: "linear-gradient(135deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05))",
  border: "1px solid rgba(239,68,68,0.35)",
  color: "#f87171",
  fontWeight: 700,
  cursor: "pointer",
  transition: "all 0.25s ease",
}
