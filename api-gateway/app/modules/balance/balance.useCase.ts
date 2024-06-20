import { BalanceService } from "../../services/balance/balance.service";

class BalanceUseCase {
  private balanceService: BalanceService;

  constructor() {
    this.balanceService = new BalanceService()
  }

  async execute(payload: any) {
    try {
      const createUser = await this.balanceService.getBalance(payload);
      return createUser
    } catch (err) {
      return err
    }
  }

  async update(user_id: string, payload: any) {
    try {
      const updateUser = await this.balanceService.updateBalance(user_id, payload);
      return updateUser
    } catch (err) {
      return err
    }
  }
}

export {BalanceUseCase}