import { Request, Response } from "express";
import { UserUseCase } from "./user.useCase"
import { HTTPStatus } from "../../dto";

class UserController  {
  private userUseCase: UserUseCase;

  constructor() {
    this.userUseCase = new UserUseCase()
  }

  post = async (req: Request, res: Response) => {
    const payload = req.body;

    try {
      const result = await this.userUseCase.execute(payload)
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      console.error(err);
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export {UserController} 