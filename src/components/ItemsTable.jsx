export default function ItemsTable({ items, setItems }) {
  const addRow = () =>
    setItems([...items, { name: "", qty: 1, price: 0 }])

  const update = (i, key, val) => {
    const copy = [...items]
    copy[i][key] = key === "qty" || key === "price" ? Number(val) : val
    setItems(copy)
  }

  const remove = (i) => setItems(items.filter((_, idx) => idx !== i))

  return (
    <div style={{
      background:"linear-gradient(180deg,#111827,#0f172a)",
      border:"1px solid var(--border)",
      borderRadius:"18px",
      padding:"18px"
    }}>
      <table style={{width:"100%", borderCollapse:"collapse"}}>
        <thead>
          <tr style={{color:"var(--muted)", fontSize:"12px"}}>
            <th align="left">Item</th>
            <th width="90">Qty</th>
            <th width="140">Price (AED)</th>
            <th width="140">Total</th>
            <th width="60"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((it, i)=>(
            <tr key={i} style={{borderTop:"1px solid var(--border)"}}>
              <td>
                <input value={it.name}
                  onChange={e=>update(i,"name",e.target.value)}
                  placeholder="Service / Product"
                  style={input}
                />
              </td>
              <td>
                <input type="number" value={it.qty}
                  onChange={e=>update(i,"qty",e.target.value)}
                  style={input}
                />
              </td>
              <td>
                <input type="number" value={it.price}
                  onChange={e=>update(i,"price",e.target.value)}
                  style={input}
                />
              </td>
              <td style={{fontWeight:600}}>
                AED {(it.qty*it.price).toFixed(2)}
              </td>
              <td>
                <button onClick={()=>remove(i)} style={danger}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addRow} style={addBtn}>+ Add Item</button>
    </div>
  )
}

const input = {
  width:"100%", padding:"8px 10px", borderRadius:"8px",
  border:"1px solid var(--border)", background:"#0b1220",
  color:"var(--text)"
}
const addBtn = {
  marginTop:"12px", padding:"8px 12px", borderRadius:"10px",
  border:"1px dashed var(--border)", background:"transparent",
  color:"var(--text)"
}
const danger = {
  background:"transparent", border:"none", color:"#ef4444",
  cursor:"pointer", fontSize:"16px"
}
