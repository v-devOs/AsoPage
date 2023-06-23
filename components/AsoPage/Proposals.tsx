import { Theme } from '@emotion/react'
import { Card, CardContent, CardMedia, Grid, List, SxProps, Typography } from '@mui/material'
import { examplesProposal } from './basicData'
import { CSSProperties } from 'react'
import Image from 'next/image'
import { SectionPageLayout } from '../layouts'
import { proposalsAso } from '@/data'



export const Proposals = () => {

  return(
    <SectionPageLayout title={'Propuestas'} id={'Propuestas'} sectionClass=''>
      {
        proposalsAso.map( ({ _id, img, desc, nameProposal}) => (
          <Grid item xs={12} key={_id} mb={3}>
            <Card sx={{ width: '80%' , margin: '0 auto'}}  >
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
                  <Typography gutterBottom variant='h6' component='div'>{nameProposal}</Typography>

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


