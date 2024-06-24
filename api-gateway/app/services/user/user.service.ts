import { IUserService } from "../../dto/interfaces"
import { IntegrationService } from "../../utils/integration.service"

class UserService implements IUserService  {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }

  async createUser({name,cpf}: any) {
    const data = {
      method: 'post',
      url: 'http://api-user:3003/user',
      payload: {
          name,
          cpf
      }
    }

    return await this.integrationService.request(data)
  }
}

export { UserService }