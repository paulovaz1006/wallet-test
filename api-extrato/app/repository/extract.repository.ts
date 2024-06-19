import { AppDataSource } from "../../data-source"
import BankStatementEntity from "../entity/bankStatement.entity";
import BankStatement from "../entity/bankStatement.entity"

class ExtractRepository {
  private repositoryEntity;

  constructor() {
    this.repositoryEntity = AppDataSource.getRepository(BankStatement)
  }

  async findExtract(user_id: string) {
    return await this.repositoryEntity.findBy({user_id})
  }

  async save(payload: any) { 
    const bankStatementEntity = new BankStatementEntity()
    const {user_id, type_transaction_id, amount} = payload;
    const values = {
      ...bankStatementEntity,
      user_id,
      type_transaction_id,
      amount
    }
    return await this.repositoryEntity.save(values)
  }
}

export { ExtractRepository } 