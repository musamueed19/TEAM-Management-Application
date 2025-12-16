import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

type AsyncControllerParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const asyncHandler =
  (controller: AsyncControllerParams): AsyncControllerParams =>
  async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
