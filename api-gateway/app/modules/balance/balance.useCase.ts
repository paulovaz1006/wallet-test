import { IBalanceService, IBalanceUseCase } from "../../dto/interfaces";
import { TBalance, TBalanceWithoutUserId } from "../../dto/types";

class BalanceUseCase implements IBalanceUseCase {
  constructor(private balanceService: IBalanceService) {}

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
      return updateUser
    } catch (err) {
      return err
    }
  }
}

export {BalanceUseCase}