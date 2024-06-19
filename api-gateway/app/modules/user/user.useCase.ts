import { UserService } from "../../services/user/user.service";

class UserUseCase {
  private userService: UserService;

  constructor() {
    this.userService = new UserService()
  }

  async execute(payload: any) {
    try {
      const createUser = await this.userService.createUser(payload);
      return createUser
    } catch (err) {
      return err
    }
  }
}

export {UserUseCase}