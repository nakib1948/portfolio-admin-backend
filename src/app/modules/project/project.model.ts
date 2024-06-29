import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  server: {
    type: String,
    required: true,
  },
  liveSite: {
    type: String,
    required: true,
  },
});

export const Project = model<TProject>('Project', projectSchema);
