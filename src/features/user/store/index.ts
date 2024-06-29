import { StateCreator } from 'zustand'
import { EStoreKeys } from '../../../models/store'

type TUserDefinition = {
  token?: string
}

type TUser = {
  [EStoreKeys.user]: TUserDefinition
}

export type TUserState = TUser & {
  setUser(user: Partial<TUserDefinition>): void
}

export const initialUserState: TUserDefinition = {
  token: '',
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
        user: { ...state.user, ...user },
      }),
      false,
      {
        type: 'setUser',
        user,
      },
    ),
})

export default createUserSlice
