import { HomeLayout } from '@/components/layouts/HomeLayout';
import { Typography } from '@mui/material'
import { useWrite } from '../hook/useWrite';
import { Members, Projects, Proposals } from '@/components/lading';
import { HomeView } from '@/components/lading/HomeView';


const HomePage = () => {

  const { actualPhrase } = useWrite('Nombre Asociacion')

  return (
    <HomeLayout
      title='Asociación de Sistemas Computacionales'
      desc='Descripcion pagina'
    >
      
      <section>

        <HomeView/>
      </section>
      
      <section className='section-proposals spacing-sections'>
        <Proposals />
      </section>

      <section className='section-projects spacing-sections appearWhenScroll'>
        <Projects />
      </section>
      <section className='section-projects spacing-sections appearWhenScroll'>
        <Members />
      </section>
      <section className='section-projects spacing-sections appearWhenScroll'>
        {/* TODO: Crear componente para registro a eventos */}
      </section>


    </HomeLayout>
  )
}

export default HomePage
