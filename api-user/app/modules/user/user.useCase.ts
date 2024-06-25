import { UserRepository } from "../../repository/user.repository"
import { BalanceService } from "../../services/balance.service";

class UserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }

  async saveData(payload: any) {
    const userExists = await this.userRepository.findBycnpj(payload.cnpj);

    if (userExists) return {cnpj: userExists.cnpj, message: "User already exists"};

    const result = await this.userRepository.save(payload);
    
    if (result) {
      const balanceService = new BalanceService()

      try {
        await balanceService.createBalance(result.id, 1000)
        return {
          id: result.id,
          name: result.name,          
          message: "User and balance created successfully"
        }
      } catch (err) {
        return err
      }
    }

    return "User not created.";
  }
}

export {UserUseCase}