import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import JobsPage from './pages/JobsPage'
import JobDetailPage from './pages/JobDetailPage'
import ResourcesPage from './pages/ResourcePage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('user') ? true : false)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const handleLogin = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  const Shell = () => (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
      <Outlet />
    </div>
  )

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Shell />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'login',
          element: isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />
        },
        {
          path: 'signup',
          element: isAuthenticated ? <Navigate to="/dashboard" /> : <SignupPage onLogin={handleLogin} />
        },
        {
          path: 'profile',
          element: isAuthenticated ? <ProfilePage user={user} onUpdateUser={setUser} /> : <Navigate to="/login" />
        },
        { path: 'jobs', element: <JobsPage user={user} /> },
        { path: 'jobs/:id', element: <JobDetailPage user={user} /> },
        { path: 'resources', element: <ResourcesPage user={user} /> },
        {
          path: 'dashboard',
          element: isAuthenticated ? <DashboardPage user={user} /> : <Navigate to="/login" />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
