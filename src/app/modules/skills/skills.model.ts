import { Schema, model } from 'mongoose';
import { TSkill } from './skills.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    percentage: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Skill = model<TSkill>('Skill', skillSchema);
