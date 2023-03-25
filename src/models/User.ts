import {Schema, model, models, Model} from 'mongoose';

export interface UserDoc {
  id: string;
  name: string;
  email: string;
  picture?: string;
  role: 'user' | 'admin';
}

const userSchema = new Schema<UserDoc>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    picture: String,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
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

userSchema.set('versionKey', 'version');

const User = models.User || model<UserDoc>('User', userSchema);

export {User};
