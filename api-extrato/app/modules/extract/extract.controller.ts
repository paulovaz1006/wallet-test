import { Request, Response } from "express"
import { ExtractUseCase } from "./extract.useCase"

import { HTTPStatus, TExtract } from "../../dto";
import createConsumer from "../../service/kafka";

class ExtractController  {
  private extractUseCase: ExtractUseCase;

  constructor() {
    this.extractUseCase = new ExtractUseCase()
  }

  get = async(req: Request, res: Response): Promise<string | any> => {
    const {user_id}: TExtract = req.params;
    if (!user_id || user_id.length === 2) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");

    try {
      const success = await this.extractUseCase.getExtract(user_id)
      res.status(HTTPStatus.OK).json(success);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).json(err);
    }
  }

  post = async (req: Request, res: Response) => {
    try {
      const result = await createConsumer(this.extractUseCase.saveData) 
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export {ExtractController} 