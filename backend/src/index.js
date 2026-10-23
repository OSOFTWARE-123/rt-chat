import express from "express";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
