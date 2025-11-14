import { Search, BookOpen, Clock, Target, ExternalLink, Star } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    { id: 1, title: "JavaScript Fundamentals", platform: "Udemy", duration: "20 hours", category: "Programming" },
    { id: 2, title: "React Masterclass", platform: "Coursera", duration: "30 hours", category: "Programming" },
    { id: 3, title: "UI/UX Design Basics", platform: "Skillshare", duration: "15 hours", category: "Design" },
    { id: 4, title: "Data Analysis with Python", platform: "YouTube", duration: "25 hours", category: "Data" },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-slate-600">Develop your skills with our curated learning paths</p>
        </div>

        {/* Search and Filter */}
        <div className="card p-6 mb-8">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input type="text" placeholder="Search resources..." className="input-field pl-10" />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select className="input-field">
                  <option>All Categories</option>
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Data</option>
                  <option>Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Cost</label>
                <select className="input-field">
                  <option>All Resources</option>
                  <option>Free</option>
                  <option>Paid</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <button className="text-slate-400 hover:text-yellow-400 transition-colors">
                  <Star className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>

              <p className="text-sm text-slate-600 mb-4">{resource.platform}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  {resource.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Target className="w-4 h-4" />
                  {resource.category}
                </div>
              </div>

              <button className="w-full py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                View Course <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
