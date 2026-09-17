import { createUser, findUserByEmail } from "./usersService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../utils/AppError.js";

export const authService = async (data) => {
  const { name, email, password } = data;
  const existByemail = await findUserByEmail(email);
  if (existByemail) {
    throw new AppError("Email already exist", 409);
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const userId = await createUser({
    name,
    password: hashedPassword,
    email,
  });
  return userId;
};

export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError("Wrong password", 401);
  }
  const token = jwt.sign({ UserId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
