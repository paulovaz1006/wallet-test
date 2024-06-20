import { Router } from "express"
import userRoutes from "./user.router";
import balanceRoutes from "./balance.router";
import extractRoutes from "./extract.router";

const router = Router();
const listRoutes = [
  userRoutes,
  balanceRoutes,
  extractRoutes,
]

router.use("/", listRoutes)

export default router;