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
    
    return await this.repositoryEntity.save({...payload, ...bankStatementEntity})
  }
}

export { ExtractRepository } 