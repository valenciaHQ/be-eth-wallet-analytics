import { Module } from '@nestjs/common';
import { AccountController } from './common/controllers/account.controller';
import { AccountService } from './common/services/account.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { RatesController } from './common/controllers/rates.controller';
import { RatesService } from './common/services/rates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletsController } from './common/controllers/wallets.controller';
import { WalletsService } from './common/services/wallets.service';
import { Wallets, WalletsSchema } from './common/schemas/wallets.schema';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: 'digital-wallets',
    }),
    MongooseModule.forFeature([{ name: Wallets.name, schema: WalletsSchema }]),
  ],
  controllers: [AccountController, RatesController, WalletsController],
  providers: [AccountService, RatesService, WalletsService],
})
export class AppModule {}
