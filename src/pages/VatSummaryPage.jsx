import VatSummary from "../components/VatSummary"
import Sidebar from "../components/Sidebar"
import BackToDashboard from "../components/BackToDashboard"

export default function VatSummaryPage() {
  return (
    <div style={{ display: "flex", background: "var(--bg)", minHeight: "100vh" }}>
      <Sidebar />

      <main style={pageWrap}>
        <div style={container}>

          {/* BACK */}
          <BackToDashboard />

          {/* HEADER */}
          <header style={header}>
            <div style={kicker}>TAX REPORTING</div>
            <h1 style={heading}>VAT Summary</h1>
            <p style={subHeading}>
              Overview of UAE VAT (5%) liability and collected tax
            </p>
          </header>

          {/* CONTENT */}
          <section style={section}>
            <div style={sectionHeaderBox}>
              <h3 style={sectionTitle}>VAT Overview</h3>
              <p style={helperText}>
                Total VAT collected from all approved quotations.
              </p>
            </div>

            <div style={vatWrap}>
              <VatSummary amount={0} />
            </div>

            <p style={note}>
              This summary is calculated automatically based on quotation data.
            </p>
          </section>

        </div>
      </main>
    </div>
  )
}

/* ================= STYLES ================= */

const pageWrap = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  padding: "48px 20px",
}

const container = {
  width: "100%",
  maxWidth: "1100px",
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

/* HEADING BOX */
const sectionHeaderBox = {
  padding: "14px 16px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  marginBottom: "20px",
}

const sectionTitle = {
  fontWeight: 700,
  marginBottom: "4px",
}

const helperText = {
  fontSize: "13px",
  color: "var(--muted)",
}

/* VAT CARD WRAP */
const vatWrap = {
  maxWidth: "420px",
}

const note = {
  fontSize: "12px",
  color: "var(--muted)",
  marginTop: "14px",
}
