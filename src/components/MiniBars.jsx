export default function MiniBars(){
  const bars=[40,70,55,90,60,80]
  return (
    <div style={{
      background:"linear-gradient(180deg,#111827,#0f172a)",
      border:"1px solid var(--border)",
      borderRadius:"18px",
      padding:"22px"
    }}>
      <div style={{fontSize:"13px", color:"var(--muted)", marginBottom:"14px"}}>
        Revenue Trend
      </div>
      <div style={{display:"flex", gap:"10px", alignItems:"flex-end", height:"90px"}}>
        {bars.map((h,i)=>(
          <div key={i} style={{
            width:"18px", height:`${h}%`,
            background:"linear-gradient(180deg,var(--accent),#34d399)",
            borderRadius:"6px"
          }} />
        ))}
      </div>
    </div>
  )
}
