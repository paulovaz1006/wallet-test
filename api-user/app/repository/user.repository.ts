import { AppDataSource } from "../../data-source"
import UserEntity from "../entity/user.entity";

class UserRepository {
  private repositoryEntity;

  constructor() {
    this.repositoryEntity = AppDataSource.getRepository(UserEntity)
  }

  async save(payload: any) { 
    const userEntity = new UserEntity()
    
    return await this.repositoryEntity.save({...payload, ...userEntity})
  }

  async findByCpf(cpf: number) { 
    return await this.repositoryEntity.findOneBy({cpf})
  }
}

export { UserRepository }