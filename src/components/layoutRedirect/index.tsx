import { Navigate } from 'react-router-dom'
import { EClientPath } from '../../models/api'
import store from '../../store'

interface IProps {
  needsAuth: boolean
  to: EClientPath
  children: React.ReactNode
}

function LayoutRedirect({ needsAuth, to, children }: IProps) {
  const user = store((state) => state.user)
  const isLoggedIn = Boolean(user.token)
  if (needsAuth) {
    if (isLoggedIn) return children
    return <Navigate to={to} replace />
  }
  if (isLoggedIn) return <Navigate to={to} replace />
  return children
}

export default LayoutRedirect
