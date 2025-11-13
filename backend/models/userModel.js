import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Basic Authentication Fields
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false, 
    },

    // Profile Information
    profileImage: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
      maxlength: 500,
    },

    // Education & Background
    educationLevel: {
      type: String,
      enum: [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "PhD",
        "Diploma",
        "Other",
      ],
      default: null,
    },
    department: {
      type: String,
      default: null, // e.g., "Computer Science", "Business", "Design"
    },
    graduationYear: {
      type: Number,
      default: null,
    },

    // Experience Level
    experienceLevel: {
      type: String,
      enum: ["Fresher", "Junior", "Mid", "Senior"],
      default: "Fresher",
    },
    yearsOfExperience: {
      type: Number,
      default: 0,
    },

    // Career Preferences
    preferredCareerTracks: [
      {
        type: String,
        enum: [
          "Web Development",
          "Mobile Development",
          "Data Science",
          "AI/Machine Learning",
          "DevOps",
          "Design",
          "Marketing",
          "Business",
          "Finance",
          "Other",
        ],
      },
    ],
    targetRoles: [
      {
        type: String,
      },
    ],

    // Skills Management
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
        level: {
          type: String,
          enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
          default: "Beginner",
        },
        yearsOfExperience: {
          type: Number,
          default: 0,
        },
        addedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // Experience & Projects
    experiences: [
      {
        title: String,
        company: String,
        description: String,
        startDate: Date,
        endDate: Date,
        isCurrentlyWorking: Boolean,
        skills: [String],
      },
    ],
    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        link: String,
        startDate: Date,
        endDate: Date,
      },
    ],

    // CV & Raw Text Data (for future AI processing)
    cvText: {
      type: String,
      default: null,
      maxlength: 10000, // Store raw CV content for AI analysis later
    },
    additionalNotes: {
      type: String,
      default: null,
      maxlength: 5000, // Store notes/brief description for AI processing
    },

    // Preferences & Settings
    location: {
      type: String,
      default: null,
    },
    jobTypes: [
      {
        type: String,
        enum: ["Internship", "Part-time", "Full-time", "Freelance", "Contract"],
      },
    ],
    workEnvironment: [
      {
        type: String,
        enum: ["Remote", "On-site", "Hybrid"],
      },
    ],
    expectedSalaryRange: {
      min: {
        type: Number,
        default: null,
      },
      max: {
        type: Number,
        default: null,
      },
      currency: {
        type: String,
        default: "USD",
      },
    },

    // Saved Items (Bookmarks)
    savedJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    savedResources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource",
      },
    ],

    // Activity & Analytics (for future AI/recommendations)
    viewedJobs: [
      {
        jobId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Job",
        },
        viewedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    appliedJobs: [
      {
        jobId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Job",
        },
        appliedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    completedResources: [
      {
        resourceId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Resource",
        },
        completedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // Metadata
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    accountStatus: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Index for frequently queried fields
userSchema.index({ experienceLevel: 1 });
userSchema.index({ preferredCareerTracks: 1 });
userSchema.index({ "skills.name": 1 });

// Create model
const User = mongoose.model("User", userSchema);

export default User;
