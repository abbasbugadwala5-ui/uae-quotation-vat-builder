import VatSummary from "../components/VatSummary"
import Sidebar from "../components/sidebar"

export default function VatSummaryPage() {
  return (
    <div style={{ display: "flex", background: "#070b14", minHeight: "100vh" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <h1 style={{ marginBottom: "8px" }}>VAT Summary</h1>
        <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
          UAE VAT (5%) overview and monthly liability
        </p>

        <div style={{ maxWidth: "420px" }}>
          <VatSummary />
        </div>
      </main>
    </div>
  )
}
