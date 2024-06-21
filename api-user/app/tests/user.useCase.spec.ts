import { UserUseCase } from "../modules/user/user.useCase";
import { UserRepository } from "../repository/user.repository";
import { BalanceService } from "../services/balance.service";

// Mockando as dependências
jest.mock("../../repository/user.repository");
jest.mock("../../services/balance.service");

describe("UserUseCase", () => {
  let userUseCase: UserUseCase;
  let userRepositoryMock: jest.Mocked<UserRepository>;
  let balanceServiceMock: jest.Mocked<BalanceService>;

  beforeEach(() => {
    // Configurar as instâncias mock
    userRepositoryMock = new UserRepository() as jest.Mocked<UserRepository>;
    balanceServiceMock = new BalanceService() as jest.Mocked<BalanceService>;
    userUseCase = new UserUseCase();

    // Substituir as instâncias reais pelas mocks
    userUseCase["userRepository"] = userRepositoryMock;
  });

  it("should return message if user already exists", async () => {
    userRepositoryMock.findByCpf.mockResolvedValue({ cpf: "12345678900" });

    const payload = { cpf: "12345678900", name: "John Doe" };
    const result = await userUseCase.saveData(payload);

    expect(result).toEqual({ cpf: "12345678900", message: "User already exists" });
    expect(userRepositoryMock.findByCpf).toHaveBeenCalledWith(payload.cpf);
  });

  it("should create a new user and return success message", async () => {
    userRepositoryMock.findByCpf.mockResolvedValue(null);
    userRepositoryMock.save.mockResolvedValue({ id: 1, name: "John Doe" });
    balanceServiceMock.createBalance.mockResolvedValue(true);

    const payload = { cpf: "12345678900", name: "John Doe" };
    const result = await userUseCase.saveData(payload);

    expect(result).toEqual({
      id: 1,
      name: "John Doe",
      message: "User and balance created successfully",
    });
    expect(userRepositoryMock.findByCpf).toHaveBeenCalledWith(payload.cpf);
    expect(userRepositoryMock.save).toHaveBeenCalledWith(payload);
    expect(balanceServiceMock.createBalance).toHaveBeenCalledWith(1, 1000);
  });

  it("should return error if balance creation fails", async () => {
    userRepositoryMock.findByCpf.mockResolvedValue(null);
    userRepositoryMock.save.mockResolvedValue({ id: 1, name: "John Doe" });
    balanceServiceMock.createBalance.mockRejectedValue(new Error("Balance creation failed"));

    const payload = { cpf: "12345678900", name: "John Doe" };
    const result = await userUseCase.saveData(payload);

    expect(result).toEqual(new Error("Balance creation failed"));
    expect(userRepositoryMock.findByCpf).toHaveBeenCalledWith(payload.cpf);
    expect(userRepositoryMock.save).toHaveBeenCalledWith(payload);
    expect(balanceServiceMock.createBalance).toHaveBeenCalledWith(1, 1000);
  });

  it("should return 'User not created.' if saving user fails", async () => {
    userRepositoryMock.findByCpf.mockResolvedValue(null);
    userRepositoryMock.save.mockResolvedValue(null);

    const payload = { cpf: "12345678900", name: "John Doe" };
    const result = await userUseCase.saveData(payload);

    expect(result).toEqual("User not created.");
    expect(userRepositoryMock.findByCpf).toHaveBeenCalledWith(payload.cpf);
    expect(userRepositoryMock.save).toHaveBeenCalledWith(payload);
  });
});
