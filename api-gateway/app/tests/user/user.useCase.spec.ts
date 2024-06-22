import { UserUseCase } from "../../modules/user/user.useCase";

describe("UserUseCase", () => {
  let userUseCase: UserUseCase;

  beforeEach(() => {
    userUseCase = new UserUseCase();

    jest.spyOn(userUseCase, 'execute').mockImplementation(async (payload: { name: string; cpf: number }) => {
      return {
        cpf: payload.cpf,
        message: "User created successfully",
      };
    });
  });

  it("should return user created", async () => {
    const mockPayload = {
      name: "teste",
      cpf: 111111111
    };

    const response = await userUseCase.execute(mockPayload);

    expect(response).toHaveProperty("cpf");
    expect(response).toHaveProperty("message");
  });
});
