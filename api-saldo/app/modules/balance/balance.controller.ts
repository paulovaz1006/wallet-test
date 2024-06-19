import { Request, Response } from "express"
import { BalanceUseCase } from "./balance.useCase"
import { HTTPStatus, TBalance } from "../../dto";

class BalanceController  {
  private balanceUseCase: BalanceUseCase;

  constructor() {
    this.balanceUseCase = new BalanceUseCase()
  }

  async get(req: Request, res: Response): Promise<string | any> {
    const { user_id }: TBalance = req.params;

    if (!user_id) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");

    try {
      const success = await this.balanceUseCase.getBalance(user_id)
      res.status(HTTPStatus.OK).json(success);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).json(err);
    }
  }

  async put(req: Request, res: Response): Promise<string | any> {
    const { user_id }: TBalance = req.params;
    const payload: TBalance = req.body;

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