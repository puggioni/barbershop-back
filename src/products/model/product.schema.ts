import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Product = Product & Document;

@Schema()
export class Product {}
