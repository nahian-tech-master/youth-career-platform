import User from "../models/userModel.js";
import { Router } from "express";
import { asyncHandler, AppError } from "../middlewares/errorHandler.js";

const router = Router();

// GET user profile by id
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) return next(new AppError("User id is required", 400));

    const user = await User.findById(id).select("-passwordHash -__v");
    if (!user) return next(new AppError("User not found", 404));

    res.json({ success: true, user });
  })
);

// PUT update user profile
router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) return next(new AppError("User id is required", 400));

    // Ownership check: if req.user exists, only allow owner to update
    if (req.user && req.user.id && req.user.id !== id) {
      return next(new AppError("Forbidden: cannot edit another user's profile", 403));
    }

    // Whitelist allowed fields to prevent accidental/unsafe updates
    const allowedFields = [
      'firstName', 'lastName', 'profileImage', 'bio',
      'educationLevel', 'department', 'graduationYear',
      'experienceLevel', 'yearsOfExperience',
      'preferredCareerTracks', 'targetRoles',
      'skills', 'experiences', 'projects',
      'cvText', 'additionalNotes',
      'location', 'jobTypes', 'workEnvironment', 'expectedSalaryRange'
    ];

    const sanitized = {};
    for (const key of allowedFields) {
      if (Object.prototype.hasOwnProperty.call(updateData, key)) {
        sanitized[key] = updateData[key];
      }
    }

    // Normalize skills: convert to simple string array (no objects!)
    if (sanitized.skills && Array.isArray(sanitized.skills)) {
      sanitized.skills = sanitized.skills.map(s => {
        if (typeof s === 'string') return s.trim();
        // If object, extract name property
        return (s.name || '').trim();
      }).filter(s => s.length > 0); // Remove empty strings
    }

    // Perform update and return the new document (exclude sensitive fields)
    const updated = await User.findByIdAndUpdate(
      id,
      { $set: sanitized },
      { new: true, runValidators: true, context: 'query' }
    ).select('-passwordHash -__v');

    if (!updated) return next(new AppError('User not found', 404));

    res.json({ success: true, user: updated });
  })
);

export default router;