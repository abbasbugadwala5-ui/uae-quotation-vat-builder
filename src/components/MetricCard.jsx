export default function MetricCard({ title, value, sub }) {
  return (
    <div
      style={{
        background:"linear-gradient(180deg,#111827,#0f172a)",
        border:"1px solid var(--border)",
        borderRadius:"18px",
        padding:"26px",
        boxShadow:"0 40px 80px rgba(0,0,0,.45)",
        transition:"all .35s ease"
      }}
      onMouseEnter={e=>e.currentTarget.style.transform="translateY(-8px)"}
      onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
    >
      <div style={{
        height:"3px", width:"42px", borderRadius:"999px",
        background:"linear-gradient(90deg,var(--accent),#34d399)",
        marginBottom:"14px"
      }} />
      <p style={{fontSize:"12px", color:"var(--muted)", marginBottom:"10px"}}>
        {title}
      </p>
      <h2 style={{fontSize:"30px", fontWeight:700}}>{value}</h2>
      {sub && <p style={{fontSize:"12px", color:"var(--muted)", marginTop:"12px"}}>{sub}</p>}
    </div>
  )
}
