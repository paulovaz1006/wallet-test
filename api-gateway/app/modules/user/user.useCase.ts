import { IUserService, IUserUseCase } from "../../dto/interfaces";
import { TUser } from "../../dto/types";

class UserUseCase implements IUserUseCase {
  constructor(private userService: IUserService) {}

  async execute(payload: TUser): Promise<any> {
    try {
      const createUser = await this.userService.createUser(payload);
      return createUser
    } catch (err) {
      return err
    }
  }
}

export {UserUseCase}