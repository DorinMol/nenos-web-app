import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import useDeleteRestaurant from '../../hooks/useDeleteRestaurant'
import { TRestaurant } from '../../models'

const RestaurantCard = (restaurant: TRestaurant) => {
  const { mutate: deleteRestaurant, isPending } = useDeleteRestaurant()
  const [isHovered, setIsHovered] = useState(false)
  const handleEditRestaurant = () => {}
  const handleDeleteRestaurant = () => {
    deleteRestaurant(restaurant.id)
  }
  return (
    <Paper
      elevation={isHovered ? 6 : 3}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack spacing={1}>
        <Typography variant="h5">{restaurant.name}</Typography>
        <Typography variant="body2">{restaurant.address}</Typography>
        <Typography variant="body2">{restaurant.phone}</Typography>
        {isHovered && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button disabled={isPending} onClick={handleEditRestaurant}>
              Edit
            </Button>
            <Button disabled={isPending} onClick={handleDeleteRestaurant}>
              {isPending ? 'Deleting' : 'Delete'}
            </Button>
          </Box>
        )}
      </Stack>
    </Paper>
  )
}

export default RestaurantCard
