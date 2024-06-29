import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from '../../pages/routes'

const router = createBrowserRouter([
  {
    children: routes,
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
