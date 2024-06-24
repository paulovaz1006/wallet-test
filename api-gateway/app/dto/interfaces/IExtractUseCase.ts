import { TExtract } from "../types";

export interface IExtractUseCase {
  execute(userId: TExtract): Promise<void>
}