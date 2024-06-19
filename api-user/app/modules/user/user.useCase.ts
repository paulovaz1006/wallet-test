import { UserRepository } from "../../repository/user.repository"
import { BalanceService } from "../../services/balance.service";

class UserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }

  async saveData(payload: any) {
    const result = await this.userRepository.save(payload);
    if (result) {
      const balanceService = new BalanceService()

      try {
        console.log(result)
        const createBalance = await balanceService.createBalance(result.id, 1000)
        return createBalance
      } catch (err) {
        return err
      }
    }

    return "User not created.";
  }
}

export {UserUseCase}