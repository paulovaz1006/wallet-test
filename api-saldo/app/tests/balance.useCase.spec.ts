import { AppDataSource } from "../../data-source";
import { BalanceUseCase } from "../modules/balance/balance.useCase";
import { v4 as uuid } from "uuid";

jest.mock("../../data-source", () => ({
  AppDataSource: {
    initialize: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("UserUseCase", () => {
  let balanceUseCase: BalanceUseCase;

  afterEach(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(async () => {
    await AppDataSource.initialize();
    balanceUseCase = new BalanceUseCase();

    jest.spyOn(balanceUseCase, 'getBalance').mockImplementation(async (userId: string) => {
      return {
        balance: 1000,
        id: userId,
        user_id: userId,
      };
    });

    jest.spyOn(balanceUseCase, 'post').mockImplementation(async (payload: { balance: number; user_id: string }) => {
      return {
        balance: payload.balance,
        id: uuid(),
        user_id: payload.user_id,
      };
    });

    jest.spyOn(balanceUseCase, 'update').mockImplementation(async (userId: string, amount: number) => {
      return amount > 0 ? 1200 : "Error";
    });
  });

  it("should return a bank statement", async () => {
    const response = await balanceUseCase.getBalance("1");

    expect(response).toHaveProperty("balance");
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("user_id");
  });

  it("should return balance created", async () => {
    const payload = {
      balance: 2000,
      user_id: uuid(),
    };
    const response = await balanceUseCase.post(payload);

    expect(response).toHaveProperty("balance");
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("user_id");
  });

  it("should return balance update", async () => {
    const payload = {
      amount: 200,
    };
    const response = await balanceUseCase.update("1", payload.amount);

    expect(response).toBe(1200);
  });
});
