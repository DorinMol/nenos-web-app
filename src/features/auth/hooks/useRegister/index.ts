import { useMutation } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'

const createUser = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      email
      createdAt
      updatedAt
    }
  }
`

type TRegister = {
  email: string
  password: string
}

const useRegister = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: ({ email, password }: TRegister) =>
      request(import.meta.env.VITE_ENDPOINT, createUser, {
        user: {
          email,
          password,
        },
      }),
  })
}

export default useRegister
