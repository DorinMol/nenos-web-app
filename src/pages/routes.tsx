import { Navigate, RouteObject } from 'react-router-dom'
import AuthLayout from '../layouts/auth'
import { EClientPath } from '../models/api'
import LoginPage from './login'
import RegisterPage from './register'

const routes: RouteObject[] = [
  {
    path: EClientPath.root,
    element: <Navigate to={EClientPath.login} replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: EClientPath.login,
        element: <LoginPage />,
      },
      {
        path: EClientPath.register,
        element: <RegisterPage />,
      },
    ],
  },
]

export default routes
