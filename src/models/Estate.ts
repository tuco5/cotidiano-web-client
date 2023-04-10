import {Model, Schema, model, models} from 'mongoose';

export interface EstateI {
  id: string;
  title: string;
  location: string;
  locationUrl: string;
  price: number;
  type: 'venta' | 'renta';
  surface: number;
  picture: string;
  status: 'vendida' | 'disponible' | 'apartada';
}

const estateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    locationUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['venta', 'renta'],
      default: 'venta',
    },
    surface: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['vendida', 'disponible', 'apartada'],
      default: 'disponible',
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id.toHexString();
        delete ret._id;
      },
    },
  }
);
estateSchema.set('versionKey', 'version');

export const Estate = models.Estate || model('Estate', estateSchema);
