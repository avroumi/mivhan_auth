import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import "dotenv/config";

export const authMiddelware = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      throw new AppError("Acces denied", 403);
    }
    const [bearer, token] = auth.split(" ");

    if (!bearer || !token) {
      throw new AppError("Access denied", 403);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      throw new AppError("Access denied", 401);
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
};
