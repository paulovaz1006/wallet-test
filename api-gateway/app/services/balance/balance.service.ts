import { IntegrationService } from "../../utils/integration.service"

class BalanceService {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }

  async getBalance(user_id: string) {
    const data = {
      method: 'get',
      url: 'http://api-saldo:3001/balance/'+ user_id,
    }

    return await this.integrationService.request(data)
  }

  async updateBalance(user_id: string, payload: any) {
    const data = {
      method: 'put',
      url: 'http://api-saldo:3001/balance/' + user_id,
      payload: {
        amount: payload.amount,
      }
    }

    return await this.integrationService.request(data)
  }
}

export {BalanceService}