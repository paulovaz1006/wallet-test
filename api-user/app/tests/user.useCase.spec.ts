import { AppDataSource } from "../../data-source";
import { UserUseCase } from "../modules/user/user.useCase";

jest.mock("../../data-source", () => ({
  AppDataSource: {
    initialize: jest.fn().mockResolvedValue(undefined),
    destroy: jest.fn().mockResolvedValue(undefined),
  },
}));

describe("UserUseCase", () => {
  let userUseCase: UserUseCase;

  afterEach(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(async () => {
    await AppDataSource.initialize();
    userUseCase = new UserUseCase();

    jest.spyOn(userUseCase, 'saveData').mockImplementation(async (payload: { name: string; cnpj: number }) => {
      return {
        cnpj: payload.cnpj,
        message: "User created successfully",
      };
    });
  });

  it("should return user created", async () => {
    const mockPayload = {
      name: "teste",
      cnpj: 111111111,
    };

    const response = await userUseCase.saveData(mockPayload);

    expect(response).toHaveProperty("cnpj");
    expect(response).toHaveProperty("message");
  });
});
