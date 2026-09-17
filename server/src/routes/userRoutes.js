import { Router } from "express";
import { findUserByIdController } from "../controllers/usersController.js";
import { authMiddelware } from "../middleware/authMiddelware.js";

const router = Router();

router.get("/user", authMiddelware, findUserByIdController);

export default router;
