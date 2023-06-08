import { Theme } from '@emotion/react'
import { Card, CardContent, CardMedia, Grid, List, SxProps, Typography } from '@mui/material'
import { examplesProposal } from './basicData'

const stylesProposals: SxProps<Theme> = {
  position: 'absolute',
  width: '95%',
  top: '450px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  height: 'maxContent',
  padding:  { xs: '30px 15px', sm: '50px'},
  margin: '0 auto',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  
}



export const Proposals = () => {
  return (
    <Grid container sx={stylesProposals} spacing={2}>

      <Grid item xs={12} textAlign='center'  >
        <Typography variant='h2'>Propuestas</Typography>
      </Grid>

      {

        examplesProposal.map( ({ id, img, desc, title}) => (
          <Grid item xs={12} sm={4} key={id} mt={3}  >
            <Card sx={{ maxWidth: 300 , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}  >
              <CardMedia
                component='img'
                height={240}
                image={img}
                alt='Prouesta Asociacion SC'
              />

              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>{title}</Typography>

                <Typography variant='body2'>
                  { desc }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
      
    </Grid>
  )
}
