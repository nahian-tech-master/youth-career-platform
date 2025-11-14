import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Authroute from "./routes/AuthRoute.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

dotenv.config();
await connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', Authroute);

app.get("/api/message", (req, res) => {
    res.status(200).json({ message: 'hello how are you' });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({ 
        status: "Server is running",
        timestamp: new Date(),
        environment: process.env.NODE_ENV || "development"
    });
});

app.use(notFound);
// Error handling middleware (must be last)
app.use(errorHandler);

const Port = process.env.PORT || 4000;
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});