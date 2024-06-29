import { useQuery } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import { TRestaurant } from '../../models'

const restaurants = gql`
  query restaurants($page: Int, $pageSize: Int) {
    restaurants(page: $page, pageSize: $pageSize) {
      id
      name
      address
      phone
      createdAt
      updatedAt
    }
  }
`

type TRestaurantsResponse = {
  restaurants: TRestaurant[]
}

const useGetRestaurants = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: (): Promise<TRestaurantsResponse> =>
      request(import.meta.env.VITE_ENDPOINT, restaurants, {
        page,
        pageSize,
      }),
  })
}

export default useGetRestaurants
