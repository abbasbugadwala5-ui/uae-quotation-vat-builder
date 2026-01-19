import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import CreateQuotation from "./pages/CreateQuotation"
import AllQuotations from "./pages/AllQuotations"
import VatSummaryPage from "./pages/VatSummaryPage"
import Settings from "./pages/Settings"
import Preview from "./pages/Preview"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateQuotation />} />
        <Route path="/quotations" element={<AllQuotations />} />
        <Route path="/vat" element={<VatSummaryPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  )
}
