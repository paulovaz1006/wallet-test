import { Request, Response } from "express"
import { ExtractUseCase } from "./extract.useCase"
import { HTTPStatus, TExtract } from "../../dto";

class ExtractController  {
  private extractUseCase: ExtractUseCase;

  constructor() {
    this.extractUseCase = new ExtractUseCase()
  }

  get = async(req: Request, res: Response): Promise<string | any> => {
    const { user_id }: TExtract = req.params;

    if (!user_id) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");

    try {
      const success = await this.extractUseCase.getExtract(user_id)
      res.status(HTTPStatus.OK).json(success);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).send("Extract not found");
    }
  }

  post = async (req: Request, res: Response) => {
    const payload: TExtract = req.body;

    try {
      const result = await this.extractUseCase.saveData(payload)
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      console.error(err);
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export {ExtractController} 