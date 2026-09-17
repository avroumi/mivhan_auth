import { loginService, authService } from "../services/authService.js";
import { AppError } from "../utils/AppError.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      throw new AppError("Data missing", 400);
    }
    const result = await authService({ name, password, email });
    res.status(201).json({
      message: "User create succesfully",
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    if (!email || !password) {
      throw new AppError("Data missing");
    }
    const token = await loginService(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
