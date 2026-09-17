import express from "express";
import "dotenv/config";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
import { connectDb } from "./src/config/mongodb.js";
import authRoute from "./src/routes/authRoutes.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.use("/auth", authRoute);

app.use(errorMiddleware);

const checkConnect = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => console.log(`listening in port ${PORT}`));
  } catch (error) {
    throw new Error(error.message);
  }
};

checkConnect();
