import { Request, Response } from "express";
import { HTTPStatus } from "../../dto/enums/HTTPStatus.enum";
import { BalanceUseCase } from "./balance.useCase";
import { BalanceService } from "../../services/balance/balance.service";
import { ExtractService } from "../../services/extract/extract.service";
class BalanceController  {
  private balanceUseCase: BalanceUseCase;

  constructor() {
    this.balanceUseCase = new BalanceUseCase(new BalanceService(), new ExtractService());
  }

  get = async (req: Request, res: Response) => {
    const payload = req.params.user_id;

    try {
      const result = await this.balanceUseCase.execute(payload)

      res.status(HTTPStatus.OK).json(result);
    } catch (err) {
      res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }

  put = async (req: Request, res: Response): Promise<string | any> => {
    const { user_id } = req.params;
    const payload = req.body;

    if (!user_id) return res.status(HTTPStatus.UNPROCESSABLE).send("User id is required");
    
    let success;

    try {
      success = await this.balanceUseCase.update(user_id, payload);
    } catch (err) {
      return res.status(HTTPStatus.NOT_FOUND).send("Failed to update balance");
    }

    return res.status(HTTPStatus.OK).json(success);
  }
}

export {BalanceController} 