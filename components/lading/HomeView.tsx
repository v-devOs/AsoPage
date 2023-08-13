import { Grid, Typography, Box } from '@mui/material';
import React from 'react'
import { AboutWe } from './ui';
import Image from 'next/image';

export const HomeView = () => {
  return (
    <Grid container spacing={4} sx={{ p: 2, height: 'max-content',  background: '#101010', color: 'white'}}>

      <Grid item xs={12} lg={8}>
        <Box>
          <Typography variant='h1' component='h1'>Asociacion Estudiantil de Sistemas</Typography>
          <Typography variant='h3' component='h2'>
            Lorem ipsum dolor  eligendi sapiente nostrum.
          </Typography>
        </Box>

      </Grid>
      <Grid item xs={12} lg={4}>
        <Image
          alt='Vector programacion'
          src='/images/svg-1.svg'
          width={400}
          height={350}
          className='img-about-we'
        />
      </Grid>

      <Grid item xs={12} mb={5}>
       <AboutWe/>
      </Grid>
    </Grid>
  )
}
