import { TBalanceUseCase, TBalanceUseCaseWithoutUserId } from "../types";

export interface IBalanceUseCase {
  execute(userId: TBalanceUseCase['userId']): Promise<any>;
  update(userId: TBalanceUseCase['userId'], payload: TBalanceUseCaseWithoutUserId): Promise<any>;
}
