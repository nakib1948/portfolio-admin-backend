import { Schema, model } from 'mongoose';
import { TLink } from './links.interface';

const linkSchema = new Schema<TLink>({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  facebook: {
    type: [String],
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  linkdin: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  aboutMeImg: {
    type: String,
    required: true,
  },
});

export const Link = model<TLink>('Link', linkSchema);
