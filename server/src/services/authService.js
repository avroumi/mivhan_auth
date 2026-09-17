import { createUser, findUserByEmail } from "./usersService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../utils/AppError.js";

const createToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return token;
};

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
  return createToken(userId);
};

export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError("Wrong password", 401);
  }

  return createToken(user._id);
};
