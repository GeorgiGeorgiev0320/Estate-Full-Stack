import exppess from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = exppess.Router()

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;