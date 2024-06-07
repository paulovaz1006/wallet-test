import { AppDataSource } from "../../data-source"
import TestEntity from "../entity/Test.entity"

class TestRepository {
  async get() {
    const repositoryEntity = AppDataSource.getRepository(TestEntity)
    return await repositoryEntity.find()
  }
}

export { TestRepository }