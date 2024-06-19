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
}

export {BalanceController} 