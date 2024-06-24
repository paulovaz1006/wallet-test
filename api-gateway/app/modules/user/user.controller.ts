import { Request, Response } from "express";
import { UserUseCase } from "./user.useCase"
import { UserService } from "../../services/user/user.service";
import { TUser } from "../../dto/types";
import { HTTPStatus } from "../../dto/enums/HTTPStatus.enum";

class UserController  {
  private userUseCase: UserUseCase;

  constructor() {
    this.userUseCase = new UserUseCase(new UserService())
  }

  post = async (req: Request, res: Response) => {
    const payload: TUser = req.body;

    try {
      const result = await this.userUseCase.execute(payload)
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export {UserController} 