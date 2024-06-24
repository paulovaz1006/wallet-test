import { TUser } from "../types";

export interface IUserUseCase {
  execute(paylaod: TUser): Promise<any>;
}
