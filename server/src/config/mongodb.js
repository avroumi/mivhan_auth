import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URI);

export const connectDb = async () => {
  await client.connect();
  console.log("mongoDb connected");
  const db = client.db("mivhanAuth");
  return db;
};
