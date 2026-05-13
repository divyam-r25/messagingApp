import axios from "axios";
import type { HealthResponse } from "../types/api";

const baseURL =
  typeof import.meta.env.VITE_API_URL === "string" && import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : "http://localhost:5000";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

export async function getHealth(): Promise<HealthResponse> {
  const response = await api.get<HealthResponse>("/api/health");
  return response.data;
}

