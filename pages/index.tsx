import { Box, Grid, Typography } from '@mui/material'
import { Proposals } from '@/components/AsoPage'
import { LandingLayout } from '@/components/layouts'
import { Navbar, SideMenu } from '@/components/ui'

const HomePage = () => {
  return (
    <LandingLayout title='Asociacion Estudiantil | Inicio'>
      <Grid container display='flex' justifyContent='center'>
        <Typography variant='h1' color='primary'>Nombre Aso</Typography>

        <Proposals/>
      </Grid>
    </LandingLayout>
  )
}

export default HomePage
