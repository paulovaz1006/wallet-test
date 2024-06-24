import { BalanceRepository } from "../../repository/balance.repository"

enum ETypeTransaction {
  compras=1,
  cancelamento=2,
  estorno=3,
  adicaoDeValores=4,
  retiradaDeValores=5
}
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
    console.log("dfsodfj", payload);
    const {amount, type_transaction_id} = payload;
    let newAmount;
    const getBalance = await this.balanceRepository.findBalance(user_id);

    if (!getBalance) {
      throw new Error("Balance not found for the given user_id");
    }

    if(type_transaction_id === "5" || type_transaction_id === "1") {
      newAmount = getBalance.balance - amount
    } else {
      newAmount = getBalance.balance + amount
    }

    if (!type_transaction_id) newAmount = amount

    const updateBalance = await this.balanceRepository.update(user_id, newAmount);

    return updateBalance;
  }

  async post(payload: any) {
    const updateBalance = await this.balanceRepository.save(payload);
    return updateBalance;
  }
}

export {BalanceUseCase}