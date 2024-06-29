import { useMutation, useQueryClient } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import { TRestaurant } from '../../models'

const createRestaurant = gql`
  mutation createRestaurant($restaurant: CreateRestaurantInput!) {
    createRestaurant(restaurant: $restaurant) {
      id
      name
      address
      phone
      email
    }
  }
`

const useCreateRestaurant = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['createRestaurant'],
    mutationFn: (restaurant: Omit<TRestaurant, 'id'>): Promise<TRestaurant> =>
      request(import.meta.env.VITE_ENDPOINT, createRestaurant, {
        restaurant,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
    },
  })
}

export default useCreateRestaurant
