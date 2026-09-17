import { Router } from "express";
import { findUserByIdController } from "../controllers/usersController.js";
import { authMiddelware } from "../middleware/authMiddelware.js";
import router from "./authRoutes.js";

router.get("/user", authMiddelware, findUserByIdController);

export default router;
