import { Module } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { AccountController } from '../controllers/account.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
