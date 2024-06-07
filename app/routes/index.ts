import { Router } from "express"
import routerTest from "./test.router"

const routes = Router()

routes.use("/test", routerTest)

export default routes