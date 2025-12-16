import { getEnv } from "../utils/get.env.js";

const appConfig = () => ({
  PORT: parseInt(getEnv("PORT", "8000"), 10),
  NODE_ENV: getEnv("NODE_ENV", "development"),
  BASE_PATH: getEnv("BASE_PATH", "/api"),
  MONGO_URL: getEnv("DATABASE_URL"),

  // AUTHENTICATION
  SESSION_SECRET: getEnv("SESSION_SECRET"),
  SESSION_EXPIRES_IN: getEnv("SESSION_EXPIRES_IN"),

  // CORS
  CORS_ORIGINS: getEnv("CORS_ORIGINS").split(","),

  // GOOGLE OAUTH CONFIGURATION
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  GOOGLE_CALLBACK_URL: getEnv("GOOGLE_CALLBACK_URL"),

  // FRONTEND URL
  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN"),
  FRONTEND_GOOGLE_CALLBACK_URL: getEnv("FRONTEND_GOOGLE_CALLBACK_URL"),
});


export const config = appConfig();