import { TrendingUp, Briefcase, BookOpen, Target, ArrowRight, Heart } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back, John!</h1>
          <p className="text-xl text-slate-600">Here's your personalized career dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Target, label: "Skills", value: "4" },
            { icon: Briefcase, label: "Jobs Saved", value: "12" },
            { icon: BookOpen, label: "Courses Started", value: "2" },
            { icon: TrendingUp, label: "Profile Strength", value: "65%" },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Matched Jobs Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Jobs Matched to Your Skills</h2>
              <p className="text-slate-600">Based on your profile and experience</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View All <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {[
              { title: "Junior Frontend Developer", company: "Tech Corp", location: "Remote", salary: "$50k-$70k" },
              { title: "React Developer", company: "StartupXYZ", location: "New York", salary: "$60k-$80k" },
              { title: "UI Developer", company: "Design Inc", location: "San Francisco", salary: "$55k-$75k" },
            ].map((job, idx) => (
              <div key={idx} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600">{job.title}</h3>
                    <p className="text-slate-600">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      Match
                    </span>
                    <button className="p-1 hover:bg-slate-100 rounded transition-colors">
                      <Heart className="w-5 h-5 text-slate-400 hover:text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-slate-600">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Recommended Learning Paths</h2>
              <p className="text-slate-600">Curated resources to level up your skills</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              Explore More <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "React Advanced", platform: "Udemy", duration: "30h" },
              { title: "UI/UX Basics", platform: "Coursera", duration: "20h" },
              { title: "JavaScript Pro", platform: "Skillshare", duration: "25h" },
              { title: "Web Design", platform: "YouTube", duration: "15h" },
            ].map((course, idx) => (
              <div key={idx} className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 mb-2">{course.platform}</p>
                <span className="text-xs text-slate-600">{course.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
