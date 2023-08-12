import { Grid, Typography } from '@mui/material'
import { LandingLayout } from '@/components/layouts'
import { useWrite } from '../hook/useWrite';

const HomePage = () => {

  const {actualPhrase} = useWrite('Nombre Asociacion')

  return (
    <LandingLayout title='Asociacion Estudiantil | Inicio' pageDescription='Pagina web del grupo candidato a la asociacion estudiantil'>
        <Grid>
          <Typography variant='h1' color='primary' component='h1' sx={{ width: 'maxContent', padding: { sm: '0 60px'}}} mt={15}>{actualPhrase}</Typography>

        </Grid>
    </LandingLayout>
  )
}

export default HomePage
