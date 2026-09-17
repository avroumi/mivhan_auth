import { AppError } from "../utils/AppError.js";
import { finduserByid } from "../services/usersService.js";

export const findUserByIdController = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await finduserByid(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
