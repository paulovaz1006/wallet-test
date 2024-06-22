import { AppDataSource } from "../../data-source";
import { UserUseCase } from "../modules/user/user.useCase";

describe("UserUseCase", () => {
  let userUseCase: UserUseCase;

  afterEach(async () => {
    await AppDataSource.destroy();
  });

  beforeEach(async () => {
    await AppDataSource.initialize();
    userUseCase = new UserUseCase()
  })

  it("should return user created", async () => {
    const mockPayload = {
      name: "teste",
      cpf: 111111111
    }

    const response = await userUseCase.saveData(mockPayload);

    expect(response).toHaveProperty("cpf")
    expect(response).toHaveProperty("message")
  })
});
