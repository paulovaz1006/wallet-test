import { IExtractService } from "../../dto/interfaces"
import { TExtract } from "../../dto/types"
import { IntegrationService } from "../../utils/integration.service"

class ExtractService implements IExtractService {
  private integrationService:IntegrationService

  constructor() {
    this.integrationService = new IntegrationService()
  }
  
  async getExtract(userId: TExtract) {
    const urlBase = process.env.APIEXTRATO
    const data = {
      method: 'get',
      url: `http://${urlBase}3002/extract/${userId}`,
    }

    return await this.integrationService.request(data)
  }
}

export {ExtractService}