import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'Name is required',
    }),
    description: z.string({
      invalid_type_error: 'Description must be a string',
      required_error: 'Description is required',
    }),
    details: z.string({
      invalid_type_error: 'Details must be a string',
      required_error: 'Details are required',
    }),
    image: z.array(
      z.string({
        invalid_type_error: 'Each image URL must be a string',
        required_error: 'Image array is required',
      }),
    ),
    client: z.string({
      invalid_type_error: 'Client must be a string',
      required_error: 'Client is required',
    }),
    server: z.string({
      invalid_type_error: 'Server must be a string',
      required_error: 'Server is required',
    }),
    liveSite: z.string({
      invalid_type_error: 'Live Site URL must be a string',
      required_error: 'Live Site URL is required',
    }),
    coverImage: z.string({
      invalid_type_error: 'coverImage URL must be a string',
      required_error: 'coverImage URL is required',
    }),
  }),
});
const projectUpdateValidationSchema = z.object({
    body: z.object({
      name: z.string({
        invalid_type_error: 'Name must be a string',
        required_error: 'Name is required',
      }),
      description: z.string({
        invalid_type_error: 'Description must be a string',
        required_error: 'Description is required',
      }),
      details: z.string({
        invalid_type_error: 'Details must be a string',
        required_error: 'Details are required',
      }).optional(), 
      image: z.array(
        z.string({
          invalid_type_error: 'Each image URL must be a string',
          required_error: 'Image array is required',
        }),
      ).optional(), 
      client: z.string({
        invalid_type_error: 'Client must be a string',
        required_error: 'Client is required',
      }).optional(), 
      server: z.string({
        invalid_type_error: 'Server must be a string',
        required_error: 'Server is required',
      }).optional(), 
      liveSite: z.string({
        invalid_type_error: 'Live Site URL must be a string',
        required_error: 'Live Site URL is required',
      }).optional(), 
      coverImage: z.string({
        invalid_type_error: 'coverImage URL must be a string',
        required_error: 'coverImage URL is required',
      }).optional(), 
    }),
  });
  
export const projectValidation = {
  projectValidationSchema,
  projectUpdateValidationSchema
};
