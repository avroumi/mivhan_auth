import { ObjectId } from "mongodb";
import { connectDb } from "../config/mongodb.js";

const db = await connectDb();
const usersCollection = db.collection("users");

export const createUser = async (data) => {
  const { name, email, password } = data;
  const id = await usersCollection.insertOne({ name, password, email })
    .insertedId;
  return id;
};

export const findUserByEmail = async (email) => {
  const user = await usersCollection.findOne({ email });
  return user;
};

export const finduserByid = async (userId) => {
  const user = await findOne({ _id: new ObjectId(userId) });
  return user;
};
