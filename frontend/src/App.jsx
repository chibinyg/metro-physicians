import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import Dashboard from './layouts/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/dashboard/Home.jsx'
import Analytics from './pages/dashboard/Analytics.jsx'
import Patients from './pages/dashboard/Patients.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<Home />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="patients" element={<Patients />} />
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App