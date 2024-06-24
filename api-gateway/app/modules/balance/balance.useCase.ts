import { IBalanceService, IBalanceUseCase, IExtractService } from "../../dto/interfaces";
import { TBalance, TBalanceWithoutUserId } from "../../dto/types";
import sendProducer from "../../services/kafka";

class BalanceUseCase implements IBalanceUseCase {
  constructor(private balanceService: IBalanceService,
    private extractService: IExtractService
  ) {}

  async execute(userId: TBalance['userId']) {
    try {
      const getBalance = await this.balanceService.getBalance(userId);
      return getBalance;
    } catch (err) {
      return err
    }
  }

  async update(userId: TBalance['userId'], payload: TBalanceWithoutUserId) {
    try {
      const updateUser = await this.balanceService.updateBalance(userId, payload);
      const payloadToBankStatement = {
        ...payload,
        user_id: updateUser.userId
      };

      await sendProducer(payloadToBankStatement)
      await this.extractService.postExtract(payloadToBankStatement);
      return updateUser
    } catch (err) {
      return err
    }
  }
}

export {BalanceUseCase}