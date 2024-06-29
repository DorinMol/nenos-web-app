import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {
  TRestaurantState,
  initialRestaurantState,
} from '../features/restaurant/store'
import createRestaurantSlice from '../features/restaurant/store/index'
import createUserSlice, {
  TUserState,
  initialUserState,
} from '../features/user/store'
import { EStoreKeys } from '../models'

type StoreType = TUserState & TRestaurantState & { resetStore: () => void }

const store = create<StoreType>()(
  devtools(
    persist(
      (set, ...a) => ({
        ...createUserSlice(set, ...a),
        ...createRestaurantSlice(set, ...a),
        resetStore: () => {
          return set({
            [EStoreKeys.user]: initialUserState,
            [EStoreKeys.restaurant]: initialRestaurantState,
          })
        },
      }),
      {
        name: 'nenos',
      },
    ),
    { enabled: import.meta.env.VITE_ENV === 'development', name: 'nenos' },
  ),
)

export default store
