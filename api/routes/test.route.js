import exppess from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = exppess.Router()

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn)

router.get("/should-be-admin", shouldBeAdmin)

export default router;