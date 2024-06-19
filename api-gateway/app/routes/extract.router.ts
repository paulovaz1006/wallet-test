import { Router } from "express"
import { ExtractController } from "../modules/extract/extract.controller";

const router = Router()
const extractController = new ExtractController()

router.get("/extract/:user_id", extractController.get)

export default router;