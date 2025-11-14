import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import JobsPage from './pages/JobsPage'
import JobDetailPage from './pages/JobDetailPage'
import ResourcesPage from './pages/ResourcePage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import { useAuth } from './context/AuthContext.jsx'
import EditProfilePage from './pages/EditProfilePage'

function App() {
  const { user, isAuthenticated, logout } = useAuth()

  const Shell = () => (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={logout} />
      <Outlet />
    </div>
  )

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Shell />,
      children: [
        { index: true, element: <PublicRoute><HomePage /></PublicRoute> },
        {
          path: 'login',
          element: (
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          )
        },
        {
          path: 'signup',
          element: (
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          )
        },
        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <ProfilePage user={user} />
            </ProtectedRoute>
          )
        },
        {
          path: 'profile/edit',
          element: (
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          )
        },
        { path: 'jobs', element: <JobsPage user={user} /> },
        { path: 'jobs/:id', element: <JobDetailPage user={user} /> },
        { path: 'resources', element: <ResourcesPage user={user} /> },
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <DashboardPage user={user} />
            </ProtectedRoute>
          )
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
