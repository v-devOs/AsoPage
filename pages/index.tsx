import { HomeLayout } from '@/components/layouts/HomeLayout';
import { Typography } from '@mui/material'
import { useWrite } from '../hook/useWrite';
import { Members, Projects, Proposals } from '@/components/lading';

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

      <section className='section-proposals spacing-sections appearWhenScroll'>
        <Proposals/>
      </section>

      <section className='section-projects spacing-sections appearWhenScroll'>
        <Projects/>
      </section>
      <section className='section-projects spacing-sections appearWhenScroll'>
        <Members/>
      </section>
      <section className='section-projects spacing-sections appearWhenScroll'>
        {/* TODO: Crear componente para registro a eventos */}
      </section>


    </HomeLayout>
  )
}

export default HomePage
