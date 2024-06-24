import { IBalanceService, IBalanceUseCase } from "../../dto/interfaces";
import { TBalanceUseCase, TBalanceUseCaseWithoutUserId } from "../../dto/types";

class BalanceUseCase implements IBalanceUseCase {
  constructor(private balanceService: IBalanceService) {}

  async execute(userId: TBalanceUseCase['userId']) {
    try {
      const getBalance = await this.balanceService.getBalance(userId);
      return getBalance;
    } catch (err) {
      return err
    }
  }

  async update(userId: TBalanceUseCase['userId'], payload: TBalanceUseCaseWithoutUserId) {
    try {
      const updateUser = await this.balanceService.updateBalance(userId, payload);
      return updateUser
    } catch (err) {
      return err
    }
  }
}

export {BalanceUseCase}