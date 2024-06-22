import { AppDataSource } from "../../data-source";
import { BalanceUseCase } from "../modules/balance/balance.useCase";
import {v4 as uuid} from "uuid";

describe("UserUseCase", () => {
  let balanceUseCase: BalanceUseCase;

  afterEach(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(async () => {
    await AppDataSource.initialize();
    balanceUseCase = new BalanceUseCase()
  })

  it("should return user created", async () => {
    const mockPayload = {
      balance: 2000,
      user_id: uuid()
    }

    const response = await balanceUseCase.post(mockPayload);

    expect(response).toHaveProperty("cpf")
    expect(response).toHaveProperty("message")
  })
});
