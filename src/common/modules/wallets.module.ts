import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Wallets, WalletsSchema } from '../schemas/wallets.schema';
import { WalletsController } from '../controllers/wallets.controller';
import { WalletsService } from '../services/wallets.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Wallets.name, schema: WalletsSchema }]),
  ],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
