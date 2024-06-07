import { Router } from "express"
import { TestController } from "../modules/moduleTest/test.controller"

const routerTest = Router()
const controllerTest = new TestController()

routerTest.get("/", controllerTest.get)

export default routerTest