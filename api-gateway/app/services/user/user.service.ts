import { IUserService } from "../../dto/interfaces"
import { IntegrationService } from "../../utils/integration.service"

class UserService implements IUserService  {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }

  async createUser({name,cnpj}: any) {
    const urlBase = process.env.APIUSER
    const data = {
      method: 'post',
      url: `http://${urlBase}:3003/user`,
      payload: {
          name,
          cnpj
      }
    }

    return await this.integrationService.request(data)
  }
}

export { UserService }