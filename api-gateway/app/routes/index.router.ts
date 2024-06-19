import { Router } from "express"
import userRoutes from "./user.router";
import balanceRoutes from "./balance.router";
import extractRoutes from "./extract.router";

const router = Router();

router.use("/", userRoutes)
router.use("/", balanceRoutes)
router.use("/", extractRoutes)

export default router;