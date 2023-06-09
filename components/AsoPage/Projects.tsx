import { Grid, Typography, List, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { examplesProposal, projectsAso } from './basicData';
import { SectionPageLayout } from '../layouts';
import { useRouter } from 'next/router';

export const Projects = () => {

  const router = useRouter();

  

  return (
    <SectionPageLayout title='Proyectos' id='Proyectos' useColorPrimary sectionClass='container-projects'>
      {
       projectsAso.map( ({ _id, img, notes, nameProject, slug}) => (
          <Grid item xs={12} sm={6} lg={4} 
                key={_id} mt={3} 
                display='flex' 
                justifyContent='center'
                className='container-project'
                onClick={ () => router.push(`/project/${slug}`)}
          >
            <Card sx={{ width: 300 , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}  >

              <CardActionArea >
                
                <CardMedia
                  component='img'
                  height={240}
                  image={img}
                  alt='Prouesta Asociacion SC'
                />

              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>{nameProject}</Typography>
                {
                  notes && (
                    <Typography variant='body2'>{ notes }</Typography>
                  )
                }
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </SectionPageLayout>
   
  )
}

{/* <div id="Proyectos" className="container-projects"  style={{ paddingBottom: '50px'}}>

<Grid container >

  <Grid item xs={12} textAlign='center' mt={8} mb={8}>
    <Typography variant="h2" component='h2' color='primary'>Proyectos de la Asociacion</Typography>
    
  </Grid>

    
  </Grid>

</div> */}
