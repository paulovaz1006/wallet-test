import { Router } from "express"
import { BalanceController } from "../modules/balance/balance.controller";

const router = Router()
const balanceController = new BalanceController()

router.get("/balance/:user_id", balanceController.get)

export default router;