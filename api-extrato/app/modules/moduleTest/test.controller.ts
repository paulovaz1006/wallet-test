import { Request, Response } from "express"
import { TestUseCase } from "./test.useCase"

class TestController  {
  async get(req: Request, res: Response): Promise<void> {
    const testUseCase = new TestUseCase()
    const success = await testUseCase.getTest()

    res.status(200).json(success)
  }
}

export {TestController} 