export default function StatusBadge({status}){
  const m={
    Draft:{bg:"#111827",c:"#9ca3af"},
    Pending:{bg:"#1f2937",c:"#f59e0b"},
    Approved:{bg:"#052e16",c:"#22c55e"}
  }[status]
  return (
    <span style={{
      padding:"4px 10px", borderRadius:"999px",
      background:m.bg, color:m.c, fontSize:"12px"
    }}>{status}</span>
  )
}
