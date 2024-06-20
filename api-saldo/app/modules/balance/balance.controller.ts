import { Request, Response } from "express"
import { BalanceUseCase } from "./balance.useCase"
import { HTTPStatus, TBalance } from "../../dto";

class BalanceController  {
  private balanceUseCase: BalanceUseCase;

  constructor() {
    this.balanceUseCase = new BalanceUseCase()
  }

  get = async (req: Request, res: Response): Promise<string | any> => {
    const { user_id }: TBalance = req.params;

    if (!user_id) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");

    try {
      const success = await this.balanceUseCase.getBalance(user_id)
      res.status(HTTPStatus.OK).json(success);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).json(err);
    }
  }

  put = async (req: Request, res: Response): Promise<string | any> => {
    const { user_id }: TBalance = req.params;
    const payload: TBalance = req.body;

    if (!user_id) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");

    try {
      const success: any = await this.balanceUseCase.update(user_id, payload);

      const formatMessage = {
        balance: success,
        message: "Balance updated successfully"
      }
      res.status(HTTPStatus.OK).json(formatMessage);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).send("Failed to update balance");
    }
  }

  post = async (req: Request, res: Response): Promise<string | any> => {
    const payload: TBalance = req.body;
    
    try {
      const success = await this.balanceUseCase.post(payload);
      res.status(HTTPStatus.OK).json(success);
    } catch (err) {
      res.status(HTTPStatus.NOT_FOUND).send("Failed to create balance");
    }
  }  
}

export {BalanceController} 