import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.js";
import { healthRouter } from "./routes/health.routes.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/health", healthRouter);

export default app;
