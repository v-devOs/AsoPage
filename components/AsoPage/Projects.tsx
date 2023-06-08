import { Grid, Typography, List, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { examplesProposal } from './basicData';


export const Projects = () => {
  return (

    <div id="Projectos" className="container-projects"  style={{ paddingBottom: '50px'}}>

      <Grid container >

        <Grid item xs={12} textAlign='center' mt={5}>
          <Typography variant="h2" component='h2' color='primary'>Proyectos de la Asociacion</Typography>
          
        </Grid>

          {
             examplesProposal.map( ({ id, img, desc, title}) => (
              <Grid item xs={12} sm={6} lg={4} key={id} mt={3} display='flex' justifyContent='center'>
                <Card sx={{ width: 300 , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}  >

                  <CardActionArea>
                    
                    <CardMedia
                      component='img'
                      height={240}
                      image={img}
                      alt='Prouesta Asociacion SC'
                    />
    
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>{title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>

    </div>
  )
}
