import {Schema, model, models} from 'mongoose';

export interface EstateDoc {
  id: string;
  title: string;
  location: string;
  locationUrl: string;
  price: number;
  type: 'venta' | 'renta';
  surface: number;
  picture: string;
}

const estateSchema = new Schema<EstateDoc>(
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
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

estateSchema.set('versionKey', 'version');

const Estate = models.Estate || model<EstateDoc>('Estate', estateSchema);

export {Estate};
