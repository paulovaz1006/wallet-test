import { Request, Response } from "express";
import { ExtractUseCase } from "./extract.useCase";
import { HTTPStatus } from "../../dto";

class ExtractController {
  private extractUseCase: ExtractUseCase;

  constructor() {
    this.extractUseCase = new ExtractUseCase()
  }

  get = async (req: Request, res: Response) => {
    const payload = req.params.user_id;

    try {
      const result = await this.extractUseCase.execute(payload)
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export { ExtractController }