import { Theme } from '@emotion/react'
import { Card, CardContent, CardMedia, Divider, Grid, List, SxProps, Typography } from '@mui/material'
import { examplesProposal } from './basicData'
import { CSSProperties } from 'react'
import Image from 'next/image'
import { SectionPageLayout } from '../layouts'
import { proposalsAso } from '@/data'



export const Proposals = () => {

  return(
    <SectionPageLayout title={'Propuestas'} id={'Propuestas'} sectionClass=''>

      <Grid item xs={12} sx={{ display: {xs: 'block', md: 'flex'}, m:{ md: '0 20px'}}}>

        {
          proposalsAso.map( ({ _id, desc, nameProposal}) => (
            <Grid item xs={12} key={_id} mb={3}>
                <CardContent sx={{ height: '300px'}}>
                  <Typography variant='h5' component='h5'>{ nameProposal }</Typography>
                  <Divider sx={{ m: '5px 0'}}/>
                  <Typography variant='body1' component='h5'>{ desc }</Typography>
                </CardContent>
            </Grid>
          ))
        }
      </Grid>
    </SectionPageLayout>
  )
}


