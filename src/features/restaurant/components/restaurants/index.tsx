import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Modal,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import store from '../../../../store'
import useGetRestaurants from '../../hooks/useGetRestaurants'
import RestaurantCard from '../restaurantCard'
import RestaurantModal from '../restaurantModal'

const Restaurants = () => {
  const [openModal, setOpenModal] = useState(false)
  const [page, setPage] = useState(1)
  const [restaurant, resetRestaurant] = store((state) => [
    state.restaurant,
    state.resetRestaurant,
  ])
  const {
    isFetching,
    data: restaurantsData,
    refetch,
  } = useGetRestaurants(page, 10)

  useEffect(() => {
    refetch()
  }, [page, refetch])
  return (
    <>
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Typography variant="h5">Restaurants</Typography>
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            Create Restaurant
          </Button>
        </Box>
        {isFetching && <CircularProgress />}
        <Grid container spacing={3}>
          {restaurantsData?.restaurants.map((restaurant) => (
            <Grid item key={restaurant.id}>
              <RestaurantCard
                restaurant={restaurant}
                setOpenModal={setOpenModal}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={10}
          variant="outlined"
          onChange={(_, page: number) => setPage(page)}
        />
      </Stack>
      {/* Edit/Create modal */}
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          if (restaurant.id) resetRestaurant()
        }}
      >
        <>
          <RestaurantModal />
        </>
      </Modal>
    </>
  )
}

export default Restaurants
