import { Theme } from '@emotion/react'
import { Card, CardContent, CardMedia, Grid, List, SxProps, Typography } from '@mui/material'
import { examplesProposal } from './basicData'
import { CSSProperties } from 'react'
import Image from 'next/image'
import { SectionPageLayout } from '../layouts'



export const Proposals = () => {

  return(
    <SectionPageLayout title={'Propuestas'} id={'Propuestas'} sectionClass=''>
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
    </SectionPageLayout>
  )
}


