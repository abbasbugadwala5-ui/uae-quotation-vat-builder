import StatusBadge from "./StatusBadge"

const data=[
 {id:"QT-1023",client:"Al Noor Trading",amount:"AED 12,500",status:"Pending",date:"16 Jan 2026"},
 {id:"QT-1022",client:"Desert Build LLC",amount:"AED 8,900",status:"Approved",date:"15 Jan 2026"},
 {id:"QT-1021",client:"BlueWave Services",amount:"AED 4,300",status:"Draft",date:"14 Jan 2026"}
]

export default function RecentTable(){
  return (
    <div style={{
      marginTop:"28px",
      background:"linear-gradient(180deg,#111827,#0f172a)",
      border:"1px solid var(--border)",
      borderRadius:"18px",
      padding:"22px",
      boxShadow:"0 40px 80px rgba(0,0,0,.45)"
    }}>
      <h3 style={{marginBottom:"16px"}}>Recent Quotations</h3>
      <table style={{width:"100%", borderCollapse:"collapse"}}>
        <thead>
          <tr style={{color:"var(--muted)", fontSize:"12px"}}>
            <th align="left">Quotation</th><th align="left">Client</th>
            <th align="left">Amount</th><th align="left">Status</th><th align="left">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(r=>(
            <tr key={r.id} style={{borderTop:"1px solid var(--border)"}}>
              <td>{r.id}</td><td>{r.client}</td><td>{r.amount}</td>
              <td><StatusBadge status={r.status}/></td><td>{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
