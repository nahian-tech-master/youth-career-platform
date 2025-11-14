import { User, Mail, Lock, Briefcase, ArrowRight, GraduationCap, Building2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function SignupPage({ onLogin }) {
  const { register } = useAuth();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    education: "",
    department: "",
    experienceLevel: "Fresher",
    preferredTrack: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await register({
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        password: form.password,
        education: form.education,
        department: form.department,
        experienceLevel: form.experienceLevel,
        preferredTrack: form.preferredTrack,
      });
      if (res?.success) {
        setSuccess("Account created successfully!");
      } else {
        setError(res?.error || "Registration failed");
      }
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h1>
          <p className="text-slate-600">Join CareerPath and start your career journey today</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">{error}</div>
            )}
            {success && (
              <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 px-3 py-2 text-sm">{success}</div>
            )}

            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    name="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"
                    value={form.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name <span className="text-slate-400 text-xs">(Optional)</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"
                    value={form.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Education</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    name="education"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.education}
                    onChange={handleChange}
                  >
                    <option value="">Select your education...</option>
                    <option>High School</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                    <option>Diploma</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    name="department"
                    type="text"
                    placeholder="Computer Science"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400"
                    value={form.department}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    name="experienceLevel"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={form.experienceLevel}
                    onChange={handleChange}
                  >
                    <option>Fresher</option>
                    <option>Junior</option>
                    <option>Mid</option>
                    <option>Senior</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Career Interest */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Career Interest</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  name="preferredTrack"
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={form.preferredTrack}
                  onChange={handleChange}
                >
                  <option value="">Select a career track...</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                  <option>AI/Machine Learning</option>
                  <option>DevOps</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Business</option>
                  <option>Finance</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 mt-6"
            >
              {loading ? "Creating Account..." : (
                <>
                  Create Account <ArrowRight className="w-4 h-4" />
                </>
              )}
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
