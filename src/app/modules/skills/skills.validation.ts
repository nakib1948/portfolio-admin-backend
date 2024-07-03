import { z } from 'zod';

const skillValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'Name is required',
    }),
    percentage: z.string({
      invalid_type_error: 'percentage must be a string',
      required_error: 'percentage is required',
    }),
    image: z.string({
      invalid_type_error: 'image must be a string',
      required_error: 'image is required',
    }),
  }),
});

const skillUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'Name is required',
    }).optional(), 
    percentage: z.string({
      invalid_type_error: 'percentage must be a string',
      required_error: 'percentage is required',
    }).optional(), 
    image: z.string({
      invalid_type_error: 'image must be a string',
      required_error: 'image is required',
    }).optional(), 
  }),
});


export const skillValidation = {
  skillValidationSchema,
  skillUpdateValidationSchema
};
