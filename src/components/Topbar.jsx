export default function Topbar() {
  return (
    <div
      style={{
        height: "64px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      {/* App Name */}
      <h3 style={{ margin: 0, fontWeight: 600 }}>
        UAE Quotation Manager
      </h3>

      {/* Right Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <select
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            fontSize: "13px"
          }}
        >
          <option>This Month</option>
          <option>Last Month</option>
        </select>

        {/* Avatar */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#0f172a",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 600
          }}
        >
          A
        </div>
      </div>
    </div>
  )
}
