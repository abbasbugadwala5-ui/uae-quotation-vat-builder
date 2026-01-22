import Sidebar from "../components/Sidebar"
import MetricCard from "../components/MetricCard"
import RecentTable from "../components/RecentTable"
import MiniBars from "../components/MiniBars"
import ApprovalSummary from "../components/ApprovalSummary"
import VatSummary from "../components/VatSummary"
import { useEffect, useState } from "react"
import { authHeader } from "../utils/authHeader"

/* =========================
   SECTION HEADER (PREMIUM)
========================= */
const SectionHeader = ({ title, desc }) => (
  <div style={{ marginBottom: "26px" }}>
    <div
      style={{
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#9ca3af",
        marginBottom: "6px"
      }}
    >
      {title}
    </div>

    {desc && (
      <div
        style={{
          fontSize: "14px",
          color: "#64748b"
        }}
      >
        {desc}
      </div>
    )}
  </div>
)

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/stats", {
      headers: authHeader()
    })
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ display: "flex", background: "#070b14", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "48px 56px",
          maxWidth: "1600px"
        }}
      >
        {/* ================= HEADER ================= */}
        <div style={{ marginBottom: "44px" }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: 700,
              marginBottom: "6px"
            }}
          >
            Dashboard
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            UAE Quotation & VAT enterprise overview
          </p>
        </div>

        {/* ================= KPI METRICS ================= */}
        <SectionHeader
          title="Key Business Metrics"
          desc="High-level performance indicators"
        />

        {loading ? (
          <p style={{ color: "#94a3b8" }}>Loading metrics…</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
              marginBottom: "56px"
            }}
          >
            <MetricCard
              title="Total Quotations"
              value={stats?.totalQuotations ?? 0}
            />

            <MetricCard
              title="VAT Collected"
              value={`AED ${stats?.totalVat ?? 0}`}
            />

            <MetricCard
              title="Total Revenue"
              value={`AED ${stats?.totalRevenue ?? 0}`}
            />

            <MetricCard
              title="Pending Approvals"
              value="—"
              sub="Approval flow coming soon"
            />
          </div>
        )}

        {/* ================= QUOTATIONS ================= */}
        <SectionHeader
          title="Quotations Overview"
          desc="Recent quotations and approval status"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.3fr 1fr",
            gap: "32px",
            marginBottom: "56px"
          }}
        >
          <RecentTable />
          <ApprovalSummary data={stats?.approvals || { approved: 0, pending: 0, draft: 0 }} />

        </div>

        {/* ================= VAT & ANALYTICS ================= */}
        <SectionHeader
          title="Tax & Revenue Insights"
          desc="UAE VAT summary and revenue analytics"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "32px"
          }}
        >
        <VatSummary amount={stats?.totalVat || 0} />


          <MiniBars data={stats?.revenueTrend || []} />

        </div>
      </main>
    </div>
  )
}
