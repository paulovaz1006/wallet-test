import { IntegrationService } from "../../utils/integration.service"

class ExtractService {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }
  
  async getExtract(user_id: string) {
    const data = {
      method: 'get',
      url: 'http://api-extrato:3002/extract/' + user_id,
    }

    return await this.integrationService.request(data)
  }
}

export {ExtractService}