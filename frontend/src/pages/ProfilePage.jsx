import { Link } from "react-router"
import { User, Mail, Target, Briefcase, BookOpen, Pencil } from "lucide-react"
import { useAuth } from "../context/AuthContext.jsx"

export default function ProfilePage() {
  const { user } = useAuth()

  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || "Unnamed User"
  const email = user?.email || "Not provided"
  const department = user?.department || "Not set"
  const experienceLevel = user?.experienceLevel || "Fresher"
  const yearsOfExperience = user?.yearsOfExperience ?? 0
  const preferredTrack = Array.isArray(user?.preferredCareerTracks) && user?.preferredCareerTracks?.length
    ? user.preferredCareerTracks[0]
    : "Not set"
  const bio = user?.bio || "No bio added yet."
  const location = user?.location || "Not set"
  const expected = user?.expectedSalaryRange || {}
  const expectedSalary = expected?.min || expected?.max
    ? `${expected?.min ?? "—"} - ${expected?.max ?? "—"} ${expected?.currency || "USD"}`
    : "Not set"
  const accountStatus = user?.accountStatus || "active"
  const lastLogin = user?.lastLogin ? new Date(user.lastLogin).toLocaleString() : "Not available"

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
            <p className="text-sm text-slate-500 mt-1">
              Status: <span className="font-medium capitalize">{accountStatus}</span> · Last login: {lastLogin}
            </p>
          </div>
          <Link
            to="/profile/edit"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <Pencil className="w-5 h-5" /> Edit Profile
          </Link>
        </div>

        <div className="card p-8 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 text-blue-700 grid place-items-center text-xl font-bold">
              {user?.firstName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
            </div>
            <div>
              <div className="text-xl font-semibold text-slate-900">{fullName}</div>
              <div className="text-slate-600 text-sm">{email}</div>
            </div>
          </div>

          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoField icon={User} label="Full Name" value={fullName} />
              <InfoField icon={Mail} label="Email" value={email} />
              <InfoField icon={Target} label="Location" value={location} />
              <InfoField icon={Target} label="Preferred Track" value={preferredTrack} />
            </div>
          </div>

          {/* Career Information */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Career Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoField label="Department" value={department} />
              <InfoField label="Experience Level" value={experienceLevel} />
              <InfoField label="Years of Experience" value={`${yearsOfExperience}`} />
              <InfoField label="Expected Salary" value={expectedSalary} />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">About You</h2>
            <p className="text-slate-700 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-4">
              {bio}
            </p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { icon: Target, label: "Skills Added", value: "4" },
            { icon: Briefcase, label: "Jobs Saved", value: "0" },
            { icon: BookOpen, label: "Courses Started", value: "0" },
          ].map((stat, idx) => (
            <div key={idx} className="card p-6 text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoField({ icon: Icon, label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <div className="relative">
        {Icon ? <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" /> : null}
        <div className={`input-field ${Icon ? 'pl-10' : ''} bg-slate-50 text-slate-900`}>{value}</div>
      </div>
    </div>
  )
}
