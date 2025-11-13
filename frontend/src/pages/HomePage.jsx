import { ArrowRight, Briefcase, BookOpen, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Launch Your Career Path Today</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 text-pretty">
            Discover entry-level jobs, learn in-demand skills, and build the future of your career with CareerPath.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Three simple steps to find your dream job</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Create Your Profile",
                description: "Set up your profile, add your skills, and tell us about your career goals.",
              },
              {
                icon: Briefcase,
                title: "Explore Opportunities",
                description: "Browse jobs tailored to your skills and interests from top employers.",
              },
              {
                icon: BookOpen,
                title: "Learn & Grow",
                description: "Access curated learning resources to develop new skills and advance your career.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="card p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Job Listings" },
              { number: "50+", label: "Learning Resources" },
              { number: "5K+", label: "Users" },
              { number: "80%", label: "Success Rate" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of young professionals who have found their perfect job with CareerPath.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
