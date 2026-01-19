import Sidebar from "../components/sidebar"

export default function Settings() {
  return (
    <div style={{ display: "flex", background: "#070b14", minHeight: "100vh" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px", maxWidth: "900px" }}>
        <h1 style={{ marginBottom: "8px" }}>Settings</h1>
        <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
          System configuration and business preferences
        </p>

        <div style={card}>
          <h3 style={title}>Business Settings</h3>
          <Item label="Company Name" value="Your Company LLC" />
          <Item label="Currency" value="AED (UAE Dirham)" />
          <Item label="VAT Rate" value="5%" />
          <Item label="VAT Registration No." value="—" />
        </div>
      </main>
    </div>
  )
}

const card = {
  background: "#0b1220",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "24px"
}

const title = {
  marginBottom: "16px",
  fontSize: "16px",
  fontWeight: 600
}

const Item = ({ label, value }) => (
  <div style={{ marginBottom: "12px" }}>
    <div style={{ fontSize: "12px", color: "var(--muted)" }}>{label}</div>
    <div style={{ fontWeight: 500 }}>{value}</div>
  </div>
)
