import { User, Mail, Lock, Briefcase, ArrowRight } from "lucide-react"
import { Link } from "react-router"

export default function SignupPage({ onLogin }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h1>
          <p className="text-slate-600">Join CareerPath and start your career journey today</p>
        </div>

        <div className="card p-8">
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" placeholder="John Doe" className="input-field pl-10" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="email" placeholder="you@example.com" className="input-field pl-10" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="password" placeholder="••••••••" className="input-field pl-10" />
              </div>
            </div>

            {/* Career Interest */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Career Interest</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select className="input-field pl-10">
                  <option>Select a career track...</option>
                  <option>Web Development</option>
                  <option>Data Science</option>
                  <option>UI/UX Design</option>
                  <option>Product Management</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="button"
              onClick={() => onLogin?.({ name: 'John Doe', email: 'you@example.com' })}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
