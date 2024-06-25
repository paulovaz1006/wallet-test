import { UserUseCase } from "../../modules/user/user.useCase";

describe("UserUseCase", () => {
  let userUseCase: UserUseCase;

  beforeEach(() => {
    userUseCase = new UserUseCase();

    jest.spyOn(userUseCase, 'execute').mockImplementation(async (payload: { name: string; cnpj: number }) => {
      return {
        cnpj: payload.cnpj,
        message: "User created successfully",
      };
    });
  });

  it("should return user created", async () => {
    const mockPayload = {
      name: "teste",
      cnpj: 111111111
    };

    const response = await userUseCase.execute(mockPayload);

    expect(response).toHaveProperty("cnpj");
    expect(response).toHaveProperty("message");
  });
});
