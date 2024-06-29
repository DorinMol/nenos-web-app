import { Navigate, RouteObject } from 'react-router-dom'
import AuthLayout from '../layouts/auth'
import { EClientPath } from '../models/api'

const routes: RouteObject[] = [
  {
    path: EClientPath.root,
    element: <Navigate to={EClientPath.login} replace />,
  },
  {
    element: <AuthLayout />,
    children: [],
  },
]

export default routes
