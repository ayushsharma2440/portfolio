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

// CORS — allow requests from the frontend (Railway or localhost)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: [FRONTEND_URL, "http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

// MongoDB Connection
if (!MONGO_URI || MONGO_URI.includes("your_password")) {
  console.warn(
    "⚠️ Warning: MONGO_URI is not configured in backend/.env yet. Please add your MongoDB connection string."
  );
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ Successfully connected to MongoDB"))
    .catch((err) =>
      console.error("❌ MongoDB connection error:", err.message)
    );
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? "connected" : "disconnected";
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

// Resume Download route with query param (e.g. /api/resume?format=pdf or ?format=docx)
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
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Please provide all required fields: name, email, and message.",
      });
    }

    // Check database connection
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        error:
          "MongoDB is not connected yet. Please update MONGO_URI in your backend/.env file.",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

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
});

// Optional: Retrieve messages (for admin or evaluation check)
app.get("/api/contact", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        error: "MongoDB is not connected yet.",
      });
    }

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
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend running at http://localhost:${PORT}`);
});
