import { useMutation } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import store from '../../../../store'

const loginMutation = gql`
  mutation loginUser($user: LoginUserInput!) {
    loginUser(user: $user) {
      token
    }
  }
`

type TLogin = {
  email: string
  password: string
}

type TLoginResponse = {
  loginUser: {
    token: string
  }
}

const useLogin = () => {
  const setUser = store((state) => state.setUser)
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: TLogin): Promise<TLoginResponse> =>
      request(import.meta.env.VITE_ENDPOINT, loginMutation, {
        user: {
          email,
          password,
        },
      }),
    onSuccess: (data: TLoginResponse) => {
      setUser({ token: data.loginUser.token })
    },
  })
}

export default useLogin
