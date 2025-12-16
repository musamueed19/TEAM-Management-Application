import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { httpStatus } from "../config/http.config";
import { AppError } from "../utils/appError";

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

  if (error instanceof AppError) {
    return res.status(error.statusCode).send({
      success: false,
      message: error.message,
      errorCode: error.errorCode,
    });
  }
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    success: false,
    message: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
