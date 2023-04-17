import {Model, Schema, model, models} from 'mongoose';

export interface EstateI {
  id: string;
  title: string;
  location: string;
  locationUrl: string;
  price: number;
  type: 'venta' | 'renta';
  surface: number;
  pictures: string[];
  status: 'vendida' | 'disponible' | 'apartada';
  description?: string;
  rooms?: string;
  baths?: string;
  garage?: string;
  jacuzzi?: string;
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
    pictures: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ['vendida', 'disponible', 'apartada'],
      default: 'disponible',
    },
    description: String,
    rooms: String,
    baths: String,
    garage: String,
    jacuzzi: String,
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
