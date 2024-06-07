import { TestRepository } from "../../repository/test.repository"

class TestUseCase {
  async getTest() {
    const testRepository = new TestRepository()
    return await testRepository.get()
  }
}

export {TestUseCase}