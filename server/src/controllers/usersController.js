import { AppError } from "../utils/AppError.js";
import { finduserByid } from "../services/usersService.js";

export const findUserByIdController = async (req, res, next) => {
  try {
    console.log("start");
    const userId = req.userId;
    const user = await finduserByid(userId);
    console.log(user);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    res.status(200).json({ ...user, _id: user._id.toString() });
  } catch (error) {
    next(error);
  }
};
