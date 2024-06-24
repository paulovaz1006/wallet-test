import { TExtract } from "../types";

export interface IExtractService {
  getExtract(userId: TExtract): Promise<void>
}