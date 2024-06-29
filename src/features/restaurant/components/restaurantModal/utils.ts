import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup.string().required('Name is required.'),
  phone: yup.string().required('Phone is required.'),
  address: yup.string().required('Address is required.'),
  email: yup
    .string()
    .email('Email is not valid.')
    .required('Email is required.'),
})

export default validationSchema
