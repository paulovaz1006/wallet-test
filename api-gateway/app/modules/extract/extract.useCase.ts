import { ExtractService } from "../../services/extract/extract.service";

class ExtractUseCase {
  private extractService: ExtractService;

  constructor() {
    this.extractService = new ExtractService()
  }

  async execute(payload: any) {
    try {
      const createUser = await this.extractService.getExtract(payload);
      return createUser
    } catch (err) {
      return err
    }
  }
}

export {ExtractUseCase}