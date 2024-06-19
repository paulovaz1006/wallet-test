import { BalanceRepository } from "../../repository/balance.repository"

class BalanceUseCase {
  private balanceRepository: BalanceRepository;

  constructor() {
    this.balanceRepository = new BalanceRepository()
  }

  async getBalance(user_id: string) {
    const getBalance = await this.balanceRepository.findBalance(user_id);
    const result = !getBalance ? 'Balance not found' : getBalance;

    return result;
  }

  async update(user_id: string, payload: any){
    const {amount} = payload;
    const updateBalance = await this.balanceRepository.update(user_id, amount);

    return updateBalance;
  }

  async post(payload: any) {
    const updateBalance = await this.balanceRepository.save(payload);
    return updateBalance;
  }
}

export {BalanceUseCase}