import { useMutation } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import store from '../../../../store'

const createUser = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      token
    }
  }
`

type TRegister = {
  email: string
  password: string
}

type TCreateUserResponse = {
  createUser: {
    token: string
  }
}

const useRegister = () => {
  const setUser = store((state) => state.setUser)
  return useMutation({
    mutationKey: ['register'],
    mutationFn: ({
      email,
      password,
    }: TRegister): Promise<TCreateUserResponse> =>
      request(import.meta.env.VITE_ENDPOINT, createUser, {
        user: {
          email,
          password,
        },
      }),
    onSuccess: (data: TCreateUserResponse) => {
      setUser({ token: data.createUser.token })
    },
  })
}

export default useRegister
