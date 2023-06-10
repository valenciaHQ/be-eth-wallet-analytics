import { Controller, Get } from '@nestjs/common';
import { RatesService } from '../services/rates.service';

@Controller('rates')
export class RatesController {
  constructor(private ratesService: RatesService) {}

  //TODO this could be handled receiving :rate as param, but etherscan only support ETH rate.
  @Get('/eth')
  async getEthRate() {
    try {
      const response = this.ratesService.getEthRate();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
