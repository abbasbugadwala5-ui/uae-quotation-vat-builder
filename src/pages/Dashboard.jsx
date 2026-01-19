import Sidebar from "../components/sidebar"
import MetricCard from "../components/MetricCard"
import RecentTable from "../components/RecentTable"
import MiniBars from "../components/MiniBars"
import ApprovalSummary from "../components/ApprovalSummary"
import VatSummary from "../components/VatSummary"

/* Section wrapper for proper spacing & separation */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "40px" }}>
    <h3
      style={{
        marginBottom: "18px",
        fontSize: "15px",
        fontWeight: 600,
        color: "#e5e7eb",
        letterSpacing: "0.02em"
      }}
    >
      {title}
    </h3>
    {children}
  </div>
)

export default function Dashboard() {
  return (
    <div style={{ display: "flex", background: "#070b14", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "44px 48px",
          maxWidth: "1500px"
        }}
      >
        {/* PAGE HEADER */}
        <div style={{ marginBottom: "36px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "8px"
            }}
          >
            Dashboard
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "14px" }}>
            UAE Quotation & VAT Enterprise Overview
          </p>
        </div>

        {/* KPI METRICS */}
        <Section title="Key Business Metrics">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px"
            }}
          >
            <MetricCard title="Total Quotations" value="128" sub="This Month" />
            <MetricCard title="Pending Approvals" value="18" />
            <MetricCard title="VAT Collected" value="AED 24,560" />
            <MetricCard title="Total Revenue" value="AED 512,300" />
          </div>
        </Section>

        {/* QUOTATIONS + APPROVALS */}
        <Section title="Quotations Overview">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2.2fr 1fr",
              gap: "28px"
            }}
          >
            <RecentTable />
            <ApprovalSummary />
          </div>
        </Section>

        {/* VAT + ANALYTICS */}
        <Section title="Tax & Revenue Insights">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "28px"
            }}
          >
            <VatSummary />
            <MiniBars />
          </div>
        </Section>
      </main>
    </div>
  )
}
