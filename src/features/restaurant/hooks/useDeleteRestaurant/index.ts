import { useMutation, useQueryClient } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'

const deleteRestaurant = gql`
  mutation deleteRestaurant($id: ID!) {
    deleteRestaurant(id: $id) {
      id
      name
      address
      phone
      createdAt
      updatedAt
    }
  }
`

const useDeleteRestaurant = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteRestaurant'],
    mutationFn: (id: number) =>
      request(import.meta.env.VITE_ENDPOINT, deleteRestaurant, {
        id,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
    },
  })
}

export default useDeleteRestaurant
