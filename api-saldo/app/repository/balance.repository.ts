import { AppDataSource } from "../configs/database/data-source"
import AccountsEntity from "../entity/Accounts.entity"

class BalanceRepository {
  private repositoryEntity;

  constructor() {
    this.repositoryEntity = AppDataSource.getRepository(AccountsEntity)
  }

  async findBalance(user_id: string) {
    return await this.repositoryEntity.findOneBy({user_id})
  }

  async update(user_id: string, amount: number) {
    const getUser = await this.findBalance(user_id)

    if (getUser) {
      getUser.balance = amount;
      this.repositoryEntity.save(getUser);
    } else {
      return "Error"
    }
  }
}

export { BalanceRepository }