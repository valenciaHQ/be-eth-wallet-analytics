import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallets } from '../schemas/wallets.schema';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallets.name)
    private walletsModel: Model<Wallets>,
  ) {}

  getAll() {
    this.walletsModel.find({});
  }

  //Create a wallet in database
  create(address: string) {
    const wallet = { address };
    try {
      this.walletsModel.create(wallet);
    } catch (error) {
      console.error(error);
    }
  }
}
