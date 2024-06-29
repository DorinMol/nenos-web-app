import { StateCreator } from 'zustand'
import { EStoreKeys } from '../../../models/store'

type TRestaurantDefinition = {
  id: number
  name: string
  address: string
  email: string
  phone: string
  createdAt?: string
  updatedAt?: string
}

type TRestaurant = {
  [EStoreKeys.restaurant]: TRestaurantDefinition
}

export type TRestaurantState = TRestaurant & {
  setRestaurant(restaurant: Partial<TRestaurantDefinition>): void
}

export const initialRestaurantState: TRestaurantDefinition = {
  id: 0,
  name: '',
  address: '',
  phone: '',
  email: '',
}

const createRestaurantSlice: StateCreator<
  TRestaurantState,
  [['zustand/devtools', unknown]],
  []
> = (set) => ({
  restaurant: initialRestaurantState,
  setRestaurant: (restaurant) =>
    set(
      (state) => ({
        restaurant: { ...state.restaurant, ...restaurant },
      }),
      false,
      {
        type: 'setRestaurant',
        restaurant,
      },
    ),
})

export default createRestaurantSlice
