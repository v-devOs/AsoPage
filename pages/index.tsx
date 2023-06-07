import { LandingLayout } from '@/components/layouts'
import { Navbar, SideMenu } from '@/components/ui'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <LandingLayout title='Asociacion Estudiantil | Inicio'>
      <Grid container display='flex' justifyContent='center'>
        <Typography variant='h1' color='primary'>Asociacion Estudiantil Ingenieria en Sistemas Computacionales</Typography>
      </Grid>
    </LandingLayout>
  )
}

export default HomePage
