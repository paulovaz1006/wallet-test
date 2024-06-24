import { TBalanceUseCase, TBalanceUseCaseWithoutUserId } from "../types";

export interface IBalanceService {
  getBalance(userId: TBalanceUseCase['userId']): Promise<any>;
  updateBalance(userId: TBalanceUseCase['userId'], payload: TBalanceUseCaseWithoutUserId): Promise<any>
}