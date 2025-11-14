import { useState, useEffect } from "react"
import { User, Mail, Target, Save, Plus, X } from "lucide-react"
import axios from "axios"
import { useAuth } from "../context/AuthContext.jsx"

const API_BASE_URL = import.meta.env.VITE_SERVER_URL

export default function EditProfilePage() {
  const { user, token, updateUser } = useAuth()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    experienceLevel: "Fresher",
    yearsOfExperience: 0,
    preferredTrack: "",
    bio: "",
    location: "",
    expectedSalaryMin: "",
    expectedSalaryMax: "",
    expectedSalaryCurrency: "USD",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [skills, setSkills] = useState([])
  const [newSkillName, setNewSkillName] = useState("")

  useEffect(() => {
    if (!user) return
    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      department: user.department || "",
      experienceLevel: user.experienceLevel || "Fresher",
      yearsOfExperience: user.yearsOfExperience ?? 0,
      preferredTrack: Array.isArray(user.preferredCareerTracks) && user.preferredCareerTracks.length > 0
        ? user.preferredCareerTracks[0]
        : "",
      bio: user.bio || "",
      location: user.location || "",
      expectedSalaryMin: user.expectedSalaryRange?.min ?? "",
      expectedSalaryMax: user.expectedSalaryRange?.max ?? "",
      expectedSalaryCurrency: user.expectedSalaryRange?.currency || "USD",
    })
    // Initialize skills from user
    const initialSkills = Array.isArray(user.skills)
      ? user.skills.map((s) =>
          typeof s === "string"
            ? { name: s, level: "Beginner", yearsOfExperience: 0 }
            : { name: s?.name || "", level: s?.level || "Beginner", yearsOfExperience: Number(s?.yearsOfExperience) || 0 }
        )
      : []
    setSkills(initialSkills)
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddSkill = () => {
    const name = newSkillName.trim()
    if (!name) return
    const exists = skills.some((s) => s.name.toLowerCase() === name.toLowerCase())
    if (exists) return
    setSkills((prev) => [
      ...prev,
      { name, level: "Beginner", yearsOfExperience: 0 },
    ])
    setNewSkillName("")
  }

  const handleRemoveSkill = (index) => {
    setSkills((prev) => prev.filter((_, i) => i !== index))
  }

  // No inline edit fields for skills; only add/remove by name

  const handleSave = async () => {
    if (!user || !user._id) return

    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const authToken = token || localStorage.getItem('token') || ''
      const payload = {
        firstName: form.firstName || null,
        lastName: form.lastName || null,
        bio: form.bio || null,
        department: form.department || null,
        experienceLevel: form.experienceLevel || "Fresher",
        yearsOfExperience: Number(form.yearsOfExperience) || 0,
        preferredCareerTracks: form.preferredTrack ? [form.preferredTrack] : [],
        location: form.location || null,
        expectedSalaryRange: {
          min: form.expectedSalaryMin !== "" ? Number(form.expectedSalaryMin) : null,
          max: form.expectedSalaryMax !== "" ? Number(form.expectedSalaryMax) : null,
          currency: form.expectedSalaryCurrency || "USD",
        },
        skills: skills.map((s) => ({
          name: s.name,
          level: s.level || "Beginner",
          yearsOfExperience: Number(s.yearsOfExperience) || 0,
        })),
      }

      const response = await axios.put(
        `${API_BASE_URL}/user/${user._id}`,
        payload,
        {
          headers: {
            Authorization: authToken ? `Bearer ${authToken}` : undefined,
            "Content-Type": "application/json",
          },
        }
      )

      if (response.data?.success && response.data.user) {
        updateUser(response.data.user)
        setSuccess("Profile updated successfully")
      } else {
        setError(response.data?.message || "Failed to update profile")
      }
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || "Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  const preferredTrackLabel = form.preferredTrack || "Not set yet"
  const accountStatus = user?.accountStatus || "active"
  const lastLogin = user?.lastLogin ? new Date(user.lastLogin).toLocaleString() : "Not available"

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Edit Profile</h1>
        <p className="text-sm text-slate-500 mb-6">
          Status: <span className="font-medium capitalize">{accountStatus}</span> Last login: {lastLogin}
        </p>

        <div className="card p-8 space-y-8">
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">{error}</div>
          )}
          {success && (
            <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 px-3 py-2 text-sm">{success}</div>
          )}

          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Basic Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={form.email}
                    disabled
                    className="input-field pl-10 bg-slate-50 cursor-not-allowed"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Career Information */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Career Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                <input
                  type="text"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
                <select
                  name="experienceLevel"
                  value={form.experienceLevel}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="Fresher">Fresher</option>
                  <option value="Junior">Junior</option>
                  <option value="Mid">Mid</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={form.yearsOfExperience}
                  onChange={handleChange}
                  className="input-field"
                  min={0}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Track</label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    name="preferredTrack"
                    value={form.preferredTrack}
                    onChange={handleChange}
                    className="input-field pl-10"
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
                <p className="text-xs text-slate-500 mt-1">Current: {preferredTrackLabel || "Not set"}</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">About You</h2>
            <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
            <textarea
              name="bio"
              rows="5"
              maxLength={500}
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell us about your career goals, strengths, and interests..."
              className="input-field resize-y min-h-[120px]"
            />
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-slate-500">Keep it concise and professional. Max 500 characters.</p>
              <span className="text-xs text-slate-500">{(form.bio || '').length}/500</span>
            </div>
          </div>

          {/* Expected Salary */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Expected Salary</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Minimum</label>
                <input
                  type="number"
                  name="expectedSalaryMin"
                  value={form.expectedSalaryMin}
                  onChange={handleChange}
                  className="input-field"
                  min={0}
                  placeholder="e.g. 30000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Maximum</label>
                <input
                  type="number"
                  name="expectedSalaryMax"
                  value={form.expectedSalaryMax}
                  onChange={handleChange}
                  className="input-field"
                  min={0}
                  placeholder="e.g. 60000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Currency</label>
                <select
                  name="expectedSalaryCurrency"
                  value={form.expectedSalaryCurrency}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="BDT">BDT</option>
                  <option value="INR">INR</option>
                  <option value="GBP">GBP</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Skills</h2>
            <div className="space-y-4">
              {/* Add new skill */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="Add a skill (e.g., React)"
                  className="input-field flex-1"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" /> Add
                </button>
              </div>

              {/* Current skills list */}
              <div className="flex flex-wrap gap-2">
                {skills.length === 0 && (
                  <p className="text-sm text-slate-500">No skills added yet.</p>
                )}
                {skills.map((s, idx) => (
                  <span key={`${s.name}-${idx}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {s.name}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(idx)}
                      className="text-blue-700 hover:text-blue-900"
                      aria-label={`Remove ${s.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </div>
    </div>
  )
}
