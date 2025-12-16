import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { httpStatus } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  console.error(`❌❌❌ Error Occurred on PATH: ${req.path} ❌❌❌`, error);
  if (error instanceof SyntaxError) {
    return res.status(httpStatus.BAD_GATEWAY).send({
      success: false,
      message: "Invalid JSON format. Please check your request body",
    });
  }
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    success: false,
    message: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
