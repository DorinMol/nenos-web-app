import { Navigate, RouteObject } from 'react-router-dom'
import AppLayout from '../layouts/app'
import AuthLayout from '../layouts/auth'
import { EClientPath } from '../models/api'
import LoginPage from './login'
import RegisterPage from './register'
import RestaurantsPage from './restaurants'

const routes: RouteObject[] = [
  {
    path: EClientPath.other,
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
  {
    element: <AppLayout />,
    children: [
      {
        path: EClientPath.restaurants,
        element: <RestaurantsPage />,
      },
    ],
  },
]

export default routes
