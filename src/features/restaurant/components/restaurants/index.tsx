import { Grid, Stack, Typography } from '@mui/material'
import useGetRestaurants from '../../hooks/useGetRestaurants'
import RestaurantCard from '../restaurantCard'

const Restaurants = () => {
  const { isLoading, data: restaurantsData } = useGetRestaurants(1, 10)
  return (
    <Stack>
      <Typography variant="h5">Restaurants</Typography>
      {isLoading && <Typography>Loading...</Typography>}
      <Grid container spacing={3}>
        {restaurantsData?.restaurants.map((restaurant) => (
          <Grid item key={restaurant.id}>
            <RestaurantCard {...restaurant} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Restaurants
