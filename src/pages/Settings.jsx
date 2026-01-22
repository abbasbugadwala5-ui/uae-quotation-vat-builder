export default function Settings() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div style={{ padding: "36px", maxWidth: "700px" }}>
      <h1>Settings</h1>

      {/* Company Info */}
      <section style={card}>
        <h3>Company Information</h3>
        <Row label="Company Name" value="ABC Trading LLC" />
        <Row label="TRN Number" value="100123456700003" />
        <Row label="Currency" value="AED" />
        <Row label="VAT Rate" value="5%" />
      </section>

      {/* Account */}
      <section style={{ ...card, marginTop: "20px" }}>
        <h3>Account Information</h3>
        <Row label="Name" value={user?.name} />
        <Row label="Email" value={user?.email} />
        <Row label="Role" value={user?.role} />
      </section>
    </div>
  )
}

const card = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "20px"
}

const Row = ({ label, value }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
    <span style={{ color: "var(--muted)" }}>{label}</span>
    <strong>{value}</strong>
  </div>
)
