import { Grid, Typography } from '@mui/material'
import { SectionsNavbar } from '@/components/AsoPage'
import { LandingLayout } from '@/components/layouts'
import { useWrite } from '../hook/useWrite';

const HomePage = () => {

  const {actualPhrase} = useWrite('Nombre Asociacion')

  return (
    <LandingLayout title='Asociacion Estudiantil | Inicio' pageDescription='Pagina web del grupo candidato a la asociacion estudiantil'>
        <Grid container display='flex' sx={{ justifyContent: { sm: 'left', md: 'center'}}}>
          <Typography variant='h1' color='primary' component='h1' sx={{ width: 'maxContent', padding: { sm: '0 60px'}}} mt={15}>{actualPhrase}</Typography>

          <SectionsNavbar/>
        </Grid>
    </LandingLayout>
  )
}

export default HomePage
