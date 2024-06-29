import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import LayoutRedirect from '../../components/layoutRedirect'
import { EClientPath } from '../../models/api'

const AppLayout = () => {
  return (
    <LayoutRedirect to={EClientPath.login} needsAuth={true}>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
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
      </Container>
    </LayoutRedirect>
  )
}

export default AppLayout
