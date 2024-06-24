import { TBalance, TBalanceWithoutUserId } from "../types";

export interface IBalanceUseCase {
  execute(userId: TBalance['userId']): Promise<any>;
  update(userId: TBalance['userId'], payload: TBalanceWithoutUserId): Promise<any>;
}
