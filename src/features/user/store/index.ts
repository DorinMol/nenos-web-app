import { StateCreator } from 'zustand'
import { EStoreKeys } from '../../../models'

type TUserDefinition = {
  id: number
  email: string
  createdAt?: string
  updatedAt?: string
}

type TUser = {
  [EStoreKeys.user]: TUserDefinition
}

export type TUserState = TUser & {
  setUser(user: Partial<TUserDefinition>): void
}

export const initialUserState: TUserDefinition = {
  id: 0,
  email: '',
}

const createUserSlice: StateCreator<
  TUserState,
  [['zustand/devtools', unknown]],
  []
> = (set) => ({
  user: initialUserState,
  setUser: (user) =>
    set(
      (state) => ({
        user: state.user,
      }),
      false,
      {
        type: 'setUser',
        user,
      },
    ),
})

export default createUserSlice
