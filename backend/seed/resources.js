import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Resource from "../models/resourceModel.js";
import connectDB from "../config/db.js";

const resourcesData = [
  // Web Development
  {
    title: "MDN JavaScript Guide",
    description: "Comprehensive guide to JavaScript fundamentals and advanced concepts",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    platform: "Other",
    category: "Web Development",
    skills: ["javascript", "frontend"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 40, unit: "hours" },
    rating: 4.9,
    totalRatings: 5000,
  },
  {
    title: "React Official Documentation",
    description: "Learn React from the official documentation with interactive examples",
    link: "https://react.dev/",
    platform: "Other",
    category: "Web Development",
    skills: ["react", "javascript", "frontend"],
    cost: "Free",
    level: "Intermediate",
    duration: { value: 30, unit: "hours" },
    rating: 4.8,
    totalRatings: 8000,
  },
  {
    title: "HTML & CSS Basics on FreeCodeCamp",
    description: "Complete HTML and CSS tutorial for beginners",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/",
    platform: "FreeCodeCamp",
    category: "Web Development",
    skills: ["html", "css", "frontend"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 300, unit: "hours" },
    rating: 4.7,
    totalRatings: 12000,
  },
  {
    title: "Udemy: The Complete JavaScript Course",
    description: "Master JavaScript from zero to hero with 50+ projects",
    link: "https://www.udemy.com/course/the-complete-javascript-course-2024/",
    platform: "Udemy",
    category: "Web Development",
    skills: ["javascript", "dom", "async"],
    cost: "Paid",
    level: "Beginner",
    duration: { value: 69, unit: "hours" },
    rating: 4.6,
    totalRatings: 650000,
  },

  // Backend Development
  {
    title: "Node.js Official Documentation",
    description: "Complete reference for Node.js API and modules",
    link: "https://nodejs.org/en/docs/",
    platform: "Other",
    category: "Web Development",
    skills: ["node.js", "backend", "javascript"],
    cost: "Free",
    level: "Intermediate",
    duration: { value: 35, unit: "hours" },
    rating: 4.5,
    totalRatings: 3000,
  },
  {
    title: "Express.js Guide",
    description: "Learn to build scalable web applications with Express",
    link: "https://expressjs.com/",
    platform: "Other",
    category: "Web Development",
    skills: ["express", "node.js", "backend"],
    cost: "Free",
    level: "Intermediate",
    duration: { value: 25, unit: "hours" },
    rating: 4.6,
    totalRatings: 4500,
  },
  {
    title: "MongoDB University: M001 Course",
    description: "Introduction to MongoDB and document databases",
    link: "https://learn.mongodb.com/courses/introduction-to-mongodb",
    platform: "Other",
    category: "Web Development",
    skills: ["mongodb", "databases", "nosql"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 8, unit: "hours" },
    rating: 4.7,
    totalRatings: 25000,
  },

  // Data Science & AI
  {
    title: "Python for Data Science - DataCamp",
    description: "Learn Python programming for data analysis and visualization",
    link: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
    platform: "Other",
    category: "Data Science",
    skills: ["python", "data analysis", "pandas"],
    cost: "Paid",
    level: "Beginner",
    duration: { value: 4, unit: "weeks" },
    rating: 4.6,
    totalRatings: 50000,
  },
  {
    title: "Machine Learning by Andrew Ng (Coursera)",
    description: "Comprehensive ML course covering supervised and unsupervised learning",
    link: "https://www.coursera.org/learn/machine-learning",
    platform: "Coursera",
    category: "AI/Machine Learning",
    skills: ["machine learning", "python", "neural networks"],
    cost: "Free",
    level: "Intermediate",
    duration: { value: 10, unit: "weeks" },
    rating: 4.8,
    totalRatings: 180000,
  },
  {
    title: "Keras Deep Learning Tutorial",
    description: "Build deep learning models using Keras and TensorFlow",
    link: "https://www.tensorflow.org/tutorials/keras",
    platform: "Other",
    category: "AI/Machine Learning",
    skills: ["deep learning", "tensorflow", "python"],
    cost: "Free",
    level: "Advanced",
    duration: { value: 20, unit: "hours" },
    rating: 4.7,
    totalRatings: 8000,
  },

  // DevOps
  {
    title: "Docker Complete Guide - Udemy",
    description: "Master containerization with Docker and Docker Compose",
    link: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
    platform: "Udemy",
    category: "DevOps",
    skills: ["docker", "containers", "devops"],
    cost: "Paid",
    level: "Intermediate",
    duration: { value: 22, unit: "hours" },
    rating: 4.6,
    totalRatings: 120000,
  },
  {
    title: "Kubernetes Official Documentation",
    description: "Complete guide to Kubernetes orchestration platform",
    link: "https://kubernetes.io/docs/",
    platform: "Other",
    category: "DevOps",
    skills: ["kubernetes", "devops", "containers"],
    cost: "Free",
    level: "Advanced",
    duration: { value: 40, unit: "hours" },
    rating: 4.5,
    totalRatings: 5000,
  },

  // Design & UI/UX
  {
    title: "Figma UI Design Essentials",
    description: "Learn UI/UX design principles using Figma",
    link: "https://www.figma.com/blog/",
    platform: "Other",
    category: "Design",
    skills: ["figma", "ui design", "ux design"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 15, unit: "hours" },
    rating: 4.7,
    totalRatings: 6000,
  },
  {
    title: "Adobe XD Tutorial - Design & Prototype",
    description: "Master design and prototyping with Adobe XD",
    link: "https://www.adobe.com/products/xd/learn.html",
    platform: "Other",
    category: "Design",
    skills: ["adobe xd", "ui design", "prototyping"],
    cost: "Paid",
    level: "Beginner",
    duration: { value: 12, unit: "hours" },
    rating: 4.5,
    totalRatings: 4000,
  },

  // Soft Skills
  {
    title: "Communication Skills for Tech Professionals",
    description: "Improve your communication and presentation skills",
    link: "https://www.linkedin.com/learning/communication-fundamentals",
    platform: "LinkedIn Learning",
    category: "Soft Skills",
    skills: ["communication", "presentation", "soft skills"],
    cost: "Paid",
    level: "Beginner",
    duration: { value: 2, unit: "hours" },
    rating: 4.6,
    totalRatings: 3000,
  },
  {
    title: "Project Management Basics",
    description: "Learn agile, scrum, and project management fundamentals",
    link: "https://www.freecodecamp.org/news/agile-methodology/",
    platform: "FreeCodeCamp",
    category: "Business",
    skills: ["agile", "scrum", "project management"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 8, unit: "hours" },
    rating: 4.4,
    totalRatings: 2000,
  },

  // Additional Resources
  {
    title: "Git & GitHub Complete Guide",
    description: "Master version control with Git and GitHub",
    link: "https://www.freecodecamp.org/news/guide-to-git-github/",
    platform: "FreeCodeCamp",
    category: "Web Development",
    skills: ["git", "github", "version control"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 5, unit: "hours" },
    rating: 4.7,
    totalRatings: 15000,
  },
  {
    title: "SQL Tutorial for Beginners",
    description: "Complete SQL course covering database design and queries",
    link: "https://www.freecodecamp.org/news/sql-tutorial-for-beginners/",
    platform: "FreeCodeCamp",
    category: "Web Development",
    skills: ["sql", "databases", "sql server"],
    cost: "Free",
    level: "Beginner",
    duration: { value: 4, unit: "hours" },
    rating: 4.6,
    totalRatings: 12000,
  },
  {
    title: "REST API Design Best Practices",
    description: "Learn to design scalable and maintainable REST APIs",
    link: "https://restfulapi.net/",
    platform: "Other",
    category: "Web Development",
    skills: ["rest api", "api design", "backend"],
    cost: "Free",
    level: "Intermediate",
    duration: { value: 6, unit: "hours" },
    rating: 4.8,
    totalRatings: 8000,
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Resource.deleteMany({});
    const inserted = await Resource.insertMany(resourcesData);
    console.log(`✅ ${inserted.length} resources seeded successfully`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
};

seed();
