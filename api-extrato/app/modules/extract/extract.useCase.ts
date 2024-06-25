import { ExtractRepository } from "../../repository/extract.repository"

class ExtractUseCase {
  private extractRepository: ExtractRepository;

  constructor() {
    this.extractRepository = new ExtractRepository()
  }

  getExtract = async (user_id: string)  => {
    const getExtract = await this.extractRepository.findExtract(user_id);
    const result = !getExtract ? 'Extract not found' : getExtract;

    return result;
  }

  saveData = async (payload: {
    amount: number,
    description: string,
    user_id: string,
    typeTransaction: string,
}) => {
    const result = await this.extractRepository.save(payload);
    return result;
  }
}

export {ExtractUseCase}