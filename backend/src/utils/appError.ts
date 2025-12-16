import { httpStatus, HttpStatusCodeType } from "../config/http.config";
import { ErrorCodeEnum, ErrorCodeEnumType } from "../enums/error-code.enum";

export class AppError extends Error {
  public statusCode: HttpStatusCodeType;
  public errorCode?: ErrorCodeEnumType;

  constructor(
    message: string,
    statusCode: HttpStatusCodeType = httpStatus.INTERNAL_SERVER_ERROR,
    errorCode?: ErrorCodeEnumType
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode || ErrorCodeEnum.INTERNAL_SERVER_ERROR;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpException extends AppError {
  constructor(
    message: string,
    statusCode: HttpStatusCodeType,
    errorCode?: ErrorCodeEnumType
  ) {
    super(message, statusCode, errorCode);
  }
}

export class InternalServerException extends AppError {
  constructor(
    message: string = "Internal Server Error",
    errorCode?: ErrorCodeEnumType
  ) {
    super(
      message,
      httpStatus.INTERNAL_SERVER_ERROR,
      errorCode || ErrorCodeEnum.INTERNAL_SERVER_ERROR
    );
  }
}

export class BadRequestException extends AppError {
  constructor(
    message: string = "Bad Request",
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.VALIDATION_ERROR
  ) {
    super(message, httpStatus.BAD_REQUEST, errorCode);
  }
}

export class UnauthorizedException extends AppError {
  constructor(
    message: string = "Unauthorized",
    errorCode: ErrorCodeEnumType = ErrorCodeEnum.AUTH_UNAUTHORIZED
  ) {
    super(message, httpStatus.UNAUTHORIZED, errorCode);
  }
}
