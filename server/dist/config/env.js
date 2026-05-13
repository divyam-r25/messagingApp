import dotenv from "dotenv";
dotenv.config();
function requireEnv(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`${key} missing`);
    }
    return value;
}
function optionalEnv(key) {
    const value = process.env[key];
    return value ? value : undefined;
}
function readPort() {
    const raw = optionalEnv("PORT");
    if (!raw)
        return 5000;
    const port = Number.parseInt(raw, 10);
    if (!Number.isFinite(port) || Number.isNaN(port)) {
        throw new Error("PORT must be a valid number");
    }
    if (port < 1 || port > 65535) {
        throw new Error("PORT must be between 1 and 65535");
    }
    return port;
}
export const env = {
    PORT: readPort(),
    CORS_ORIGIN: optionalEnv("CORS_ORIGIN") ?? "http://localhost:5173",
    JWT_SECRET: requireEnv("JWT_SECRET"),
    DATABASE_URL: requireEnv("DATABASE_URL"),
    CLOUDINARY_SECRET: requireEnv("CLOUDINARY_SECRET"),
};
//# sourceMappingURL=env.js.map