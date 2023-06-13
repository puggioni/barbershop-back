import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/model/product.schema';
import mongoose from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  phoneNumber: number;

  googleAccount: boolean;

  secret: string;

  @Prop({ required: true })
  role: {
    type: string;
    enum: ['admin', 'user', 'superadmin'];
  };

  @Prop()
  profileImage: string;

  @Prop()
  autenticated: boolean;

  @Prop()
  favoritePorducts: [{ type: mongoose.Schema.Types.ObjectId; ref: 'Product' }];
}

export const UsersSchema = SchemaFactory.createForClass(Users);
