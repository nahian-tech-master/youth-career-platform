import jwt from "jsonwebtoken";
import { AppError } from "./errorHandler.js";

// Middleware to verify JWT token and protect routes
export const authMiddleware = (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("No token provided", 401);
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");

    // Attach user info to request
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return next(new AppError("Invalid token", 401));
    }
    if (err.name === "TokenExpiredError") {
      return next(new AppError("Token expired", 401));
    }
    next(err);
  }
};

// Optional: Middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return next(new AppError("User not authenticated", 401));
  }
  next();
};