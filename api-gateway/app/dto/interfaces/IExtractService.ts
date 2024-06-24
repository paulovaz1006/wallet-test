import { TExtract } from "../types";

export interface IExtractService {
  getExtract(userId: TExtract): Promise<void>
  postExtract(payload: TExtract): Promise<void>
}