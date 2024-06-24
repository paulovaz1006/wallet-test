import { TBalance, TBalanceWithoutUserId } from "../types";

export interface IBalanceService {
  getBalance(userId: TBalance['userId']): Promise<any>;
  updateBalance(userId: TBalance['userId'], payload: TBalanceWithoutUserId): Promise<any>
}