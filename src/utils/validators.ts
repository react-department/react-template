import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup.string().min(3).required(),
  password: yup.string().min(3).required(),
}).required();

export const editProfileSchema = yup.object({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
}).required();
