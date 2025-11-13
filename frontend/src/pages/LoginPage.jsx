import React from 'react'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export default function LoginPage({ onLogin }) {
  const handleSignIn = () => {
    onLogin?.({ name: 'John Doe', email: 'you@example.com' })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-600">Sign in to your CareerPath account</p>
        </div>

        <div className="card p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="email" placeholder="you@example.com" className="input-field pl-10" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="password" placeholder="••••••••" className="input-field pl-10" />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignIn}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-700">Sign up</Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Forgot password?</button>
        </div>
      </div>
    </div>
  )
}
