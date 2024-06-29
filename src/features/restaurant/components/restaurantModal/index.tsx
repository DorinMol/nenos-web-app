import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import store from '../../../../store'
import useCreateRestaurant from '../../hooks/useCreateRestaurant'
import useUpdateRestaurant from '../../hooks/useUpdateRestaurant'
import validationSchema from './utils'

type TFormValues = {
  name: string
  address: string
  email: string
  phone: string
}

type TProps = {
  setOpenModal: (value: boolean) => void
}

function RestaurantModal({ setOpenModal }: TProps) {
  const [restaurant, resetRestaurant] = store((state) => [
    state.restaurant,
    state.resetRestaurant,
  ])
  const isEditMode = !!restaurant.id
  const { mutate: updateRestaurant, isPending: isUpdating } =
    useUpdateRestaurant()
  const { mutate: createRestaurant, isPending: isCreating } =
    useCreateRestaurant()
  const formik = useFormik<TFormValues>({
    enableReinitialize: true,
    initialValues: {
      name: restaurant.name,
      address: restaurant.address,
      email: restaurant.email,
      phone: restaurant.phone,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (isEditMode) {
          updateRestaurant({ id: restaurant.id, ...values })
          resetRestaurant()
        } else {
          createRestaurant(values)
        }
        setOpenModal(false)
      } catch (error) {
        console.error(error)
      } finally {
        formik.resetForm()
      }
    },
  })

  return (
    <Paper
      sx={{
        width: { xs: 300, md: 500 },
        p: 3,
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h5" align="center">
            {isEditMode
              ? `Editing restaurant ${restaurant.name}`
              : 'Creating restaurant'}
          </Typography>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            placeholder="Your name"
            variant="standard"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            placeholder="Your address"
            variant="standard"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="Your email address"
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            placeholder="Your phone"
            variant="standard"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={isUpdating || isCreating}
          >
            {isEditMode
              ? isUpdating
                ? 'Editing...'
                : 'Edit'
              : isCreating
              ? 'Creating...'
              : 'Create'}
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default RestaurantModal
