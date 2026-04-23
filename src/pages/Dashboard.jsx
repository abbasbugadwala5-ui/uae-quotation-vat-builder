import Sidebar from "../components/Sidebar"
import MetricCard from "../components/MetricCard"
import RecentTable from "../components/RecentTable"
import MiniBars from "../components/MiniBars"
import ApprovalSummary from "../components/ApprovalSummary"
import VatSummary from "../components/VatSummary"
import { useEffect, useState } from "react"
import { authHeader } from "../utils/authHeader"

/* =========================
   SECTION HEADER
========================= */
const SectionHeader = ({ title, desc }) => (
  <div style={sectionHeader}>
    <div style={sectionKicker}>{title}</div>
    {desc && <div style={sectionDesc}>{desc}</div>}
  </div>
)

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  const isMobile = window.innerWidth < 900

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/dashboard/stats`, {
      headers: authHeader()
    })
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div style={layout}>
      {!isMobile && <Sidebar />}

      <main style={main}>
        {/* HEADER */}
        <header style={pageHeader}>
          <h1 style={pageTitle}>Dashboard</h1>
          <p style={pageSub}>
            UAE Quotation & VAT enterprise overview
          </p>
        </header>

        {/* KPI */}
        <SectionHeader
          title="KEY BUSINESS METRICS"
          desc="High-level performance indicators"
        />

        {loading ? (
          <p style={{ color: "var(--muted)" }}>Loading metrics…</p>
        ) : (
          <div style={kpiGrid}>
            <MetricCard title="Total Quotations" value={stats?.totalQuotations ?? 0} />
            <MetricCard title="VAT Collected" value={`AED ${stats?.totalVat ?? 0}`} />
            <MetricCard title="Total Revenue" value={`AED ${stats?.totalRevenue ?? 0}`} />
            <MetricCard title="Pending Approvals" value="—" sub="Coming soon" />
          </div>
        )}

        {/* QUOTATIONS */}
        <SectionHeader
          title="QUOTATIONS OVERVIEW"
          desc="Recent quotations and approval status"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "2.3fr 1fr",
            gap: "24px",
            marginBottom: "48px"
          }}
        >
          <RecentTable />
          <ApprovalSummary
            data={stats?.approvals || { approved: 0, pending: 0, draft: 0 }}
          />
        </div>

        {/* VAT */}
        <SectionHeader
          title="TAX & REVENUE INSIGHTS"
          desc="UAE VAT summary and revenue analytics"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
            gap: "24px"
          }}
        >
          <VatSummary amount={stats?.totalVat || 0} />
          <MiniBars data={stats?.revenueTrend || []} />
        </div>
      </main>
    </div>
  )
}

/* ================= STYLES ================= */

const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "var(--bg)"
}

const main = {
  flex: 1,
  padding: "24px",
  maxWidth: "1400px",
  margin: "0 auto"
}

/* HEADER */
const pageHeader = {
  marginBottom: "40px"
}

const pageTitle = {
  fontSize: "28px",
  fontWeight: 800,
  marginBottom: "6px"
}

const pageSub = {
  fontSize: "14px",
  color: "var(--muted)"
}

/* KPI GRID */
const kpiGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginBottom: "48px"
}

/* SECTION HEADER */
const sectionHeader = {
  marginBottom: "20px",
  padding: "12px 14px",
  borderLeft: "4px solid var(--accent)",
  background: "rgba(255,255,255,0.03)",
  borderRadius: "10px"
}

const sectionKicker = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  color: "var(--muted)",
  marginBottom: "4px"
}

const sectionDesc = {
  fontSize: "13px",
  color: "var(--muted)"
}
