import { Theme } from '@emotion/react'
import { Card, CardContent, CardMedia, Grid, List, SxProps, Typography } from '@mui/material'
import { examplesProposal } from './basicData'
import { CSSProperties } from 'react'
import Image from 'next/image'



export const Proposals = () => {
  return (
    <div id='Propuestas' style={{ marginBottom: '50px'}}>

      <Grid container spacing={2}>
        <Grid item xs={12} textAlign='center' mt={8} mb={8} >
          <Typography variant='h2'>Propuestas</Typography>
        </Grid>

        {

          examplesProposal.map( ({ id, img, desc, title}) => (
            <Grid item xs={12} key={id} mb={3}>
              <Card sx={{ width: '80%' , display: {md:'flex', sm: 'block'}, margin: '0 auto'}}  >
                <Grid item  >
                  <CardMedia
                    component='img'
                    height={240}
                    image={img}
                    alt='Prouesta Asociacion SC'
                  />
                </Grid>

                <Grid item>

                  <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>{title}</Typography>

                    <Typography variant='body2'>
                      { desc }
                    </Typography>
                  </CardContent>
                </Grid>

              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}


