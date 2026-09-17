import express from "express";
import "dotenv/config";
import cors from "cors";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
import { connectDb } from "./src/config/mongodb.js";
import authRoute from "./src/routes/authRoutes.js";
import userRoute from "./src/routes/userRoutes.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://127.0.0.1:5174",
      "http://127.0.0.1:5173",
      "http://localhost:5173",
    ],
  }),
);

app.get("/health", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.use("/auth", authRoute);
app.use(userRoute);

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
