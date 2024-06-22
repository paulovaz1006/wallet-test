import { ExtractRepository } from "../../repository/extract.repository"

class ExtractUseCase {
  private extractRepository: ExtractRepository;

  constructor() {
    this.extractRepository = new ExtractRepository()
  }

  async getExtract(user_id: string) {
    const getExtract = await this.extractRepository.findExtract(user_id);
    const result = !getExtract ? 'Extract not found' : getExtract;

    return result;
  }

  async saveData(payload: {
    amount: number,
    description: string,
    user_id: string,
    typeTransaction: string,
}) {
    const result = await this.extractRepository.save(payload);
    return result;
  }
}

export {ExtractUseCase}