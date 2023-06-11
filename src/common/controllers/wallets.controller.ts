import { Controller, Get, Param, Post } from '@nestjs/common';
import { WalletsService } from '../services/wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Get()
  async getAll() {
    try {
      const response = this.walletsService.getAll();
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/create/:address')
  async create(@Param('address') address: string) {
    try {
      const response = this.walletsService.create(address);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
