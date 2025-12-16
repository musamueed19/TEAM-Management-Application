// dotenv will help us to get environment variables from our .env files
import "dotenv/config";
import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import session from "cookie-session";
import { config } from "./config/app.config";
import connectionDatabase from "./config/database.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { httpStatus } from "./config/http.config";

// create express app
const app = express();

// get BasePath URL from config
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie session middleware setup
app.use(
  session({
    name: "session",
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  })
);

// CORS middleware setup
app.use(
  cors({
    origin: config.CORS_ORIGINS,
    credentials: true,
  })
);

// GET '/'
app.get(`/`, (req: Request, res: Response, next: NextFunction) =>
  res.status(httpStatus.OK).send({
    success: true,
    message: "Ahsan, Give me your Pu**y",
  })
);

// GET HEALTH
app.get(
  `${BASE_PATH}/health`,
  (req: Request, res: Response, next: NextFunction) =>
    res.status(httpStatus.OK).send({
      success: true,
      message: "API is healthy",
    })
);

app.use(errorHandler);

// start the server, setup listner
app.listen(config.PORT, async () => {
  console.log(
    `Server is running on port ${config.PORT}\nBase Path: ${BASE_PATH}\nWebiste: https://temixa.vercel.app\nLocal Development URL: http://localhost:${config.PORT}${BASE_PATH}`
  );
  await connectionDatabase();
});
