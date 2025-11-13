import { ArrowLeft, MapPin, DollarSign, Briefcase, Share2, Heart } from "lucide-react"

export default function JobDetailPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium">
          <ArrowLeft className="w-5 h-5" />
          Back to jobs
        </button>

        <div className="card p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Junior Frontend Developer</h1>
              <p className="text-xl text-slate-600">Tech Corp</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                <Heart className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                <Share2 className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Job Meta */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-slate-600">Location</div>
                <div className="font-semibold text-slate-900">Remote</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-slate-600">Salary</div>
                <div className="font-semibold text-slate-900">$50k - $70k</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-slate-600">Experience</div>
                <div className="font-semibold text-slate-900">Entry Level</div>
              </div>
            </div>
          </div>

          {/* About the Role */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Role</h2>
            <p className="text-slate-600 leading-relaxed">
              We're looking for a talented Junior Frontend Developer to join our team. You'll work on building
              responsive, user-friendly web applications using modern technologies. This is a great opportunity to grow
              your skills and learn from experienced developers in a collaborative environment.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Develop and maintain responsive web interfaces</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Collaborate with designers and backend developers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Write clean, maintainable code following best practices</span>
              </li>
            </ul>
          </div>

          {/* Required Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Git"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Nice to Have */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Nice to Have</h2>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Next.js", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>

          {/* Additional Info */}
          <p className="text-center text-slate-600 text-sm mt-4">
            Posted on Nov 13, 2024 • Applications close on Dec 13, 2024
          </p>
        </div>
      </div>
    </div>
  )
}
