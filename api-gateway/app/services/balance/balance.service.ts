import { IBalanceService } from "../../dto/interfaces"
import { TBalance, TBalanceWithoutUserId } from "../../dto/types"
import { IntegrationService } from "../../utils/integration.service"

class BalanceService implements IBalanceService {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }

  async getBalance(userId: TBalance["userId"]) {
    const data = {
      method: 'get',
      url: 'http://api-saldo:3001/balance/'+ userId,
    }

    return await this.integrationService.request(data)
  }

  async updateBalance(userId: TBalance["userId"], payload: TBalanceWithoutUserId) {
    const data = {
      method: 'put',
      url: 'http://api-saldo:3001/balance/' + userId,
      payload: {
        amount: payload.amount,
      }
    }

    return await this.integrationService.request(data)
  }
}

export {BalanceService}