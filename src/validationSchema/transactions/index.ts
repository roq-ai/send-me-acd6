import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  item_id: yup.string().nullable(),
});
