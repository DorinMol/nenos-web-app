import { useMutation, useQueryClient } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import { TRestaurant } from '../../models'

const updateRestaurant = gql`
  mutation updateRestaurant($restaurant: UpdateRestaurantInput!) {
    updateRestaurant(restaurant: $restaurant) {
      id
      name
      email
      address
      phone
    }
  }
`

const useUpdateRestaurant = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['updateRestaurant'],
    mutationFn: (restaurant: TRestaurant): Promise<TRestaurant> =>
      request(import.meta.env.VITE_ENDPOINT, updateRestaurant, {
        restaurant,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
    },
  })
}

export default useUpdateRestaurant
