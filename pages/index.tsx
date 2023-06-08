import { Grid, Typography } from '@mui/material'
import { SectionsNavbar } from '@/components/AsoPage'
import { LandingLayout } from '@/components/layouts'

const HomePage = () => {

  return (
    <LandingLayout title='Asociacion Estudiantil | Inicio'>
        <Grid container display='flex' justifyContent='center'>
          <Typography variant='h1' color='primary' component='h1' sx={{ width: 'maxContent'}} mt={15}>Nombre Aso</Typography>

          <SectionsNavbar/>
        </Grid>        
    </LandingLayout>
  )
}

export default HomePage
