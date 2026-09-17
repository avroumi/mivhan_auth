import { ObjectId } from "mongodb";
import { connectDb } from "../config/mongodb.js";

const db = await connectDb();
const usersCollection = db.collection("users");

export const createUser = async (data) => {
  const { name, email, password } = data;
  const result = await usersCollection.insertOne({ name, password, email });

  return result.insertedId;
};

export const findUserByEmail = async (email) => {
  const user = await usersCollection.findOne({ email });
  return user;
};

export const finduserByid = async (userId) => {
  const user = await usersCollection.findOne(
    { _id: new ObjectId(userId) },
    { projection: { password: 0 } },
  );
  return user;
};
