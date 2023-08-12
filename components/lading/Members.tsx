import { Grid, Typography } from '@mui/material'
import React from 'react'
import { DecoredTitle } from '../ui'
import { Carrousel, Gallery } from './ui'

export const Members = () => {
  return (
    <Grid container spacing={4} sx={{ p: 2, background: '#101010', color: 'white'}}>

      <Grid item xs={12}>
        <DecoredTitle title='Conoce a nuestros integrantes'>
        </DecoredTitle>
      </Grid>

      <Grid item xs={12} sx={{ display: { xs: 'none', md: 'flex'}, flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <Gallery/>
      </Grid>

      <Grid item xs={12} sx={{ display: { xs: 'bock', md: 'none'}}}>
        <Carrousel/>
      </Grid>

    </Grid>
  )
}
