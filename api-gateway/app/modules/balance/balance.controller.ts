import { Request, Response } from "express";
import { HTTPStatus } from "../../dto";
import { BalanceUseCase } from "./balance.useCase";

class BalanceController  {
  private balanceUseCase: BalanceUseCase;

  constructor() {
    this.balanceUseCase = new BalanceUseCase()
  }

  get = async (req: Request, res: Response) => {
    const payload = req.params.user_id;

    try {
      const result = await this.balanceUseCase.execute(payload)
      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      console.error(err);
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }

  put = async (req: Request, res: Response): Promise<string | any> => {
    const { user_id } = req.params;
    const payload = req.body;

    if (!user_id) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");

    try {
      const success = await this.balanceUseCase.update(user_id, payload);
      res.status(HTTPStatus.OK).json(success);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).send("Failed to update balance");
    }
  }
}

export {BalanceController} 