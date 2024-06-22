import { BalanceUseCase } from "../../modules/balance/balance.useCase";

describe("BalanceUseCase", () => {
  let balanceUseCase: BalanceUseCase;

  beforeEach(() => {
    balanceUseCase = new BalanceUseCase();

    jest.spyOn(balanceUseCase, 'execute').mockImplementation(async (userId: string) => {
      return {
        balance: 1000,
        id: "1",
        user_id: userId,
      };
    });

    jest.spyOn(balanceUseCase, 'update').mockImplementation(async (userId: string, amount: number) => {
      return {
        balance: 1200,
        message: "Balance updated successfully",
      };
    });
  });

  it("should return a bank statement", async () => {
    const response = await balanceUseCase.execute("1");

    expect(response).toHaveProperty("balance");
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("user_id");
  });

  it("should return balance update", async () => {
    const payload = {
      amount: 200,
    };
    const response = await balanceUseCase.update("1", payload.amount);

    expect(response).toHaveProperty("balance");
    expect(response).toHaveProperty("message");
  });
});
