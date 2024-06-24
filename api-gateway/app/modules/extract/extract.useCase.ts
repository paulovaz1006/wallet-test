import { IExtractService } from "../../dto/interfaces";
import { TExtract } from "../../dto/types";

class ExtractUseCase {
  constructor(private extractService: IExtractService) {}

  async execute(userId: TExtract) {
    try {
      const createUser = await this.extractService.getExtract(userId);
      return createUser
    } catch (err) {
      return err
    }
  }
}

export {ExtractUseCase}