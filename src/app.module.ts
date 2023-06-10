import { Module } from '@nestjs/common';
import { AccountController } from './common/controllers/account.controller';
import { AccountService } from './common/services/account.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { RatesController } from './common/controllers/rates.controller';
import { RatesService } from './common/services/rates.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AccountController, RatesController],
  providers: [AccountService, RatesService],
})
export class AppModule {}
