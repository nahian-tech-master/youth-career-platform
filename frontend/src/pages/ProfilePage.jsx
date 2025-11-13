import { User, Mail, Target, Plus, X, Save, Briefcase, BookOpen } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">My Profile</h1>

        <div className="card p-8 space-y-8">
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" placeholder="John Doe" className="input-field pl-10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    disabled
                    className="input-field pl-10 bg-slate-50 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Career Goal */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Career Information</h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Career Goal</label>
              <textarea
                rows="3"
                placeholder="Tell us about your career goals and aspirations..."
                className="input-field"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Skills</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a new skill (e.g., JavaScript, Communication)"
                  className="input-field flex-1"
                />
                <button className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Communication", "Problem Solving"].map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                    <button className="text-blue-700 hover:text-blue-900">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Save className="w-5 h-5" />
            Save Profile
          </button>
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
