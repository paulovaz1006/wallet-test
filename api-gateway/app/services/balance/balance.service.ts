import { IntegrationService } from "../../utils/integration.service"

class BalanceService {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }

  async getBalance(user_id: string) {
    const data = {
      method: 'get',
      url: 'http://localhost:3001/balance/' + user_id,
    }

    return await this.integrationService.request(data)
  }
}

export {BalanceService}