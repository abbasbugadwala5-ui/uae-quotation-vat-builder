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
    <table style={table}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price (AED)</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {items.map((it, i) => (
          <tr key={i}>
            <td>
              <input
                value={it.name}
                onChange={e => update(i, "name", e.target.value)}
                placeholder="Service / Product"
                style={input}
              />
            </td>

            <td>
              <input
                type="number"
                value={it.qty}
                onChange={e => update(i, "qty", e.target.value)}
                style={input}
              />
            </td>

            <td>
              <input
                type="number"
                value={it.price}
                onChange={e => update(i, "price", e.target.value)}
                style={input}
              />
            </td>

            <td>
              <div style={totalBadge}>
                AED {(it.qty * it.price).toFixed(2)}
              </div>
            </td>

            <td>
              <button onClick={() => remove(i)} style={removeBtn}>✕</button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="5">
            <button onClick={addRow} style={addBtn}>+ Add Item</button>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

/* ================= STYLES ================= */

const table = {
  width: "100%",
  minWidth: "720px",
  borderCollapse: "separate",
  borderSpacing: "0 10px",
}

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  background: "#050b16",
  color: "var(--text)",
  fontSize: "14px",
}

const totalBadge = {
  padding: "10px 12px",
  background: "rgba(34,197,94,0.08)",
  border: "1px solid rgba(34,197,94,0.25)",
  borderRadius: "10px",
  fontWeight: 700,
  textAlign: "right",
  minWidth: "110px",
}

const addBtn = {
  marginTop: "14px",
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px dashed var(--border)",
  background: "transparent",
  color: "var(--text)",
  cursor: "pointer",
}

const removeBtn = {
  background: "transparent",
  border: "none",
  color: "#ef4444",
  cursor: "pointer",
  fontSize: "16px",
}
