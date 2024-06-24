import { Request, Response } from "express";
import { ExtractUseCase } from "./extract.useCase";
import { HTTPStatus } from "../../dto/enums/HTTPStatus.enum";
import { ExtractService } from "../../services/extract/extract.service";

class ExtractController {
  private extractUseCase: ExtractUseCase;

  constructor() {
    this.extractUseCase = new ExtractUseCase(new ExtractService())
  }

  get = async (req: Request, res: Response) => {
    const {user_id} = req.params;
    const payload = {
      userId:user_id
    }
    try {
      const result = await this.extractUseCase.execute(payload)
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export { ExtractController }