import { Request, Response } from "express"
import { BalanceUseCase } from "./balance.useCase"

class BalanceController  {
  private balanceUseCase: BalanceUseCase;

  constructor() {
    this.balanceUseCase = new BalanceUseCase()
  }

  async get(req: Request, res: Response) {
    const { user_id } = req.params;

    if (!user_id) return res.status(400).send("User id is required");

    try {
      const success = await this.balanceUseCase.getBalance(user_id)
      res.status(200).json(success);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async put(req: Request, res: Response) {
    const { user_id } = req.params;
    const payload = req.body;

    if (!user_id) return res.status(400).send("User id is required");

    try {
      const success = await this.balanceUseCase.update(user_id, payload);
      res.status(200).json(success);
    } catch (err) {
      res.status(400).send("Failed to update balance");
    }
  }
}

export {BalanceController} 