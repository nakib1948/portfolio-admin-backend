import { z } from 'zod';

const blogValidationSchema = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'title must be a string',
      required_error: 'title is required',
    }),
    description: z.string({
      invalid_type_error: 'description must be a string',
      required_error: 'description is required',
    }),
    image: z.string({
      invalid_type_error: 'image must be a string',
      required_error: 'image is required',
    }),
    date: z.string({
      invalid_type_error: 'date must be a string',
      required_error: 'date is required',
    }),
  }),
});

export const blogValidation = {
  blogValidationSchema,
};
