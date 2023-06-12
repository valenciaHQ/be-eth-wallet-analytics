import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from '../services/account.service';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get('/transactions/:address')
  async getAllTransactions(@Param('address') address: string) {
    const response = this.accountService.getAllTransactions(address);
    return response;
  }

  @Get('/balance/:address')
  async getBalance(@Param('address') address: string) {
    const response = this.accountService.getBalance(address);
    return response;
  }
}
