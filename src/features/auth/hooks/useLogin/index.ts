import { useMutation } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

type TLogin = {
  email: string
  password: string
}

const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: TLogin) =>
      request(import.meta.env.VITE_ENDPOINT, loginMutation, {
        email,
        password,
      }),
  })
}

export default useLogin
