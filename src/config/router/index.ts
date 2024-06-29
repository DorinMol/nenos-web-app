import { createBrowserRouter } from 'react-router-dom'
import routes from '../../pages/routes'

const router = createBrowserRouter([
  {
    children: routes,
  },
])

export default router
