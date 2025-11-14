import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Basic Authentication Fields
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
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
      maxlength: 300,
      default: null,
    },

    // Education & Experience (Simplified)
    educationLevel: {
      type: String,
      enum: [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "Diploma",
        "Other",
      ],
      default: null,
    },
    department: {
      type: String,
      default: null, 
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

    // Skills (Simplified for Recommendation System)
    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    // Career Preferences
    preferredCareerTracks: [String],
    targetRoles: [String],

    // Saved bookmarks
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

    // Account
    lastLogin: { type: Date, default: null },
    accountStatus: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Index for fast queries
userSchema.index({ skills: 1 });
userSchema.index({ preferredCareerTracks: 1 });

export default mongoose.model("User", userSchema);
