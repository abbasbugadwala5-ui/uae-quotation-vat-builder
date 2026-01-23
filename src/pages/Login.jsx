import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || "Login failed")
      return
    }

    localStorage.setItem("token", data.token)
    localStorage.setItem("user", JSON.stringify(data.user))

    navigate("/")
  } catch (err) {
    alert("Server error")
  } finally {
    setLoading(false)
  }
}


  return (
    <div style={page}>
      <form onSubmit={handleLogin} style={card}>
        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <h1 style={heading}>
  Sign in
</h1>

        <p style={subHeading}>
  Access your UAE quotation system
</p>

        </div>

        {/* Email */}
        <div style={field}>
          <label style={label}>Email</label>
          <input
            type="email"
            placeholder="admin@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
            required
          />
        </div>

        {/* Password */}
        <div style={field}>
          <label style={label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={input}
            required
          />
        </div>

        {/* Button */}
        <button type="submit" style={primaryBtn} disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>

        {/* Footer */}
        <p style={footerText}>
          Secure enterprise access
        </p>
      </form>
    </div>
  )
}

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg,#050810,#020617)"
}



const card = {
  width: "400px",
  background: "var(--card-grad)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-lg)",
  padding: "34px"
}



const field = {
  marginBottom: "18px",
}

const label = {
  display: "block",
  fontSize: "13px",
  color: "var(--text-muted)",
  marginBottom: "6px",
}
const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border)",
  background: "rgba(2,6,23,0.8)",
  color: "var(--text-main)",
  fontSize: "14px",
  
  transition: "all 0.2s ease",
}
const primaryBtn = {
  width: "100%",
  padding: "14px",
  marginTop: "14px",
  borderRadius: "var(--radius-sm)",
  border: "none",

  background: "#22c55e",          // normal
  color: "#052e16",

  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.02em",

  boxShadow: `
    0 10px 20px rgba(34,197,94,0.35),
    inset 0 1px 0 rgba(255,255,255,0.3)
  `,

  cursor: "pointer",
  transition: "background 0.15s ease"
}


const footerText = {
  marginTop: "18px",
  fontSize: "12px",
  color: "var(--text-muted)",
  textAlign: "center",
}
const heading = {
  fontSize: "28px",
  fontWeight: 800,
  textAlign: "center",
  marginBottom: "6px"
}

const subHeading = {
  color: "#a5b4fc",
  fontSize: "14px",
  textAlign: "center",
  marginBottom: "32px"
}

