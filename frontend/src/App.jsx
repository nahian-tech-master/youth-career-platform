import { createBrowserRouter, RouterProvider } from 'react-router'
import { AuthProvider } from './context/AuthContext'

// Components
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        // Public routes (redirect to dashboard if authenticated)
        {
          path: 'login',
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          )
        },
        {
          path: 'register',
          element: (
            <PublicRoute>
              <Register />
            </PublicRoute>
          )
        },
        // Protected routes (require authentication)
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )
        },
        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          )
        }
      ]
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
