import { Search, MapPin, DollarSign, Briefcase } from "lucide-react"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "$50k - $70k",
      category: "Web Dev",
      level: "Entry Level",
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      company: "Design Studio",
      location: "New York",
      salary: "$30k - $40k",
      category: "Design",
      level: "Entry Level",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Analytics Co",
      location: "San Francisco",
      salary: "$60k - $80k",
      category: "Data",
      level: "Intermediate",
    },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Find Your Next Opportunity</h1>
          <p className="text-xl text-slate-600">Explore 500+ job opportunities tailored for you</p>
        </div>

        {/* Filters Card */}
        <div className="card p-6 mb-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input type="text" placeholder="Search jobs by title or company..." className="input-field pl-10" />
            </div>

            {/* Filter Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select className="input-field">
                  <option>All Categories</option>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Data</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
                <select className="input-field">
                  <option>All Levels</option>
                  <option>Entry Level</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Job Type</label>
                <select className="input-field">
                  <option>All Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600">{job.company}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  {job.level}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.category}
                </div>
              </div>

              <div className="flex gap-2">
                {["JavaScript", "React", "Communication"].map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
