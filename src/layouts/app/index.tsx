import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import LayoutRedirect from '../../components/layoutRedirect'
import { EClientPath } from '../../models/api'

const AppLayout = () => {
  return (
    <LayoutRedirect to={EClientPath.login} needsAuth={true}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            p: 2,
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </LayoutRedirect>
  )
}

export default AppLayout
