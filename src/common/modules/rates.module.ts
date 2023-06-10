import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RatesController } from '../controllers/rates.controller';
import { RatesService } from '../services/rates.service';

@Module({
  imports: [HttpModule],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
