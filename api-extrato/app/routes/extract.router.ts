import { Router } from "express"
import { ExtractController } from "../modules/extract/extract.controller"
import kafkaMiddleware from "../midleware/kafkaMidleware"

const router = Router()
const extractController = new ExtractController()

router.get("/extract/:user_id", extractController.get)
router.post("/extract", kafkaMiddleware, extractController.post)

export default router;