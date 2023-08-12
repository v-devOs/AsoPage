import { HomeLayout } from '@/components/layouts/HomeLayout';
import { Typography } from '@mui/material'
import { useWrite } from '../hook/useWrite';
import { Projects, Proposals } from '@/components/lading';

const HomePage = () => {

  const {actualPhrase} = useWrite('Nombre Asociacion')

  return (
    <HomeLayout 
      title='Aso page' 
      desc='Descripcion pagina'
    >

      <section className='section-main spacing-sections'>
        <Typography variant='h1' component='h1' color='white' sx={{ textAlign: 'center'}}>{ actualPhrase }</Typography>
      </section>

      <section className='section-proposals spacing-sections'>
        <Proposals/>
      </section>

      <section className='section-projects spacing-sections'>
        <Projects/>
      </section>


    </HomeLayout>
  )
}

export default HomePage
