import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: null,
      maxlength: 1000,
    },
    link: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      enum: ["YouTube", "Coursera", "Udemy", "LinkedIn Learning", "FreeCodeCamp", "Codecademy", "Pluralsight", "Other"],
      default: "Other",
    },
    category: {
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
        "Soft Skills",
        "Other",
      ],
      default: "Other",
    },
    skills: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    cost: {
      type: String,
      enum: ["Free", "Paid"],
      default: "Free",
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    duration: {
      value: { type: Number, default: null }, // e.g., 10 (hours/weeks)
      unit: { type: String, enum: ["hours", "weeks", "months"], default: "hours" },
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: null,
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Index for frequently searched fields
resourceSchema.index({ category: 1 });
resourceSchema.index({ skills: 1 });
resourceSchema.index({ platform: 1 });
resourceSchema.index({ level: 1 });

export default mongoose.model("Resource", resourceSchema);
