import html2pdf from "html2pdf.js"

export default function Preview(){
  const exportPDF = () => {
    const el = document.getElementById("pdf")
    html2pdf().from(el).set({
      margin: 10,
      filename: "UAE-Quotation.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4" }
    }).save()
  }

  return (
    <div style={{padding:"32px"}}>
      <button onClick={exportPDF} style={btn}>Download PDF</button>

      <div id="pdf" style={paper}>
        <h2>Quotation</h2>
        <p>Currency: AED • VAT: 5%</p>
        <hr />
        <p><strong>Status:</strong> Draft</p>
        <p><strong>Note:</strong> System generated quotation</p>
      </div>
    </div>
  )
}

const paper={
  background:"#fff", color:"#020617",
  padding:"32px", borderRadius:"8px",
  maxWidth:"800px"
}
const btn={
  marginBottom:"12px", padding:"10px 14px",
  borderRadius:"10px", border:"none",
  background:"#22c55e", color:"#052e16", fontWeight:700
}
