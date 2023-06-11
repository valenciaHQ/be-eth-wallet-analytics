import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type WalletDocument = HydratedDocument<Wallets>;

@Schema()
export class Wallets {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  id: string;

  @Prop({ required: true })
  address: string;
}

export const WalletsSchema = SchemaFactory.createForClass(Wallets);
