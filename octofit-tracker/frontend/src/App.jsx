import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function Dashboard() {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h1 className="h3 mb-2">OctoFit Tracker</h1>
        <p className="text-secondary mb-0">
          React 19 + Vite frontend initialized on port 5173.
        </p>
      </div>
    </section>
  )
}

function Teams() {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h2 className="h4 mb-2">Teams</h2>
        <p className="text-secondary mb-0">
          Team creation and management views can be built here.
        </p>
      </div>
    </section>
  )
}

function Leaderboard() {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h2 className="h4 mb-2">Leaderboard</h2>
        <p className="text-secondary mb-0">
          Competitive ranking screens can be added in this route.
        </p>
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="app-shell container py-4 py-md-5">
      <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4">
        <div>
          <p className="text-uppercase fw-semibold text-secondary small mb-1">
            Modern Multi-Tier App
          </p>
          <p className="mb-0 text-secondary">Frontend configured with Bootstrap and routing.</p>
        </div>
        <nav className="d-flex gap-2">
          <NavLink to="/" end className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>
            Dashboard
          </NavLink>
          <NavLink to="/teams" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>
            Teams
          </NavLink>
          <NavLink to="/leaderboard" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>
            Leaderboard
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </main>
  )
}

export default App
