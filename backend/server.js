import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Contact from "./models/Contact.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// CORS - allow requests from the frontend (Vercel or localhost)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: [FRONTEND_URL, "http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

// Serverless-safe MongoDB connection
// Caches the connection so it is reused across warm Vercel invocations
let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;

  if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not set.");
  }

  await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  });

  isConnected = true;
  console.log("Successfully connected to MongoDB");
};

// Middleware: connect to DB before every request that needs it
const withDB = (handler) => async (req, res) => {
  try {
    await connectDB();
    return handler(req, res);
  } catch (err) {
    console.error("DB connection error:", err.message);
    return res.status(503).json({
      success: false,
      error: "Database connection failed: " + err.message,
    });
  }
};

// Health check endpoint
app.get("/api/health", async (req, res) => {
  let dbStatus = "disconnected";
  try {
    await connectDB();
    dbStatus = "connected";
  } catch (e) {
    dbStatus = "error: " + e.message;
  }
  res.status(200).json({
    status: "ok",
    message: "Portfolio backend server is active",
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

// Resume Download Routes (supports /api/resume/pdf and /api/resume/docx)
app.get("/api/resume/:format", (req, res) => {
  const format = req.params.format.toLowerCase().replace(".", "");
  const filesDir = path.join(__dirname, "files");

  if (format === "docx" || format === "word") {
    const filePath = path.join(filesDir, "Ayush_Sharma_Resume.docx");
    if (fs.existsSync(filePath)) {
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );
      return res.download(filePath, "Ayush_Sharma_Resume.docx");
    }
  } else if (format === "pdf") {
    const filePath = path.join(filesDir, "Ayush_Sharma_Resume.pdf");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/pdf");
      return res.download(filePath, "Ayush_Sharma_Resume.pdf");
    }
  }

  return res.status(404).json({
    success: false,
    error: "Resume file format not found. Supported formats: pdf, docx",
  });
});

// Resume Download route with query param
app.get("/api/resume", (req, res) => {
  const format = (req.query.format || "pdf").toLowerCase().replace(".", "");
  const filesDir = path.join(__dirname, "files");

  if (format === "docx" || format === "word") {
    const filePath = path.join(filesDir, "Ayush_Sharma_Resume.docx");
    if (fs.existsSync(filePath)) {
      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );
      return res.download(filePath, "Ayush_Sharma_Resume.docx");
    }
  } else {
    const filePath = path.join(filesDir, "Ayush_Sharma_Resume.pdf");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/pdf");
      return res.download(filePath, "Ayush_Sharma_Resume.pdf");
    }
  }

  return res.status(404).json({
    success: false,
    error: "Resume file not found.",
  });
});

// Contact API: Submit a message
app.post(
  "/api/contact",
  withDB(async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Please provide all required fields: name, email, and message.",
        });
      }

      const newContact = await Contact.create({ name, email, message });

      return res.status(201).json({
        success: true,
        message: "Thank you! Your message has been received.",
        data: {
          id: newContact._id,
          name: newContact.name,
          email: newContact.email,
          createdAt: newContact.createdAt,
        },
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Internal server error occurred.",
      });
    }
  })
);

// Retrieve messages
app.get(
  "/api/contact",
  withDB(async (req, res) => {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
      return res.status(200).json({
        success: true,
        count: messages.length,
        data: messages,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  })
);

// Start Express Server (local dev only - Vercel uses export default)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Portfolio backend running at http://localhost:${PORT}`);
  });
}

export default app;
